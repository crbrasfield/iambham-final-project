import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import PrivateRoute from "./auth/privateRoute";
import Login from "./auth/login";
import Logout from "./auth/logout";
import AuthButton from "./auth/authButton";
import NavBar from "./structure/NavBar";
import Appointments from "./structure/Appointments";
import NewAppointment from "./structure/NewAppointment";
import ApptEdit from "./structure/ApptEdit";
import ApptDetails from "./structure/ApptDetails";
import ApptTimeline from "./structure/ApptTimeline";
import Home from "./structure/Home";
import About from "./structure/About";
import Schedule from "./structure/Schedule";
import { checkLogin, isLoggedIn } from "../services/user";
import IndividualPatient from "./structure/IndividualPatient";
import IndividualDoctor from "./structure/IndividualDoctor";
import doctorLogin from "./auth/doctorLogin";
import patientLogin from "./auth/patientLogin";
import Profile from "./structure/profile";
import Footer from "./structure/Footer";
import PatientSignUp from "./auth/patientSignUp";

class Navigation extends Component {
  state = {
    ready: false,
    user: {}
  };

  componentWillMount() {
    checkLogin().then(() => {
      this.setState({ ready: true });
    });
  }

  render() {
    if (!this.state.ready) {
      return null;
    }

    return (
      <Router>
        <Fragment>
          <NavBar isLoggedIn={isLoggedIn()} />
          <div className="" style={{ marginTop: "50px" }}>
            <Switch>
              <Route path="/login" component={Login} />
              <Route exact path="/patientLogin" component={patientLogin} />
              <Route exact path="/doctorLogin" component={doctorLogin} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/" component={Home} />
              <Route exact path="patientsignup" component={PatientSignUp} />
              <Route exact path="/aboutInnovateHealth" component={About} />
              <PrivateRoute exact path="/profile" component={Profile} />
              <PrivateRoute exact path="/schedule" component={Schedule} />
              <PrivateRoute
                exact
                path="/appointments"
                component={Appointments}
              />
              <PrivateRoute
                exact
                path="/appointments/new"
                component={NewAppointment}
              />
              <PrivateRoute
                exact
                path="/appointments/:id/edit"
                component={ApptEdit}
              />
              <PrivateRoute
                exact
                path="/appointments/:id"
                component={ApptDetails}
              />
              <PrivateRoute
                exact
                path="/patient/:id"
                component={IndividualPatient}
              />
              <PrivateRoute
                exact
                path="/doctor/:id"
                component={IndividualDoctor}
              />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default Navigation;
