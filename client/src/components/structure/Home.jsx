import React, { Component } from "react";
import * as appointmentService from "../../services/appointments";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import PatientAuth from "../auth/patientAuth";
import DoctorAuth from "../auth/doctorAuth";
import { isLoggedIn } from "../../services/user";

class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="button-group">
          <div className="cont">
            <h3 className="text-center text-info w-75 m-auto pt-5">
              Innovate Health is a major center for clinical use. Our faculty
              physicians, nursing staff, and support personnel are committed to
              providing world-class care to every patient.
            </h3>
            <div
              style={{
                display: "flex",
                justifyContent: "center"
              }}
            >
              <div className="m-5">{!isLoggedIn() && <PatientAuth />}</div>
              <div className="m-5">{!isLoggedIn() && <DoctorAuth />}</div>
            </div>
            <div
              className=""
              style={{
                display: "flex",
                justifyContent: "center",
                position: "relative",
                width: "100vw"
              }}
            >
              <img
                src="http://landing.sanitasweb.es/globalcare/welcomecenter/wp-content/uploads/2016/02/hospital.gif"
                alt="hospital"
                style={{ width: "100%" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
