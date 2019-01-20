import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    box-shadow: 0px 10px 20px 1px rgba(148, 148, 148, 0.5);
    overflow: hidden;
    height: 100%;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${props => require('../../img/' + props.image)});
    background-size: cover;

    :hover > div {
        opacity: 1;
    }

    > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        @media (pointer: fine) {
            opacity: 0;
        }
        color: white;
        transition: opacity 0.75s ease;

        * {
            text-shadow: 0px 4px 7px rgba(0, 0, 0, 0.88);
        }

        h2 {
            margin: 0 !important;
            text-align: center;
        }

        a {
            cursor: pointer;
            border: 1px solid white;
            height: 30px;
            color: white;
            margin-top: 10px;
            padding: 0 10px;
            line-height: 30px;
            border-radius: 15px;
            font-weight: bold;
        }
    }
`;

const ProjectCard = ({ title, image, description, githublink }) => (
    <Wrapper image={image}>
        <div>
            <h2>{title}</h2>
            <a target="_blank" href={githublink}>
                View Project
            </a>
        </div>
    </Wrapper>
);

export default ProjectCard;
