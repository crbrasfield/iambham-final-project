import React, { Component } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ApptTimeline from "./ApptTimeline";
import Input from "./Input";
import * as appointmentService from "../../services/appointments";
import { currentUser } from "../../services/user";

class Appointments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lastname: '',

      appointments: [],
      appointmentWasCreated: false,
      appointmentWasCanceled: false
    };
    this.handleLast = this.handleLast.bind(this);
  }

  handleLast(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  componentDidMount() {
    this.loadState();
  }

  async loadState() {
    let user = await currentUser();
    let appointments = await appointmentService.all();

    this.setState({
      appointments,
      appointmentWasCreated:
        this.props.location.state &&
        this.props.location.state.appointmentCreated,
      appointmentWasCanceled:
        this.props.location.state &&
        this.props.location.state.appointmentWasCanceled,
        lastname:
          this.props.value
    });
  }

  cancelAppointment = id => {
    appointmentService.destroy(id).then(res => {
      this.props.history.replace("/appointments", {
        appointmentWasCanceled: true,
        appointmentWasCreated: false
      });

      this.loadState();
    });
  };

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

          {this.state.appointmentWasCanceled && (
            <div className="alert alert-success" role="alert">
              Appointment canceled!
            </div>
          )}
          <div className="card" style={{ margin: "5px" }}>
            <div
              class="card-header"
              style={{
                display: "flex"
              }}
            >
              <h5 class="mb-0 text-info" style={{ flex: 1 }}>
                Date
              </h5>
              <h5 class="mb-0 text-info" style={{ flex: 1 }}>
                Description
              </h5>
              <h5 class="mb-0 text-info" style={{ flex: 1 }}>
                Doctor
              </h5>
            </div>
          </div>
          <ApptTimeline
            cancelAppointment={this.cancelAppointment}
            appts={this.state.appointments}
          />
          <div style={{ height: "250px" }} />
        </div>
      </React.Fragment>
    );
  }
}

export default Appointments;
