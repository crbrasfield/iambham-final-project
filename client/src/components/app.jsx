import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import NavBar from './structure/NavBar';
import Appointments from './structure/Appointments';
import EditAppt from './structure/EditAppt';
import ApptDetails from './structure/ApptDetails';
import ApptTimeline from './structure/ApptTimeline';
import Home from './structure/Home';



class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                <NavBar /> 
                    <Link to="/">Home</Link>
                    <Link to="/appointments">Appointments</Link>
                    <AuthButton />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute exact path="/appointments" component={Appointments} />
                        <Route exact path="/" component={Home} />
                        <PrivateRoute exact path="/appointments/:id" component={ApptDetails} />
                        <PrivateRoute exact path="/appointments/:id/edit" component={EditAppt} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;