import { createBrowserHistory } from 'history';

export const NBSP = String.fromCharCode(160);

type PagesType = {
    [key: string]: string;
};

export const PAGES: PagesType = {
    Home: '/',
    About: '/about',
    Chess: '/play/chess',
    Draw: '/play/draw',
    Format: '/play/format',
};

export const HISTORY = createBrowserHistory();
