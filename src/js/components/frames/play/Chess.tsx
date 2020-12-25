import React, { useEffect, useState } from 'react';

import { Chess, Square } from 'chess.js';
import Chessboard from 'chessboardjsx';

const game = new Chess();

type ChessComponentProps = {
    color: 'w' | 'b';
};

const ChessComponent = (props: ChessComponentProps) => {
    const [fen, setFen] = useState<string | null>(null);
    const [moveHistory, setMoveHistory] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket('ws://localhost/ws');
        ws.onmessage = (message) => {
            const body = JSON.parse(message.data);

            if ('FEN' in body) {
                setFen(body['FEN']);
                game.load(body['FEN']);
            }

            if ('SAN' in body) {
                setMoveHistory((prevMoveHistory) => [
                    ...prevMoveHistory,
                    body['SAN'],
                ]);
            }
        };
        setWs(ws);

        return () => {
            if (ws !== null) {
                ws.close();
            }
        };
    }, []);

    const makeMove = (SAN: string) => {
        game.move(SAN);
        if (ws !== null) {
            if (ws.readyState === WebSocket.CLOSED) {
                const newWs = new WebSocket('ws://localhost/ws');
                newWs.send(SAN);
                setWs(newWs);
            } else {
                ws.send(SAN);
            }
        }
    };

    const allowDrag = (obj: {
        piece: string;
        sourceSquare: Square;
    }): boolean => {
        return obj.piece[0] === props.color;
    };

    const onDrop = ({
        sourceSquare,
        targetSquare,
    }: {
        sourceSquare: Square;
        targetSquare: Square;
    }) => {
        const move = game.move({ from: sourceSquare, to: targetSquare });
        if (move !== null) {
            makeMove(move.san);
        }
    };

    const calcWidth = ({
        screenWidth,
        screenHeight,
    }: {
        screenWidth: number;
        screenHeight: number;
    }): number => {
        if (screenWidth > screenHeight) {
            return screenHeight - 100;
        } else {
            return screenWidth - 100;
        }
    };

    return (
        <div className="chess">
            {ws !== null ? (
                <Chessboard
                    position={fen ?? 'start'}
                    onDrop={onDrop}
                    calcWidth={calcWidth}
                    allowDrag={allowDrag}
                />
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};

export default ChessComponent;
