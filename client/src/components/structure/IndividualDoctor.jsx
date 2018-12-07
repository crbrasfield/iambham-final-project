import React, { Component, Fragment } from 'react';
import * as doctorService from '../../services/doctors';
import * as apptService from '../../services/appointments';

class IndividualDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doctor: {},
            appointments: {},
        }
    }

    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            let doctor = await doctorService.one(id);
            let apptArr = await apptService.all();

            let appointments = apptArr.map(appt => {
                return {
                    id: appt.id,
                    description: appt.description
                }
            });

            this.setState({ doctor, appointments });
            console.table(this.state.doctor);
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div style={style}>
                <h1>Doctor: {this.state.doctor.first_name} {this.state.doctor.last_name}</h1>
                <h5>Appointments:  </h5>
                
            </div>
        )
    }
}

const style = {
    marginTop: "7%"
}
export default IndividualDoctor;