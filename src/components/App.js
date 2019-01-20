import React, { Component } from 'react';
import MenuToggle from './MenuToggle';
import Content from './Content';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import '../App.css';
import Terminal from './Terminal';
import WasteLookup from './pages/SpotifyChallenge/App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faStar);
library.add(faSearch);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuOpen: false,
            cliOpen: true,
        };
        this.terminalRef = React.createRef();
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState(previousState => ({
            menuOpen: !previousState.menuOpen,
        }));
    }

    render() {
        let menuClass = this.state.menuOpen ? 'MenuOpen' : 'MenuClosed';
        let cliClass = this.state.cliOpen ? 'CLIOpen' : 'CLIClosed';

        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path="/ShopifyChallenge"
                        component={WasteLookup}
                    />
                    <Route>
                        <div style={{ overflow: 'hidden' }}>
                            <div className={`App ${menuClass}`}>
                                <Sidebar toggleMenu={this.toggleMenu} />
                                <Content passedClass={`${cliClass}`} />
                                <MenuToggle
                                    passedClass={menuClass}
                                    onClick={this.toggleMenu}
                                />
                                <Terminal
                                    menuOpen={this.state.menuOpen}
                                    toggleCli={this.toggleCli}
                                    toggleMenu={this.toggleMenu}
                                />
                                <div
                                    onClick={this.toggleCli}
                                    className={`cliTab ${cliClass}`}
                                />
                            </div>
                        </div>
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App;
