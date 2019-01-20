import React from 'react';
import * as data from '../../data/data.json';
import ProjectCard from '../general/ProjectCard.js';
import styled from 'styled-components';

const ProjectsGrid = styled.div`
    display: grid;
    margin: 0 0 50px 50px;
    width: calc(100% - 100px);
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    grid-gap: 50px;

    ::before {
        content: '';
        width: 0;
        padding-bottom: 100%;
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    > *:first-child {
        grid-row: 1 / 1;
        grid-column: 1 / 1;
    }

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 768px) {
        margin-left: 5vw;
        width: 90vw;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 550px) {
        grid-template-columns: 1fr;
    }
`;

const Projects = () => (
    <div className="Projects">
        <div className="header">
            <h1>Projects</h1>
        </div>
        <ProjectsGrid>
            {data.projects.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </ProjectsGrid>
    </div>
);

export default Projects;
