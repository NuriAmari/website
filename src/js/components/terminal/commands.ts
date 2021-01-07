import { useHistory } from 'react-router-dom';

import { CommandHandler, CommandMap, TerminalState } from './Terminal';
import manPages from './manpages';

import {
    GITHUB_URL,
    LINKEDIN_URL,
    NBSP,
    PAGES,
    HISTORY,
    RESUME_PATH,
} from '../../lib/constants';

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
                '   - ls',
                '   - cd',
                '   - clear',
                '   - resume',
                '   - github',
                '   - linkedin',
                NBSP,
                'Use help <command-name> for more info (ex: help cd)',
                NBSP,
                'Iterate through and edit command history with arrow keys',
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
            Object.keys(PAGES).reduce((acc, page) => acc + ' ' + page),
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

const resume: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    window.open(RESUME_PATH, '_blank');
    return {
        ...state,
        terminalContent: [
            ...state.terminalContent,
            `$ ${command}`,
            'Resume Last Updated: 01/07/2021',
        ],
    };
};

const github: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    window.open(GITHUB_URL, '_blank');
    return {
        ...state,
        terminalContent: [...state.terminalContent, `$ ${command}`],
    };
};

const linkedin: CommandHandler = (
    command: string,
    state: TerminalState
): TerminalState => {
    window.open(LINKEDIN_URL, '_blank');
    return {
        ...state,
        terminalContent: [...state.terminalContent, `$ ${command}`],
    };
};

commands['clear'] = clear;
commands['help'] = help;
commands['ls'] = ls;
commands['cd'] = cd;
commands['resume'] = resume;
commands['github'] = github;
commands['linkedin'] = linkedin;

export default commands;
