import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import HelloWorld from './hello';
import GoodbyeWorld from './goodbye';
import Appointments from './Appointments';
import EditAppt from './EditAppt';
import ApptDetails from './ApptDetails';
import goodbye from './goodbye';
import Appointment from './Appointment';


class Navigation extends Component {

    render() {
        return (
            <Router>
                <Fragment>
                    <Link to="/">Goodbye</Link>
                    <Switch>
                        <Route exact path="/appointments" component={Appointments} />

                        {/* <Route exact path="/appointments" component={Appointments} /> */}
                        {/* <Route exact path="/viewappointment" component={Appointment}></Route> */}

                        <Route exact path="/appointments/:id" component={ApptDetails} />
                        <Route exact path="/appointments/:id/edit" component={EditAppt} />
                    </Switch>
                </Fragment>
            </Router>
        )
    }
}

export default Navigation;