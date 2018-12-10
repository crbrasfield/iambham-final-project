import React, { Component, Fragment } from "react";
import * as userService from "../../services/user";
import { Redirect, Link } from "react-router-dom";
import IndeterminateProgress from "../utilities/indeterminateProgress";
import PatientSignUp from "./patientSignUp";

class patientLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirectToReferrer: false,
      email: "",
      password: "",
      feedbackMessage: "",
      checkingLogin: true
    };
  }

  componentDidMount() {
    userService.checkLogin().then(loggedIn => {
      if (loggedIn) {
        this.setState({ redirectToReferrer: true, checkingLogin: false });
      } else {
        this.setState({ checkingLogin: false });
      }
    });
  }

  login = e => {
    e.preventDefault();
    userService
      .login(this.state.email, this.state.password)
      .then(res => {
        window.location.replace("/appointments");
      })
      .catch(err => {
        if (err.message) {
          this.setState({ feedbackMessage: err.message });
        }
      });
  };

  handleEmailChange(value) {
    this.setState({ email: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer, checkingLogin } = this.state;

    if (checkingLogin) {
      return <IndeterminateProgress message="Checking Login Status..." />;
    }
    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "150px"
        }}
      >
        <form onSubmit={this.login}>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              placeholder="Email"
              id="email"
              className="form-control"
              type="email"
              onChange={e => this.handleEmailChange(e.target.value)}
              required
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              placeholder="Password"
              id="password"
              className="form-control"
              type="password"
              onChange={e => this.handlePasswordChange(e.target.value)}
              required
            />
          </div>
          {this.state.feedbackMessage ? (
            <p>{this.state.feedbackMessage}</p>
          ) : null}
          <button type="submit" class="btn btn-primary">
            Login
          </button>
          <PatientSignUp />
        </form>
        <img
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e20d3b56093929.599fd7b26b7e1.gif"
          alt="patient login img"
        />
      </div>
    );
  }
}

const alertStyle = {
  padding: "20px",
  marginTop: "7%"
};

const addBlogFormStyle = {
  border: "10px solid darkcyan",
  padding: "50px"
};

export default patientLogin;
