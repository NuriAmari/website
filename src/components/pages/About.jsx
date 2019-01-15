import React from 'react';

const About = () =>
    <div className="About">
        <div className="header">
            <h1>Nuri Amari</h1>
        </div>
        <p className="blurb">
            Hello, my name is Nuri. I'm a <span>Computer Science</span> student in my second year at the 
            University of Waterloo. I like making web apps that work but also hopefully look half decent.
            I'm looking for an internship summer 2019, so if you're hiring ...
        </p>
        <h2 className="blurb">Skills</h2>
        <div className="skills">
            <div className="card">
                <h2>Front-End:</h2>
                <div>
                    <p>Front end is the area I'm most experienced in, and what I'm best at. I've
                        spent far too long loathing CSS, but I think I've finally mastered it
                        and we're cool now. Here are some tools I used in some capacity at some time
                        in my entire life.
                    </p>
                    <ul>
                        <li>React</li>
                        <li>Handlebars</li>
                        <li>Bootstrap</li>
                        <li>Sass</li>
                        <li>HTML, CSS, JavaSc-- blah, blah, blah</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <h2>Back-End:</h2>
                <div>
                    <p>The area I'm currently most interested in. Making the front end is all fun and games,
                        but I'd like to make more applications that are actually useful. I'm interested in getting
                        into full stack and data science, particularly in the finance world. Also I learned some things:
                    </p>
                    <ul>
                        <li>Node</li>
                        <li>MongoDB</li>
                        <li>Express</li>
                        <li>Mongoose</li>
                        <li>MySQL</li>
                    </ul>
                </div>
            </div>
            <div className="card">
                <h2>Design</h2>
                <div>
                    <p>Honestly, I never intended to learn design, it's more of a means to an end. Also I shamelessly,
                        steal designs from actual designers. But, my application being good looking really excites
                        me, and I've been told I have an eye for this kind of thing. Tools again:
                    </p>
                    <ul>
                        <li>Sketch</li>
                        <li>Illustrator</li>
                        <li>Photoshop</li>
                        <li>SVG</li>
                        <li>Adobe Animate!</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

export default About;
