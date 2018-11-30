import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
<<<<<<< HEAD
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

=======
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Appointments from './Appointments';
import EditAppt from './EditAppt';
import ApptDetails from './ApptDetails';
import goodbye from './goodbye';
import Appointment from './Appointment';
>>>>>>> 04b4b81ea00cec82b930f144f64d57e38bf62f04


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
<<<<<<< HEAD
                        <Route path="/login" component={Login} />
                        <Route path="/logout" component={Logout} />
                        <PrivateRoute exact path="/appointments" component={Appointments} />
                        <Route exact path="/" component={Home} />
                        {/* <Route exact path="/appointments" component={Appointments} /> */}
                        {/* <Route exact path="/viewappointment" component={Appointment}></Route> */}

                        <PrivateRoute exact path="/appointments/:id" component={ApptDetails} />
                        <PrivateRoute exact path="/appointments/:id/edit" component={EditAppt} />
=======
                        <Route exact path="/appointments" component={Appointments} />

                        {/* <Route exact path="/appointments" component={Appointments} /> */}
                        {/* <Route exact path="/viewappointment" component={Appointment}></Route> */}

                        <Route exact path="/appointments/:id" component={ApptDetails} />
                        <Route exact path="/appointments/:id/edit" component={EditAppt} />
>>>>>>> 04b4b81ea00cec82b930f144f64d57e38bf62f04
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;