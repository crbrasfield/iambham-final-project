import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import ApptTimeline from "./ApptTimeline";
import Input from "./Input";
import * as appointmentService from "../../services/appointments";
import { currentUser } from "../../services/user";
import ApptCard from "./ApptCard";
import DoctorAppts from "./DoctorAppts";

class Appointments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      appointments: [],
      myDocAppointments: [],
      appointmentWasCreated: false,
      appointmentWasCanceled: false
    };

    this.handleDocAppt = this.handleDocAppt.bind(this);
  }

  componentDidMount() {
    this.loadState();
  }

  async loadState() {
    let user = await currentUser();
    let appointments = await appointmentService.all();
    let myDocAppointments = this.state.appointments.filter(appt => {
      let doctorid = this.state.user.id;
      let apptid = appt.doctorid;

      if(doctorid == apptid) {
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
        this.props.location.state.appointmentWasCanceled
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

  // myDocAppointments = () => {
  //   let myDocAppointments = this.state.appointments.filter(appt => {
  //       let doctorid = this.state.user.id;
  //       let apptid = appt.doctorid;

  //       if(doctorid == apptid) {
  //         return appt;
  //       }
  //   });
  // }

  handleDocAppt() {
    return this.state.myDocAppointments.map(appt => {
      return <DoctorAppts key={appt.id} appointment={appt} />
    })

  }

  render() {
    if(this.state.user.user_type === "patient") {
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

            <Link
              style={{
                display: "flex",
                justifyContent: "center"
              }}
              className="btn btn-outline-primary"
              to={`/appointments`}
              onClick={this.handleDocAppt}>
              My Appointments
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
    }
  }
}

export default Appointments;
