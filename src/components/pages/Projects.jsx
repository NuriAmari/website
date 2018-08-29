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
                <h2>Personal Website <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
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
                <p> 
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
                <h2>BMO myApp <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
                
            </div>
            <div className="card">
                <h2>Flat Colours <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
            </div>
            <div className="card">
                <h2>Nodejs Snake <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
            </div>
            <div className="card">
                <h2>RPG Adventure <a href="https://github.com/NuriAmari/MajorIncidentManagement" rel="noopener noreferrer" target="_blank">
                    <img src={require("../../img/github.svg")} alt=""></img>
                </a></h2>
            </div>
        </div>
    </div>

export default Projects;