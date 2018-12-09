import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ApptTimeline from "./ApptTimeline";
import Input from "./Input";
import * as appointmentService from "../../services/appointments";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      firstname: "",
      lastname: "",
      age: "",
      email: "",
      password: "",
      number: "",
      other: "",
      description: ""
    };
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

  async componentDidMount() {
    let appointments = await appointmentService.all();
    this.setState({
      appointments,
      appointmentWasCreated:
        this.props.location.state &&
        this.props.location.state.appointmentCreated
    });
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
      let res = await fetch(
        "api/appointments"
        // {
        //     method: 'POST',
        //     headers: {
        //         "Content-Type": "applications/json"
        //     },
        //     body: JSON.stringify(this.state)
        // }
      );

      //this.props.history.replace('/');
    } catch (err) {}
  }

  render() {
    return (
      <React.Fragment>
        <div className="container pt-5">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <h1 className="text-info">My appointments</h1>
            <Link
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              className="btn btn-outline-primary"
              to={`/appointments/new`}
            >
              New Appointment
            </Link>
          </div>

          {this.state.appointmentWasCreated && (
            <div className="alert alert-success" role="alert">
              Appointment created!
            </div>
          )}
          <ApptTimeline appts={this.state.appointments} />
          <div style={{ height: "250px" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Appointments;
