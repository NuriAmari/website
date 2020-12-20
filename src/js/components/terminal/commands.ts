import { CommandHandler, TerminalProps, TerminalState } from './Terminal';
import { NBSP } from '../../lib/constants';

const commands: TerminalProps = {};

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
};

commands['clear'] = clear;
commands['help'] = help;

export default commands;
