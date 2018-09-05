import React from 'react';
import '../App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import * as routes from '../constants/routes';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import PageNotFound from './pages/PageNotFound';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Content = ({ location, passedClass }) => {
    return (
        <div className={`Content ${passedClass}`}>
            <TransitionGroup className="transition-group stretch">
                <CSSTransition key={ location.key } classNames="fade" className="stretch" timeout={{enter: 300, exit: 300}}>
                    <section className="route-section stretch">
                        <Switch location={location} className="stretch">
                            <Route className="stretch" exact path={routes.HOME} component={Home} />
                            <Route className="stretch" exact path={routes.ABOUT} component={About} />
                            <Route className="stretch" exact path={routes.PROJECTS} component={Projects} />
                            <Route className="stretch" exact path={routes.EXPERIENCE} component={Experience} />
                            <Route className="stretch" exact path={routes.RESUME} component={() => window.location = "https://nuriamari.github.io/resume.pdf"}/>
                            <Route className="stretch" component={PageNotFound} />
                        </Switch>
                    </section>    
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}



export default withRouter(Content);