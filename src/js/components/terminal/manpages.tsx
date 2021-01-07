const manPages: { [command: string]: string } = {};

const clearManPage = 'Clear the terminal buffer';
const cdManPage = 'Visit pages in the site (ex: cd Chess)';
const lsManPage = 'List available pages';
const resumeManPage = 'Open resume in new tab';
const githubManPage = 'Open Github profile in new tab';
const linkedinManPage = 'Open LinkedIn profile in new tab';

manPages['cd'] = cdManPage;
manPages['ls'] = lsManPage;
manPages['resume'] = resumeManPage;
manPages['github'] = githubManPage;
manPages['linkedin'] = linkedinManPage;
manPages['clear'] = clearManPage;

export default manPages;
