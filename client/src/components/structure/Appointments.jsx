import React, { Component } from 'react';
import { render } from 'react-dom';
import ApptTimeline from './AppointmentCard';
import Input from './Input';
import * as appointmentService from '../../services/appointments';

class Appointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointments:[],
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            password: '',
            number: '',
            other: '',
            description: ''
        }
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleOther = this.handleOther.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleFirst(e) {
        // console.log(e.target.value);
        this.setState({ firstname: e.target.value });
    }

    handleLast(e) {
        // console.log(e.target.value);
        this.setState({ lastname: e.target.value });
    }

    handleAge(e) {
        // console.log(e.target.value);
        this.setState({ age: e.target.value });
    }

    handleEmail(e) {
        // console.log(e.target.value);
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        // console.log(e.target.value);
        this.setState({ password: e.target.value });
    }

    handleNumber(e) {
        // console.log(e.target.value);
        this.setState({ number: e.target.value });
    }

    handleOther(e) {
        // console.log(e.target.value);
        this.setState({ other: e.target.value });
    }

    handleDescription(e) {
        // console.log(e.target.value);
        this.setState({ description: e.target.value });
    }

    async handleSubmit(e) {
        e.preventDefault();
        try {
            let res = await fetch('api/appointments' 
            // {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "applications/json"
            //     },
            //     body: JSON.stringify(this.state)
            // }
            );
            let appointments = await appointmentService.all();
            this.setState(appointments);
            console.log(this.state.appointments);
            //this.props.history.replace('/');
        } catch (err) { }
    }

    render() {
        return (

            <React.Fragment>
                <Input 
                    handleFirst={this.handleFirst}
                    handleLast={this.handleLast}
                    handleAge={this.handleAge}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    handleNumber={this.handleNumber}
                    handleOther={this.handleOther}
                    handleDescription={this.handleDescription}
                    handleSubmit={this.handleSubmit}

                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    age={this.state.age}
                    email={this.state.email}
                    password={this.state.password}
                    number={this.state.number}
                    other={this.state.other}
                    description={this.state.description}
                    id={this.state.id} />

                <ApptTimeline appts={this.state.appts} />
            </React.Fragment>

        )
    }
}

export default Appointments;