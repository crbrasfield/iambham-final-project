import React, { Component, Fragment } from "react";
import * as userService from "../../services/user";
import { Redirect } from "react-router-dom";
import IndeterminateProgress from "../utilities/indeterminateProgress";

import { insert as createPatient } from "../../services/patients";

class PatientSignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
      user: {
        first_name: "",
        last_name: "",
        phone: "",
        age: "",
        email: "",
        password: "",
        insuranceid: 1
      }
    };

    this.handleCreatePatient = this.handleCreatePatient.bind(this);
  }

  updateField = field => e => {
    this.setState({
      user: {
        ...this.state.user,
        [field]: e.target.value
      }
    });
  };

  async handleCreatePatient(e) {
    e.preventDefault();

    if (
      !this.state.user.first_name ||
      !this.state.user.last_name ||
      !this.state.user.phone ||
      !this.state.user.age ||
      !this.state.user.email ||
      !this.state.user.password
    ) {
      this.setState({ error: "All fields are required" });
      return;
    }

    this.setState({ error: null });

    fetch("api/new/createpatient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.user)
    })
      .then(res => {
        this.setState({ success: true });

        setTimeout(() => {
          document.getElementById("close").click();
        }, 1000);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-md btn-primary"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Register
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div
                style={{ color: "#343A40", zIndex: "2", position: "relative" }}
                className="modal-header"
              >
                <h5
                  style={{
                    color: "#343A40",
                    position: "absolute",
                    marginleft: "14%"
                  }}
                  className="modal-title"
                  id="exampleModalLabel"
                >
                  Register Here To Move Forward!
                </h5>
                <button
                  type="button"
                  className="close"
                  id="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <img
                src="https://cdn.dribbble.com/users/1047147/screenshots/3617172/all-walkin_-dribbble_1.gif"
                alt="moving forward"
                width="66%"
                height="66%"
                style={{ alignSelf: "center" }}
              />

              <div
                style={{
                  color: "#16A2B7",
                  display: "flex",
                  justifyContent: "center"
                }}
                className="modal-body"
              >
                <form>
                  <div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="person">Email</label>
                        <input
                          required
                          type="email"
                          className="form-control"
                          value={this.state.user.email}
                          onChange={this.updateField("email")}
                          aria-describedby="textHelp"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label for="person">Password</label>
                        <input
                          required
                          type="password"
                          className="form-control"
                          value={this.state.user.password}
                          onChange={this.updateField("password")}
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="form-group">
                        <label for="person">First Name</label>
                        <input
                          required
                          type="text"
                          className="form-control"
                          value={this.state.user.first_name}
                          onChange={this.updateField("first_name")}
                          aria-describedby="textHelp"
                          placeholder="First name"
                        />
                      </div>

                      <div className="form-group">
                        <label for="person">Last Name</label>
                        <label for="person" />
                        <input
                          required
                          type="text"
                          className="form-control"
                          value={this.state.user.last_name}
                          onChange={this.updateField("last_name")}
                          aria-describedby="textHelp"
                          placeholder="Last name"
                        />
                      </div>

                      <div className="form-group">
                        <label for="person">Age</label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          value={this.state.user.age}
                          onChange={this.updateField("age")}
                          aria-describedby="textHelp"
                          placeholder="Age"
                        />
                      </div>

                      <div className="form-group">
                        <label for="person">Phone</label>
                        <input
                          required
                          type="number"
                          className="form-control"
                          value={this.state.user.phone}
                          onChange={this.updateField("phone")}
                          aria-describedby="textHelp"
                          maxLength="10"
                          placeholder="Phone number"
                        />
                      </div>
                      <div className="text-danger">{this.state.error}</div>
                      <div className="text-success">
                        {this.state.success && "Account created!"}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div
                className="modal-footer"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-outline-dark"
                  onClick={this.handleCreatePatient}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>

      //     <React.Fragment>
      //     <br/><br/>

      // </React.Fragment>
    );
  }
}

export default PatientSignUp;
