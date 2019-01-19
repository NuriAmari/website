import React from 'react';
import * as data from '../../data/data.json';
import Card from '../general/Card.js';

const Experience = () => (
    <div className="Experience">
        <div className="header">
            <h1>Experience</h1>
        </div>
        {data.experiences.map((experience, index) => (
            <Card key={index} {...experience} />
        ))}
    </div>
);

export default Experience;
