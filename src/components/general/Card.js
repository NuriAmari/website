import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    margin-left: 50px;
    width: calc(100% - 100px);
    box-shadow: 0px 10px 20px 1px rgba(148, 148, 148, 0.5);

    #image-container {
        background-image: url(${props => require('../../img/' + props.image)});
        background-size: cover;
        background-position: right center;
        height: 250px;
        width: 100%;
        padding: 30px;

        h1 {
            display: inline;
            color: white;
            font-size: 40px;
            text-shadow: 0px 3px 10px rgba(0, 0, 0, 0.81);
        }
    }

    #body {
        padding: 30px;
        background-color: white;
        min-height: 200px;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 768px) {
        margin-left: 5vw;
        width: 90vw;
    }

    img {
        width: 100%;
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
    .tools {
        margin-top: 20px;

        li {
            display: inline-block;
            font-family: sans-serif;
            background-color: #058fd7;
            padding: 3px 10px;
            border-radius: 4px;
            margin: 4px 4px 0 4px !important;
            color: white;
            font-family: 'Nunito', sans-serif;
        }
    }
`;

const Card = ({
    title,
    employer,
    image,
    description,
    date,
    tools,
    githubLink,
}) => (
    <Wrapper image={image}>
        <div id="image-container">
            <h1>{employer}</h1>
        </div>
        <div id="body">
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
        </div>
    </Wrapper>
);

export default Card;
