import React, { Component } from 'react';
import '../fonts/fira_code.css';
import { withRouter } from 'react-router-dom';
import * as routes from "../constants/routes";

class Terminal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [""],
            blinkActive: false,
            upArrowCount: 0,
        }
        this.keyHandler = this.keyHandler.bind(this);
        this.keyModifierHandler = this.keyModifierHandler.bind(this);
        this.executeCommand = this.executeCommand.bind(this);
        
    }
    
    keyHandler(e) {
        if (e.key === "Enter") {
            this.executeCommand();
        } else {
            let newContent = this.state.content.slice();
            let length = newContent.length;
            newContent[length - 1] += e.key;  
            console.log(e.key);
            this.setState({
                content: newContent,
            });
        }        
    }

    keyModifierHandler(e) {
        console.log(e.key);
        let newContent = this.state.content.slice();
        let length = newContent.length;
        if (e.key === "Backspace") {
            newContent[length - 1] = newContent[length - 1].slice(0, newContent[length - 1].length - 1);
        } 
        this.setState({
            content: newContent,
        });
    }

    executeCommand () {
        const { history, toggleMenu } = this.props;
        let newContent = this.state.content.slice();
        let keywords = this.state.content[this.state.content.length - 1].split(" "); 
        
        if (keywords[0] === "cd") {
            if (keywords[1] === "Home" || keywords[1] === "home") {
                history.push(routes.HOME);
                newContent.push("");
            } else if (keywords[1] === "About" || keywords[1] === "about" ) {
                history.push(routes.ABOUT);
                newContent.push("");
            } else if (keywords[1] === "Projects" || keywords[1] === "projects" ) {
                history.push(routes.PROJECTS);
                newContent.push("");
            } else if (keywords[1] === "Experience" || keywords[1] === "experience" ) {
                history.push(routes.EXPERIENCE);
                newContent.push("");
            } else if (keywords[1] === "Blog" || keywords[1] === "blog" ) {
                history.push(routes.BLOG);
                newContent.push("");
            } else {
                newContent.push("No such file or directory")
            }
        } else if (keywords[0] === "ls") {
            newContent.push("output Home About Projects Experience Blog");
            newContent.push("");
        } else if (keywords[0] === "ls") {
            newContent.push("Home About Projects Experience Blog");  
        } else if (keywords[0] === "github") {
            newContent.push("");
            window.open("https://github.com/NuriAmari", "_blank");
        } else if (keywords[0] === "linkedin") {
            newContent.push("");
            window.open("https://www.linkedin.com/in/nuri-amari-a22b21144/", "_blank");
        } else if (keywords[0] === "email") {
            newContent.push("");
            window.open("mailto:nfamari@edu.uwaterloo.ca", "_blank");
        } else if (keywords[0] === "phone") {
            newContent.push("");
            window.open("tel:6133051225", "_blank");
        } else if (keywords[0] === "resume") {
            newContent.push("");
            window.open("https://nuriamari.com/resume.pdf", "_blank");
        } else if (keywords[0] === "hide") {
            this.props.toggleCli();
            newContent.push("");
        } else if (keywords[0] === "toggleMenu" || keywords[0] === "toggleMenu") {
            toggleMenu();
            newContent.push("");
        } else if (keywords[0] === "clear" || keywords[0] === "Clear") {
            newContent = [""];
        } else if (keywords[0] === "help") {
            newContent.push("output cd         --> navigate");
            newContent.push("output ls         --> list pages");
            newContent.push("output toggleMenu --> toggle menu");
            newContent.push("output linkedin   --> open linkedin");
            newContent.push("output github     --> open github");
            newContent.push("output resume     --> open resume");
            newContent.push("output call       --> call me");
            newContent.push("output email      --> email me");
            newContent.push("output enter      --> execute line");
            newContent.push("output hide       --> hide the CLI");
            newContent.push("output clear      --> clear the CLI");
            newContent.push("");
        } else {
            newContent.push("output command not found, consider help");
            newContent.push("");
        }
        this.setState({
            content: newContent,
            upArrowCount: 0,
        });
    }

    componentDidMount() {
    
    }

    componentWillUnmount() {
    
    }

    updateTerminal() {

    }

    cursorBlink() {
        this.setState(prevState => ({
            blinkActive: !prevState.blinkActive,
        }));
    }

    render() {
        return (
            <div tabIndex="0" onKeyDown={this.keyModifierHandler} onKeyPress={this.keyHandler} className={"Terminal " + this.props.passedClass}>
                Hi there! Welcome to Nuri's CLI. <br></br>
                    Type help to get started. <br></br>
                    <br></br>
                {this.state.content.map((line, index) => {
                        if (line.split(" ")[0] === "output") {
                            return (
                                <p key={index}><span className="output"> => </span>{line.slice(7)}</p>
                            );
                        } else {
                            if (index === this.state.content.length - 1) {
                                return (
                                    <p key={index}><span className="prompt">$: </span>{line}<div className="cursor"></div></p>
                                );
                            }
                            return (
                                <p key={index}><span className="prompt">$: </span>{line}</p>
                            );
                        }
                    }
                )}
            </div>
        )
    }
}

export default withRouter(Terminal);