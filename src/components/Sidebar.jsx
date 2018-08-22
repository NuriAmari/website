import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Sidebar = (props) =>
    <div className="Sidebar">
        <Navigation toggleMenu={ props.toggleMenu }/>
    </div>

const Navigation = (props) => {
     
    const { toggleMenu } = props;

    return (
        <div>
            <ul>
                <li>
                    <Link to={routes.HOME} onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                    <Link to={routes.ABOUT} onClick={toggleMenu}>About</Link>
                </li>
                <li>
                    <Link to={routes.PROJECTS} onClick={toggleMenu}>Projects</Link>
                </li>
                <li>
                    <Link to={routes.EXPERIENCE} onClick={toggleMenu}>Experience</Link>
                </li>
                <li>
                    <Link to={routes.BLOG} onClick={toggleMenu}>Blog</Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;