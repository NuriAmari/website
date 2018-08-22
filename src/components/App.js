import React, { Component } from 'react';
import MenuToggle from './MenuToggle';
import Content from './Content';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu() {
    this.setState(previousState => ({
      menuOpen: !previousState.menuOpen,
    }));
  }

  render() {

    let menuClass = this.state.menuOpen ? "MenuOpen" : "MenuClosed";

    return (
      <Router>
        <div style={{overflow: 'hidden'}}>
          <div className={"App " + menuClass}>
            <Sidebar toggleMenu={this.toggleMenu}/>
            <Content />
            <MenuToggle onClick={this.toggleMenu}/>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
