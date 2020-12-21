import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import commands from './components/terminal/commands';
import Frame from './components/general/Frame';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/frames/Home';
import Navigation from './components/Navigation';
import Terminal from './components/terminal/Terminal';

const App = () => {
    const [menu, setMenu] = useState<boolean>(false);

    const toggleMenu = (e: React.MouseEvent<HTMLDivElement>) => {
        setMenu(!menu);
    };

    return (
        <React.Fragment>
            <Router>
                <HamburgerMenu onClick={toggleMenu} open={menu} />
                <div id="content" className={menu ? '' : 'closed'}>
                    <Navigation />
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
                                <p>Play</p>
                            </Route>
                            <Route exact path="/about">
                                <p>About</p>
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
