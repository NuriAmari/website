import React, { Component } from 'react';
import MenuToggle from './MenuToggle';
import Content from './Content';
import Sidebar from './Sidebar';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import Terminal from './Terminal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      cliOpen: true,
    };
    this.terminalRef = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleCli = this.toggleCli.bind(this);
  }
  
  toggleMenu() {
    this.setState(previousState => ({
      menuOpen: !previousState.menuOpen,
    }));
  }

  toggleCli() {
    this.setState(previousState => ({
      cliOpen: !previousState.cliOpen,
    }));
    if (this.state.cliOpen) {
      console.log(this.terminalRef);
      //this.terminalRef.current.focus();
    } else {
      window.focus();
    }
  }

  render() {

    let menuClass = this.state.menuOpen ? "MenuOpen" : "MenuClosed";
    let cliClass = this.state.cliOpen ? "CLIOpen" : "CLIClosed";

    return (
      <Router>
        <div onKeyPress={this.test} style={{overflow: 'hidden'}}>
          <div className={`App ${menuClass}`}>
            <Sidebar toggleMenu={this.toggleMenu}/>
            <Content passedClass={`${cliClass}`}/>
            <MenuToggle passedClass={menuClass} onClick={this.toggleMenu}/>
            <Terminal wrappedComponentRef={c => this.ref = this.terminalRef} passedClass={cliClass} toggleCli={this.toggleCli} toggleMenu={this.toggleMenu}/>
            <div onClick={this.toggleCli} className={`cliTab ${cliClass}`}> {`<=`} </div>
          </div>
        </div>

      </Router>
    );
  }
}

export default App;
