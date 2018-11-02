import React from 'react';

const Experience = () =>
    <div className="Experience">
        <div className="header">
            <h1>Experience</h1>
        </div>
        <div className="card">
            <h2>York Region - Software Developer</h2>
            <p>Worked With: NodeJS, MongoDB, Mongoose, Express, Handlebars, Salesforce, JavaScript, jQuery, MySQL, CSS, HTML, Microsoft PowerApps, Microsoft Flow, Microsoft SharePoint, Jira</p>
            <ul>
                <li>Independently developed and deployed two full stack communication tools from start to finish</li>
                <li>Set up NodeJS server with Express routing, fully integrating CRUD operations with MongoDB & MySQL databases</li>
                <li>Implemented OAuth based user authentication and route protection with PassportJS, supporting Azure AD & Google based signin</li>
                <li>Used Bootstrap, CSS Flexbox & Grid to quickly create modern, responsive layout</li>
                <li>Deployed NodeJS server to Heroku and MongoDB database to mLab</li>
                <li>Created applications in Microsoft PowerApps, interfacing with Microsoft Flow and Microsoft SharePoint</li>
                <li>Implemented RESTful API based solution to record level permissions</li>
                <li>Worked with Twilio & SendGrid APIs to deliver SMS & Email notifications</li>
                <li>Assisted in the revamping of existing Salesforce based applications</li>
            </ul>
        </div>
        <div className="card">
            <h2>Waterloop - Web Team Member</h2>
            <p>Worked with: NodeJS, React, Vue.js, SQL</p>
            <ul>
                <li>Interfaced with multiple APIs to pull team's recent social media data</li>
                <li>Contributed to front-end implementation of \textbf{Vue.js} based team site</li>
                <li>Worked in a team to develop a React, Node and SQL based team management application</li>
            </ul>
       </div>
       <div className="card">
            <h2>WATonomous - UI Dashboard Team Member</h2>
            <li>Updated and maintained a C++ and Qt Component based interface to display error logs in the autonomous car</li>
       </div>
    </div>

export default Experience;