import React, { useState, useEffect } from 'react';
import { useHistory, Router, Route, Switch } from 'react-router-dom';

import { HISTORY } from './lib/constants';

import About from './components/frames/About';
import Auth from './components/general/Auth';
import commands from './components/terminal/commands';
import Frame from './components/general/Frame';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/frames/Home';
import Navigation from './components/Navigation';
import Play from './components/frames/Play';
import Chess from './components/frames/play/Chess';
import Terminal from './components/terminal/Terminal';

const App = () => {
    const [menu, setMenu] = useState<boolean>(false);
    let history = useHistory();

    const toggleMenu = () => {
        setMenu(!menu);
    };

    const push = (path: string) => history.push(path);

    return (
        <React.Fragment>
            <Router history={HISTORY}>
                <HamburgerMenu onClick={(e) => toggleMenu()} open={menu} />
                <div id="content" className={menu ? '' : 'closed'}>
                    <Navigation toggleNavigation={toggleMenu} />
                    <Frame>
                        <Switch>
                            <Route exact path="/play/format">
                                <p>Format</p>
                            </Route>
                            <Route exact path="/play/draw">
                                <p>Draw</p>
                            </Route>
                            <Route exact path="/play/chess">
                                <Chess color="w" />
                            </Route>
                            <Route exact path="/play/chess/auth">
                                <Chess color="b" />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/auth">
                                <Auth />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Frame>
                </div>{' '}
                <Terminal commands={commands} />
            </Router>
        </React.Fragment>
    );
};

export default App;
