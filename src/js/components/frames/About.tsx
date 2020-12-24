import React from 'react';
import { Link } from 'react-router-dom';
import dp from '/src/img/dp.jpg';

const About = () => {
    return (
        <div className="about">
            <div className="img-container">
                <img src={dp}></img>
            </div>
            <div className="paragraph-container">
                <p>Hi there,</p>
                <p>
                    My name is Nuri Amari, I am a 4th year Computer Science
                    student at the University of Waterloo. Academically, I am
                    interested in programming language implementation, with a
                    focus on static analysis. I've experimented with a few
                    projects in the area including{' '}
                    <a target="_blank" href="https://github.com/NuriAmari/Lara">
                        Lara
                    </a>{' '}
                    my own interpreted language,{' '}
                    <a
                        target="_blank"
                        href="https://github.com/NuriAmari/Language-Tools"
                    >
                        Lang-Tools
                    </a>{' '}
                    my lexer and parser generation library and{' '}
                    <a
                        target="_blank"
                        href="https://github.com/NuriAmari/simplejson"
                    >
                        simplejson
                    </a>{' '}
                    a JSON formatter and linter embedded in this site{' '}
                    <Link to="/play/format">here</Link>.
                </p>
                <p>
                    In the last few years, I have completed 4-month internships
                    at{' '}
                    <a target="_blank" href="https://www.ea.com">
                        Electronic Arts
                    </a>
                    ,{' '}
                    <a target="_blank" href="https://www.athinkingape.com/">
                        A Thinking Ape
                    </a>
                    ,{' '}
                    <a target="_blank" href="https://www.splunk.com/">
                        Splunk
                    </a>{' '}
                    and{' '}
                    <a target="_blank" href="https://york.ca">
                        York Region
                    </a>
                    . My favourite professional projects include an IPC
                    abstraction for{' '}
                    <a target="_blank" href="https://www.ea.com">
                        Electronic Arts
                    </a>
                    , a UWSGI worker profiler and flamegraph generation tool for{' '}
                    <a target="_blank" href="https://www.athinkingape.com/">
                        A Thinking Ape
                    </a>{' '}
                    and a patent pending virtualized JSON viewer for{' '}
                    <a target="_blank" href="https://www.splunk.com/">
                        Splunk
                    </a>
                    .
                </p>
                <p>
                    This website serves as a home for small projects of mine
                    that would lack a home otherwise. Projects you can explore
                    today include:
                </p>
                <ul>
                    <li>
                        Terminal Emulator - Control the site through a bash-like
                        shell
                    </li>
                    <li>
                        Chess - Team up with the public in a game of Chess
                        against me
                    </li>
                    <li>
                        Draw - Leave me a drawing and browse through those left
                        by others
                    </li>
                    <li>Format - Experiment with my JSON linter / formatter</li>
                </ul>
                <p>
                    If it interests you, you can read about these project's
                    implementation details and much more on my GitHub{' '}
                    <a
                        target="_blank"
                        href="https://github.com/NuriAmari/website"
                    >
                        here
                    </a>
                    .
                </p>
            </div>
        </div>
    );
};

export default About;
