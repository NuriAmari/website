import { createBrowserHistory } from 'history';

export const NBSP = String.fromCharCode(160);

type PagesType = {
    [key: string]: string;
};

export const PAGES: PagesType = {
    Home: '/',
    About: '/about',
    Chess: '/play/chess',
};

export const RESUME_PATH = '/nuri_amari_resume.pdf';
export const GITHUB_URL = 'https://github.com/NuriAmari';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/nuri-amari/';

// Draw: '/play/draw',
// Format: '/play/format',

export const HISTORY = createBrowserHistory();
