import React, { useState } from 'react';
import { useHistory } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCode,
    faHome,
    faUserCircle,
    faChessKnight,
    faPencilAlt,
    IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

type Page = {
    name: string;
    link: string;
    icon: IconDefinition;
};

type NavigationProps = {
    toggleNavigation(): void;
};

const pages: Page[] = [
    { name: 'Home', link: '/', icon: faHome },
    { name: 'About', link: '/about', icon: faUserCircle },
    { name: 'Chess', link: '/play/chess', icon: faChessKnight },
    { name: 'Draw', link: '/play/draw', icon: faPencilAlt },
    { name: 'Format', link: '/play/format', icon: faCode },
];

const Navigation = (props: NavigationProps) => {
    let history = useHistory();

    return (
        <div id="navigation">
            {pages.map((page, index) => (
                <p
                    key={index}
                    onClick={(e) => {
                        history.push(page.link);
                        props.toggleNavigation();
                    }}
                >
                    <FontAwesomeIcon icon={page.icon} />
                    {'  ' + page.name}
                </p>
            ))}
        </div>
    );
};

export default Navigation;
