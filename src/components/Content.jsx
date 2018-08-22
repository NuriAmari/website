import React from 'react';
import '../App.css';
import { Route, withRouter, Switch } from 'react-router-dom';
import * as routes from '../constants/routes';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Blog from './pages/Blog';
import PageNotFound from './pages/PageNotFound';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Content = ({ location }) => {
    return (
        <div className="Content">
            <TransitionGroup className="transition-group">
                <CSSTransition key={ location.key } classNames="fade" timeout={{enter: 300, exit: 300}}>
                    <section className="route-section">
                        <Switch location={location}>
                            <Route exact path={routes.HOME} component={Home} />
                            <Route exact path={routes.ABOUT} component={About} />
                            <Route exact path={routes.PROJECTS} component={Projects} />
                            <Route exact path={routes.EXPERIENCE} component={Experience} />
                            <Route exact path={routes.BLOG} component={Blog} />
                            <Route component={PageNotFound} />
                        </Switch>
                    </section>    
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default withRouter(Content);