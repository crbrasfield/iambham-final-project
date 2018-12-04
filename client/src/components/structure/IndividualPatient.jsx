import React, { Component, Fragment } from 'react';
import * as patientService from '../../services/patients';

class IndividualPatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            type: "patient",
            patient: {},
        }
    }

    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            let patient = await patientService.one(id);
            this.setState({ patient });

        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <h1>Patient: {this.state.patient.first_name} {this.state.patient.last_name}</h1>
        )
    }
}

export default IndividualPatient;