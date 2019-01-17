import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    padding: 30px;
    background-color: white;
    min-height: 200px;
    margin-bottom: 20px;
    margin-left: 50px;
    width: calc(100% - 100px);
    box-shadow: 0px 10px 20px 1px rgba(148, 148, 148, 0.5);

    @media screen and (max-width: 768px) {
        margin-left: 5vw;
        width: 90vw;
    }

    p,
    .description {
        padding: 3px 0px 3px 15px;
        margin-left: 3px;
        border-left: 3px solid #fed1be;
        font-family: 'Karla', 'Arial', sans-serif;

        li:last-child {
            margin-bottom: 0px !important;
        }
    }
`;

const Card = ({ title, description, date, tools, githubLink }) => (
    <Wrapper>
        <h2>{title}</h2>
        <ul className="description">
            {description.map((point, index) => (
                <li key={index}>{point}</li>
            ))}
        </ul>
        <ul className="tools">
            {tools.map((tool, index) => (
                <li key={index}>{tool}</li>
            ))}
        </ul>
    </Wrapper>
);

export default Card;
