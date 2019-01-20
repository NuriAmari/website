import React from 'react';
import * as data from '../../data/data.json';
import EmploymentCard from '../general/EmploymentCard.js';

const Experience = () => (
    <div className="Experience">
        <div className="header">
            <h1>Experience</h1>
        </div>
        {data.experiences.map((experience, index) => (
            <EmploymentCard key={index} {...experience} />
        ))}
    </div>
);

export default Experience;
