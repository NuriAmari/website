import React from 'react';
import { Link } from 'react-router-dom';
import * as routes from '../constants/routes';

const Sidebar = props => (
    <div className="Sidebar">
        <Navigation toggleMenu={props.toggleMenu} />
    </div>
);

const Navigation = props => {
    const { toggleMenu } = props;

    return (
        <React.Fragment>
            <ul className="Navigation">
                <li>
                    <Link
                        style={navStyle}
                        to={routes.HOME}
                        onClick={toggleMenu}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        style={navStyle}
                        to={routes.ABOUT}
                        onClick={toggleMenu}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        style={navStyle}
                        to={routes.PROJECTS}
                        onClick={toggleMenu}
                    >
                        Projects
                    </Link>
                </li>
                <li>
                    <Link
                        style={navStyle}
                        to={routes.EXPERIENCE}
                        onClick={toggleMenu}
                    >
                        Experience
                    </Link>
                </li>
            </ul>
            <div className="sidebar-connect">
                <ul>
                    <li>Nuri Amari</li>
                    <li>3B CS @ UWaterloo</li>
                    <li>
                        <a href="mailto:nfamari@edu.uwaterloo.ca">
                            nfamari@edu.uwaterloo.ca
                        </a>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    );
};

const navStyle = {
    color: '#313131',
    fontFamily: 'sans-serif',
    fontWeight: 'Bold',
    fontSize: '6vh',
};

export default Sidebar;
