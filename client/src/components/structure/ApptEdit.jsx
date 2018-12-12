import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import * as appointmentService from '../../services/appointments';
import { throws } from 'assert';

class ApptEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            appointment: {},
            description: ''
        }
        // this.handleFirst = this.handleFirst.bind(this);
        // this.handleLast = this.handleLast.bind(this);
        // this.handleAge = this.handleAge.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handlePassword = this.handlePassword.bind(this);
        // this.handleNumber = this.handleNumber.bind(this);
        // this.handleOther = this.handleOther.bind(this);
        // this.handleDescription = this.handleDescription.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        try {
            let appointment = await appointmentService.one(this.props.match.params.id);
            this.setState({
                appointment,
                description: appointment.description
            })
        } catch (err) {
            console.error(err);
        };
        // try {
        //     let res = await fetch(`/api/appointments/${this.props.match.params.id}`);
        //     let appt = await res.json();
        //     let first_name = appt.first_name;
        //     let last_name = appt.last_name;
        //     let age = appt.age;
        //     let email = appt.email;
        //     let password = appt.password;
        //     let number = appt.number;
        //     let other = appt.other;
        //     let description = appt.description;
        //     this.setState({ first_name: first_name, last_name: last_name, age: age, email: email, password: password, number: number, other: other, description: description });
        // } catch (e) { }
    }

    async handleEdit(e) {
        e.preventDefault();

        try {
            let appointment = await appointmentService.update(this.props.match.params.id, this.state.description);
            this.props.history.replace(`/appointments`);
        } catch (err) {
            console.error(err);
        }
    }

    // handleFirst(e) {
    //     // console.log(e.target.value);
    //     this.setState({
    //         first_name: e.target.value
    //     });
    // }

    // handleLast(e) {
    //     // console.log(e.target.value);
    //     this.setState({ last_name: e.target.value });
    // }

    // handleAge(e) {
    //     // console.log(e.target.value);
    //     this.setState({ age: e.target.value });
    // }

    // handleEmail(e) {
    //     // console.log(e.target.value);
    //     this.setState({ email: e.target.value });
    // }

    // handlePassword(e) {
    //     // console.log(e.target.value);
    //     this.setState({ password: e.target.value });
    // }

    // handleNumber(e) {
    //     // console.log(e.target.value);
    //     this.setState({ number: e.target.value });
    // }

    // handleOther(e) {
    //     // console.log(e.target.value);
    //     this.setState({ other: e.target.value });
    // }

    // handleDescription(e) {
    //     // console.log(e.target.value);
    //     this.setState({ description: e.target.value });
    // }

    // async handleSubmit(e) {
    //     try {
    //         let res = await apptService.insert(this.state);
    //         this.props.history.replace(`/appointments/${this.props.match.params.id}`);
    //         console.log(email, last_name, age, number, other);

    //     }
    //     catch (err) { console.log(`You've got yourself an error there : ${err}`) }
    // }

    render() {
        return (

            <div>
                <form>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea type="text" className="form-control" placeholder={this.state.description} value={this.state.description} 
                        onChange={e => this.setState({ description: e.target.value})} />
                    </div>
                    <button type="submit" className="btn btn-warning" onClick={e => {
                        e.preventDefault();
                        this.handleEdit(e);
                    }}>
                        
                    </button>
                </form>
            </div>
            
        )
    }
}

export default ApptEdit;