import React, { useState, Component } from 'react';
import List, { ListIterator } from '../../lib/List';
import { NBSP } from '../../lib/constants';

export type TerminalState = {
    currLine: string;
    terminalContent: string[];
    cursorPosition: number;
};

export type CommandHandler = (
    command: string,
    state: TerminalState
) => TerminalState;

export type TerminalProps = {
    [commandName: string]: CommandHandler;
};

class Terminal extends Component<TerminalProps, TerminalState> {
    static HISTORY_CAPACITY = 50;
    static PROMPT = '$ ';
    static CURSOR = '█';
    commandHistory: List<string>;
    commandIterator: ListIterator<string> | null;

    constructor(props: TerminalProps) {
        super(props);
        this.state = {
            currLine: '',
            terminalContent: ['Welcome'],
            cursorPosition: 0,
        };
        this.commandHistory = new List<string>();
        this.commandHistory.pushFront('');
        this.commandIterator = this.commandHistory.begin();
    }

    keyPressHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'Enter') {
            if (this.state.currLine.length > 0) {
                const it = this.commandHistory.begin();
                if (it !== null) {
                    it.update(this.state.currLine);
                }
                this.commandHistory.pushFront('');
                if (this.commandHistory.size > Terminal.HISTORY_CAPACITY + 1) {
                    this.commandHistory.popBack();
                }
                this.commandIterator = this.commandHistory.begin();

                let newState: TerminalState = {
                    ...this.state,
                    terminalContent: [
                        ...this.state.terminalContent,
                        Terminal.PROMPT + this.state.currLine,
                        `${this.state.currLine}: command not found`,
                    ],
                };

                const commandName = this.state.currLine.split(' ')[0];
                if (commandName in this.props) {
                    newState = this.props[commandName](
                        this.state.currLine,
                        this.state
                    );
                }
                newState.currLine = '';
                newState.cursorPosition = 0;
                this.setState(newState);
            }
        } else {
            const newLine = this.state.currLine
                .slice(0, this.state.cursorPosition)
                .concat(e.key)
                .concat(this.state.currLine.slice(this.state.cursorPosition));
            if (this.commandIterator !== null) {
                this.commandIterator.update(newLine);
            }
            this.setState((prevState) => ({
                ...prevState,
                currLine: newLine,
                cursorPosition: prevState.cursorPosition + 1,
            }));
        }
    };

    // Arrow keys are only fired on keyDown for some reason
    keyDownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
        console.log(e.key);
        if (e.key === 'ArrowUp') {
            if (this.commandIterator !== null) {
                const last: boolean = this.commandIterator.next();
                const newLine: string = this.commandIterator.value();
                if (!last && newLine !== null) {
                    this.setState((prevState) => ({
                        ...prevState,
                        currLine: newLine,
                        cursorPosition: newLine.length,
                    }));
                }
            }
        } else if (e.key === 'ArrowDown') {
            if (this.commandIterator !== null) {
                const last: boolean = this.commandIterator.prev();
                const newLine: string = this.commandIterator.value();
                if (!last && newLine !== null) {
                    this.setState((prevState) => ({
                        ...prevState,
                        currLine: newLine,
                        cursorPosition: newLine.length,
                    }));
                }
            }
        } else if (e.key === 'Backspace') {
            if (this.state.cursorPosition > 0) {
                const newLine = this.state.currLine
                    .slice(0, this.state.cursorPosition - 1)
                    .concat(
                        this.state.currLine.slice(this.state.cursorPosition)
                    );
                if (this.commandIterator !== null) {
                    this.commandIterator.update(newLine);
                }
                this.setState((prevState) => ({
                    ...prevState,
                    currLine: newLine,
                    cursorPosition: Math.max(0, prevState.cursorPosition - 1),
                }));
            }
        } else if (e.key === 'ArrowLeft') {
            this.setState((prevState) => ({
                ...prevState,
                cursorPosition: Math.max(0, prevState.cursorPosition - 1),
            }));
        } else if (e.key === 'ArrowRight') {
            this.setState((prevState) => ({
                ...prevState,
                cursorPosition: Math.min(
                    prevState.currLine.length,
                    prevState.cursorPosition + 1
                ),
            }));
        }
    };

    render() {
        let line = (
            <div>
                <span>{Terminal.PROMPT + this.state.currLine}</span>
                <span id="cursor">{NBSP}</span>
            </div>
        );

        if (this.state.cursorPosition < this.state.currLine.length) {
            line = (
                <div>
                    <span>
                        {Terminal.PROMPT +
                            this.state.currLine.slice(
                                0,
                                this.state.cursorPosition
                            )}
                    </span>
                    <span id="cursor">
                        {this.state.currLine.charAt(this.state.cursorPosition)}
                    </span>
                    <span>
                        {this.state.currLine.slice(
                            this.state.cursorPosition + 1
                        )}
                    </span>
                </div>
            );
        }

        return (
            <div
                id="terminal"
                onKeyDown={this.keyDownHandler}
                onKeyPress={this.keyPressHandler}
                tabIndex={-1}
            >
                {this.state.terminalContent.map((line, index) => (
                    <p key={index}>{line}</p>
                ))}
                {line}
            </div>
        );
    }
}

export default Terminal;
