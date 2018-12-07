import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import PrivateRoute from './auth/privateRoute';
import Login from './auth/login';
import Logout from './auth/logout';
import AuthButton from './auth/authButton';
import NavBar from './structure/NavBar';
import Appointments from './structure/Appointments';
import ApptEdit from './structure/ApptEdit';
import ApptDetails from './structure/ApptDetails';
import ApptTimeline from './structure/ApptTimeline';
import Home from './structure/Home';
import About from './structure/About';
import Schedule from './structure/Schedule';
import { checkLogin } from '../services/user';
import IndividualPatient from './structure/IndividualPatient';
import doctorLogin from './auth/doctorLogin';
import patientLogin from './auth/patientLogin';
import Footer from './structure/Footer';


class Navigation extends Component {

    state = {
        ready: false
    }

    componentWillMount() {
        checkLogin()
        .then(() => {
            this.setState({ ready: true })
        })
    }

    render() {
        if (!this.state.ready) {
            return null;
        }

        return (
            <Router>
                <Fragment>
                <NavBar /> 
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route exact path="/patientLogin" component={patientLogin} />
                        <Route exact path="/doctorLogin" component={doctorLogin} />
                        <Route exact path="/logout" component={Logout} />
                        <Route exact path="/" component={Home} />
                        <Route exact path="/aboutInnovateHealth" component={About} />
                        <PrivateRoute exact path="/schedule" component={Schedule} />
                        <PrivateRoute exact path="/appointments" component={Appointments} />
                        <PrivateRoute exact path="/appointments/:id/edit" component={ApptEdit} />
                        <PrivateRoute exact path="/appointments/:id" component={ApptDetails} />
                        <PrivateRoute exact path="/patient/:id" component={IndividualPatient} />
                        {/* <Route exact path="/footer" component={Footer} /> */}
                    </Switch>
                    <Footer/>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;