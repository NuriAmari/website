import React from 'react';

const About = () =>
    <div className="About">
        <div className="header">
            <h1>Nuri Amari</h1>
        </div>
        <div className="about-content">
          <img src={require("../../img/profile_pic.jpg")}/>
          <p className="blurb">
              Hi, I'm Nuri, ^ thats me. <br/><br/> I like programming languages, all things vim and learning about fundamental computer science systems.
              I am a third year computer science student at the University of Waterloo hoping focus on compiler development. In my most recent professional experience, I focused on developing backend performance monitoring tools and combating scaling issues.
              In my free time, I am slowly working on my own interpreter. Here are some programming related things I'm moderatley proud of:
          </p>
          <ul>
            <li>My <a href="https://github.com/NuriAmari/Language-Tools">language tools</a>, associated <a href="https://github.com/NuriAmari/simplejson">JSON decoder</a> and <a href="https://github.com/NuriAmari/Lara">programming language</a> are coming along slowly but surely</li>
            <li>I've spent too much time tuning my <a href="https://github.com/NuriAmari">dotfiles</a>, but have learned a great deal in the process</li>
            <li>There is a patent with my name on it waiting for review at the US patent office for my work <a href="https://www.splunk.com/">@Splunk</a></li>
            <li>I found and fixed <a href="https://github.com/benfred/py-spy/pull/234">a small bug</a> in an open source python peformance profiling tool</li>
            <li>I think the terminal in this website is quite fun</li>
          </ul>
        </div>
    </div>

export default About;
