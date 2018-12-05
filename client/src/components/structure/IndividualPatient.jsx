import React, { Component, Fragment } from 'react';
import * as patientService from '../../services/patients';
import * as apptService from '../../services/appointments';

class IndividualPatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            patient: {},
            appointments: {},
        }
    }

    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            let patient = await patientService.one(id);
            let apptArr = await apptService.all();

            let appointments = apptArr[0].map(appt => {
                return {
                    id: appt.id,
                    description: appt.description,
                    date: appt.date
                }
            } )
            this.setState({ patient, appointments });
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <div>
                <h1>Patient: {this.state.patient.first_name} {this.state.patient.last_name}</h1>
                <h5>Appointments:  </h5>
            </div>
        )
    }
}

export default IndividualPatient;