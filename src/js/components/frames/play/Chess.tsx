import React, { useEffect, useState, CSSProperties } from 'react';

import { Chess, Square } from 'chess.js';
import Chessboard from 'chessboardjsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

const game = new Chess();

type ChessComponentProps = {
    color: 'w' | 'b';
};

type OverlayComponentProps = {
    visible: boolean;
    toggle(): void;
    bWins: number;
    wWins: number;
    moveHistory: string[];
};

const Overlay = (props: OverlayComponentProps) => {
    return (
        <div className="overlay">
            <FontAwesomeIcon
                icon={faInfoCircle}
                onClick={(e) => props.toggle()}
            />
            {props.visible && (
                <div>
                    <FontAwesomeIcon
                        onClick={(e) => props.toggle()}
                        icon={faTimesCircle}
                    />
                    <h2>Chess</h2>
                    <p>
                        Welcome to my game of Chess. All visitors to this site
                        can collectively play against me. When a vistor makes a
                        move, I will be notified and respond as soon as
                        possible. When one game ends, another will begin
                        automatically. If multiple visitors are playing, only
                        the first move made is accepted. Below you can see a
                        history of the moves made this game as well as an all
                        time scoreboard. Read more about implementation details{' '}
                        <a
                            target="_blank"
                            href="https://github.com/NuriAmari/website"
                        >
                            here
                        </a>
                        . To open this panel again later, click the information
                        icon in the top right of the board.
                    </p>
                    <h3>Scoreboard</h3>
                    <p>{`Nuri: ${props.bWins}, Visitors: ${props.wWins}`}</p>
                    <h3>History</h3>
                    <div>
                        <div id="header">
                            <div>Visitors</div>
                            <div>Nuri</div>
                        </div>
                        <div id="history">
                            {props.moveHistory.map((move, index) => (
                                <div key={index}>{move}</div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

type SquareStyles = {
    [square in Square]?: CSSProperties;
};

const ChessComponent = (props: ChessComponentProps) => {
    const [fen, setFen] = useState<string | null>(null);
    const [moveHistory, setMoveHistory] = useState<string[]>([]);
    const [ws, setWs] = useState<WebSocket | null>(null);
    const [overlay, setOverlay] = useState<boolean>(true);
    const [bWins, setBWins] = useState<number>(0);
    const [wWins, setWWins] = useState<number>(0);
    const [mostRecentUCI, setMostRecentUCI] = useState<string>('');

    const toggleOverlay = () => setOverlay(!overlay);

    useEffect(() => {
        const ws = new WebSocket(`wss://${window.location.hostname}/ws`);
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

            if ('HISTORY' in body) {
                setMoveHistory(body['HISTORY']);
            }

            if ('B_WINS' in body) {
                setBWins(body['B_WINS']);
            }

            if ('W_WINS' in body) {
                setWWins(body['W_WINS']);
            }

            if ('MR_UCI' in body) {
                setMostRecentUCI(body['MR_UCI']);
            }
        };

        ws.onclose = (event) => {
            console.log('Closed ws');
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
            ws.send(SAN);
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
                    squareStyles={((uci) => ({
                        [uci.slice(0, 2)]: { backgroundColor: '#cdd179e0' },
                        [uci.slice(2, 4)]: { backgroundColor: '#cdd179e0' },
                    }))(mostRecentUCI)}
                />
            ) : (
                <p>Loading</p>
            )}
            <Overlay
                visible={overlay}
                toggle={toggleOverlay}
                bWins={bWins}
                wWins={wWins}
                moveHistory={moveHistory}
            />
        </div>
    );
};

export default ChessComponent;
