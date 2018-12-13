import React, { Component } from "react";
import * as appointmentService from "../../services/appointments";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import PatientAuth from "../auth/patientAuth";
import DoctorAuth from "../auth/doctorAuth";
import PatientAuth2 from "../auth/patientAuth2";
import DoctorAuth2 from "../auth/doctorAuth2";
import { isLoggedIn } from "../../services/user";
import PatientSignUp from "../auth/patientSignUp";

class Home extends Component {
  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="button-group">
          <div
            className="cont"
            style={{ position: "relative", marginLeft: "0%" }}
          >
            <div style={{ marginLeft: "12%" }}>
              <div
                className="row"
                style={{ width: "88%", border: "5px solid #FF2C4E" }}
              >
                <div
                  className="col-sm-3"
                  style={{ margin: "7%", marginTop: "15%" }}
                >
                  <h1 style={{ textAlign: "center" }}>Doctors Who Care</h1>
                  <h1 style={{ textAlign: "center" }}>Doctors You Can Trust</h1>
                </div>

                <div className="col-sm-6">
                  <img
                    src="https://i.pinimg.com/originals/20/90/62/20906274d1b4c47333a97c758db0b9a5.png"
                    alt="innovate landing"
                  />
                </div>
              </div>
            </div>

            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <div className="" style={{}}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    class="col-md"
                    style={{
                      backgroundColor: "#FF6C84",
                      border: "2px solid #FF2C4E",
                      width: "343px",
                      height: "252px",
                      margin: ".02%"
                    }}
                  >
                    <h4
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      Emergency
                    </h4>

                    <h6
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      If you are in need of care outside of Innovate Health
                      operating hours, call the emergency appointment number for
                      emergency service.
                    </h6>
                    <br />
                    <button
                      style={{ marginLeft: "3%" }}
                      className="btn btn-white btn-sm"
                    >
                      Learn More >
                    </button>
                  </div>
                  <div
                    class="col-md"
                    style={{
                      backgroundColor: "#FF2C4E",
                      border: "2px solid #FF6C84",
                      width: "343px",
                      height: "252px",
                      margin: ".02%"
                    }}
                  >
                    <h4
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      Login
                    </h4>

                    <h6
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "center",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      Innovate Health is committed to providing world-class care
                      to every patient.
                    </h6>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        marginBottom: "0%"
                      }}
                    >
                      <div className="m-5">
                        {!isLoggedIn() && <PatientAuth2 />}
                      </div>
                      <div className="m-5">
                        {!isLoggedIn() && <DoctorAuth2 />}
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md"
                    style={{
                      backgroundColor: "#FF6C84",
                      border: "2px solid #FF2C4E",
                      width: "343px",
                      height: "252px",
                      margin: ".02%"
                    }}
                  >
                    <h4
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      Services
                    </h4>

                    <div className="row">
                      <div style={{ marginLeft: "3%" }} className="col-md-5">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Cardiology
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Endocopy
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Infusion
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Mammography
                        </h6>
                      </div>
                      <div style={{ marginLeft: "5%" }} className="col-md-5">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Neurology
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Radiology
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Ultrasound
                        </h6>
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Urology
                        </h6>
                      </div>

                      <button
                        style={{ marginLeft: "8.6%", marginTop: "3.3%" }}
                        className="btn btn-white btn-sm"
                      >
                        All Services >
                      </button>
                    </div>
                  </div>
                  <div
                    class="col-md"
                    style={{
                      backgroundColor: "#FF2C4E",
                      border: "2px solid #FF6C84",
                      width: "343px",
                      height: "252px",
                      margin: ".02%"
                    }}
                  >
                    <h4
                      style={{
                        color: "white",
                        display: "flex",
                        justifyContent: "flex-start",
                        marginLeft: "3%",
                        marginTop: "7%"
                      }}
                    >
                      Hours
                    </h4>

                    <div className="row">
                      <div className="col-md-5">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Mon - Fri
                        </h6>
                      </div>
                      <div className="col-md-7">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "7%"
                          }}
                        >
                          6 a.m. - 4 p.m.
                        </h6>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-5">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Saturday
                        </h6>
                      </div>
                      <div className="col-md-7">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "7%"
                          }}
                        >
                          6 a.m. - 5 p.m.
                        </h6>
                      </div>
                    </div>
                    <br />
                    <div className="row">
                      <div className="col-md-5">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-start",
                            marginTop: "7%"
                          }}
                        >
                          Sunday
                        </h6>
                      </div>
                      <div className="col-md-7">
                        <h6
                          style={{
                            color: "white",
                            display: "flex",
                            justifyContent: "flex-end",
                            marginTop: "7%"
                          }}
                        >
                          8 a.m. - 2 p.m.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div className="col-md-2" />
            <div className="col-md-4">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h1 style={{ marginTop: "7%" }}>A Clinic Who Cares</h1>
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 style={{ textAlign: "center" }}>
                  Established to help connect people to physicians, Innovate
                  Health is dedicated to providing quality compassionate care
                  for our patients and their families.
                </h5>
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 style={{ textAlign: "center" }}>
                  Doctors here at Innovate Health take extra care ensure that
                  our patients are not only recieving the best treatment, but
                  also experience the care and compassion we have for them.
                </h5>
              </div>
              <br />
              <br />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <h5 style={{ textAlign: "center" }}>
                  Our Nurses here at Innovate Health always make comfort and
                  warmth a top priority. We care about building meaningful
                  relationships with all of our patients.
                </h5>
              </div>
            </div>

            <div className="col-md-6">
              <img
                style={{ marginRight: "7%" }}
                src="https://cdn.dribbble.com/users/398490/screenshots/4807672/family-dribbble.gif"
                alt="family"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
