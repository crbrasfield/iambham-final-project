import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Appointments from './Appointments';

class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Goodbye</Link>
                    <Switch>
                        <Route path="/" component={GoodbyeWorld} />
                        <Route path="/appointments" component={Appointments} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;