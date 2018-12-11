import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ApptTimeline from "./ApptTimeline";
import Input from "./Input";
import * as appointmentService from "../../services/appointments";
import { currentUser } from "../../services/user";
import ApptCard from "./ApptCard";

class Appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      appointments: [],
      myDocAppointments: [],
      appointmentWasCreated: false,
      appointmentWasCanceled: false,
      myDocApptLoaded: false,
      allApptLoaded: true,
      showAllAppointments: false
    };
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
    const appointments = await appointmentService.all();
    const myDocAppointments = appointments.filter(appt => {
      let doctorid = user.id;
      let apptid = appt.doctorid;

      if (doctorid == apptid) {
        return appt;
      }
    });

    this.setState({
      user,
      appointments,
      myDocAppointments,
      appointmentWasCreated:
        this.props.location.state &&
        this.props.location.state.appointmentCreated,
      appointmentWasCanceled:
        this.props.location.state &&
        this.props.location.state.appointmentWasCanceled,
        lastname:
          this.props.value
    });

    console.log(this.state.appointments, this.state.myDocAppointments);
  }

  async handleNewAppointment() {

    console.log(this.state);

    try {
        let newPatient = await fetch('api/new/createpatient', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        });
   
    } catch (err) {
        console.error(err);
    }
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
    if (this.state.user.user_type === "patient") {
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
                Appointment cancelled!
              </div>
            )}
            <div className="card" style={{ margin: "5px" }}>
              <div
                className="card-header"
                style={{
                  display: "flex"
                }}
              >
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
                  Date
                </h5>
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
                  Description
                </h5>
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
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
    } else {
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
              <h1 className="text-info">Appointments</h1>
              <div style={{ display: "flex" }}>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    marginRight: "15px"
                  }}
                  className={
                    this.state.showAllAppointments
                      ? "btn btn-primary"
                      : "btn btn-outline-primary"
                  }
                  onClick={() => {
                    this.setState({ showAllAppointments: true });
                  }}
                >
                  All Appointments
                </button>
                <button
                  style={{
                    display: "flex",
                    justifyContent: "center"
                  }}
                  className={
                    !this.state.showAllAppointments
                      ? "btn btn-primary"
                      : "btn btn-outline-primary"
                  }
                  onClick={() => {
                    this.setState({ showAllAppointments: false });
                  }}
                >
                  My Appointments
                </button>
              </div>
            </div>

            {this.state.appointmentWasCreated && (
              <div className="alert alert-success" role="alert">
                Appointment created!
              </div>
            )}

            {this.state.appointmentWasCanceled && (
              <div className="alert alert-success" role="alert">
                Appointment cancelled!
              </div>
            )}
            <div className="card" style={{ margin: "5px" }}>
              <div
                className="card-header"
                style={{
                  display: "flex"
                }}
              >
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
                  Date
                </h5>
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
                  Description
                </h5>
                <h5 className="mb-0 text-info" style={{ flex: 1 }}>
                  Doctor
                </h5>
              </div>
            </div>
            <ApptTimeline
              cancelAppointment={this.cancelAppointment}
              appts={
                this.state.showAllAppointments
                  ? this.state.appointments
                  : this.state.myDocAppointments
              }
            />
            <div style={{ height: "250px" }} />
          </div>
        </React.Fragment>
      );
    }
  }
  else {
    return(
      <React.Fragment>
      <div className="container pt-5">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <h1 className="text-info">Appointments</h1>
          <button
            style={{
              display: "flex",
              justifyContent: "center"
            }}
            className="btn btn-outline-primary">
            My Appointments
          </button>
        </div>

        {this.state.appointmentWasCreated && (
          <div className="alert alert-success" role="alert">
            Appointment created!
          </div>
        )}

        {this.state.appointmentWasCanceled && (
          <div className="alert alert-success" role="alert">
            Appointment cancelled!
          </div>
        )}
        <div className="card" style={{ margin: "5px" }}>
          <div
            className="card-header"
            style={{
              display: "flex"
            }}
          >
            <h5 className="mb-0 text-info" style={{ flex: 1 }}>
              Date
            </h5>
            <h5 className="mb-0 text-info" style={{ flex: 1 }}>
              Description
            </h5>
            <h5 className="mb-0 text-info" style={{ flex: 1 }}>
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
    )
  }
}
}

export default Appointments;
