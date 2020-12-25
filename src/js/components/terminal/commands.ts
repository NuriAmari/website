import { useHistory } from 'react-router-dom';

import { CommandHandler, CommandMap, TerminalState } from './Terminal';
import manPages from './manpages';

import { NBSP, PAGES, HISTORY } from '../../lib/constants';

const commands: CommandMap = {};

const clear: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    return {
        ...state,
        terminalContent: [],
    };
};

const help: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    const segments = command.split(/\s+/);
    if (segments[segments.length - 1] === '') {
        segments.pop();
    }
    if (segments.length === 1) {
        return {
            ...state,
            terminalContent: [
                ...state.terminalContent,
                `$ ${command}`,
                NBSP,
                "Welcome to Nuri's bash-like CLI. Supported commands include:",
                NBSP,
                '   - clear',
                '   - ls',
                '   - pwd',
                '   - cd',
                NBSP,
                'Use help <command-name> for more info',
            ],
        };
    } else if (segments.length === 2) {
        if (segments[1] in manPages) {
            return {
                ...state,
                terminalContent: [
                    ...state.terminalContent,
                    `$ ${command}`,
                    manPages[segments[1]],
                ],
            };
        } else {
            return {
                ...state,
                terminalContent: [
                    ...state.terminalContent,
                    `$ ${command}`,
                    `No manual entry for ${segments[1]}`,
                ],
            };
        }
    } else {
        return {
            ...state,
            terminalContent: [
                ...state.terminalContent,
                `$ ${command}`,
                'cd: Too many arguments',
            ],
        };
    }
};

const ls: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    return {
        ...state,
        terminalContent: [
            ...state.terminalContent,
            `$ ${command}`,
            'Home About Chess Draw Format',
        ],
    };
};

const cd: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    const segments = command.split(/\s+/);
    if (segments[segments.length - 1] === '') {
        segments.pop();
    }
    if (segments.length === 1) {
        HISTORY.push('/');
        return {
            ...state,
            terminalContent: [...state.terminalContent, `$ ${command}`],
        };
    } else if (segments.length === 2) {
        if (segments[1] === '-') {
            HISTORY.goBack();
            return {
                ...state,
                terminalContent: [...state.terminalContent, `$ ${command}`],
            };
        } else if (segments[1] in PAGES) {
            HISTORY.push(PAGES[segments[1]]);
            return {
                ...state,
                terminalContent: [...state.terminalContent, `$ ${command}`],
            };
        } else {
            return {
                ...state,
                terminalContent: [
                    ...state.terminalContent,
                    `$ ${command}`,
                    `cd: ${segments[1]}: No such file or directory`,
                ],
            };
        }
    } else {
        return {
            ...state,
            terminalContent: [
                ...state.terminalContent,
                `$ ${command}`,
                'cd: Too many arguments',
            ],
        };
    }
};

commands['clear'] = clear;
commands['help'] = help;
commands['ls'] = ls;
commands['cd'] = cd;

export default commands;
