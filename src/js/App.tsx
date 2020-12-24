import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './components/frames/About';
import commands from './components/terminal/commands';
import Frame from './components/general/Frame';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/frames/Home';
import Navigation from './components/Navigation';
import Play from './components/frames/Play';
import Terminal from './components/terminal/Terminal';

const ws = new WebSocket('ws://localhost/ws');

const App = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const toggleMenu = () => {
        setMenu(!menu);
    };

    useEffect(() => {
        ws.onopen = () => {
            console.log('client connected');
        };

        ws.onmessage = (message) => {
            console.log('client:', message);
        };
    }, []);

    return (
        <React.Fragment>
            <Router>
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
                                <p>Chess</p>
                            </Route>
                            <Route path="/play">
                                <Play />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </Frame>
                </div>
                <Terminal {...commands} />
            </Router>
        </React.Fragment>
    );
};

export default App;
