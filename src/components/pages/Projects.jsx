import React from 'react';

const Projects = () =>
    <div className="Projects">
        <div className="header">
            <h1>Projects</h1>
        </div>
        <p className="blurb">These are the some of my latest projects. I work on them for fun all the time,
            so be sure to check back in as I learn more skills! Check out my GitHub for a comprehensive list
            of all my coding indeavours.
        </p>
        <div className="projects-list">
            <div className="card">
                <h2>Personal Website <a href="https://github.com/NuriAmari/react-personal-website" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                
                <p>
                    The 3rd iteration of my personal website. It serves to display my projects, and give me an
                    outlet to show off some front-end skills. Built using React and modern CSS tools like flexbox,
                    grid and animation. My personal favourite part, the custom CLI allows users to control the site
                    through a command line. 
                </p>
                <ul>
                    <li>React</li>
                    <li>React Router</li>
                    <li>Sass</li>
                    <li>CSS Animation</li>
                    <li></li>
                </ul>
            </div>
            <div className="card">
                <h2>Incident Management <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                <p>During my time working at York Region, I became a little frustrated with some of the tools I had to use. In my free time, I rebuilt a work project, but
                    this time with modern tools I liked better. I eventually presented the project to my supervisor and was able to continue working with the stack for the remainder of my time
                    there. The Region is now investigating using the stack full time and a presentation I prepared has been recorded and circulated throughout the region. The web app I created
                    is an incident management tool that focuses on real time and responsive behaviour. 
                </p>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Handlebars</li>
                    <li>PassportJS</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <div className="card">
                <h2>BMO myApp <a href="https://github.com/NuriAmari/BMOApp" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                <p>For a high school business competition, my partner and I created a proof of concept mobile banking Android application capable of reading and writing
<<<<<<< HEAD
                    data to NFC data chips. As part of a marketing campaign, we designed and produced physical NFC enabled posters allowing customers to interact with our advertisements.
=======
                    data to NFC data chips. As part of a marketing campaign, we design and produced physical NFC enabled posters allowing customers to interact with our advertisements.
>>>>>>> 859b271834aed64943e6b8a1e8b85286a25d96aa
                </p>
                <ul>
                    <li>Java</li>
                    <li>Android Studio</li>
                    <li>NFC API</li>
                    <li>Adobe Animate</li>
                    <li>Adobe Photoshop</li>
                </ul>
            </div>
            <div className="card">
                <h2>Flat Colours <a href="https://github.com/NuriAmari/Flat-Colours" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                <p>A website to help designers browse and select colours. Once a user has found a colour they're satisfied with, they can click on it and the corresponding
                    hexcode will automatically be copied to their clipboard.
                </p>
                <ul>
                    <li>clipboard.js</li>
                    <li>jQuery</li>
                    <li>HTML</li>
                    <li>CSS</li>
                </ul>
            </div>
            <div className="card">
                <h2>Nodejs Snake <a href="https://github.com/NuriAmari/Snake.io" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                <p>An online multiplayer version of the classic snake game. Includes live leaderboard and login features.
                </p>
                <ul>
                    <li>Socket.io</li>
                    <li>NodeJS</li>
                    <li>JavaScript</li>
                    <li>Adobe Animate</li>
                </ul>
            </div>
            <div className="card">
                <h2>RPG Adventure <a href="https://github.com/NuriAmari/Little-RPG-Adventure" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                <p>A small RPG game including multiple worlds for players to explore, autonomous enemies to battle and stats to collect. Played by over 1500 unique players.
                </p>
                <ul>
                    <li>ActionScript</li>
                    <li>Adobe Animate</li>
                </ul>
            </div>
        </div>
    </div>

export default Projects;