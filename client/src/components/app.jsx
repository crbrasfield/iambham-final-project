import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Appointments from './Appointments';
import EditAppt from './EditAppt';
import ApptDetails from './ApptDetails'


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                <NavBar /> 
                    <Link to="/">Goodbye</Link>
                    <Switch>
                        <Route exact path="/" component={goodbye} />
                        <Route exact path="/appointments" component={Appointments} />
                        <Route exact path="appointments/:id" component={ApptDetails} />
                        <Route exact path="/appointments/:id/edit" component={EditAppt} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;