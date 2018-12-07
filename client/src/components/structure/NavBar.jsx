import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../auth/authButton";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar fixed-top navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            INNOVATE HEALTH
          </Link>
          <Link to="/" className="navbar-brand">
            Home
          </Link>
          {this.props.isLoggedIn && (
            <Link to="/appointments" className="navbar-brand">
              Appointments
            </Link>
          )}
          {this.props.isLoggedIn && (
            <Link to="/Schedule" className="navbar-brand">
              Schedule
            </Link>
          )}

          <Link to="/aboutInnovateHealth" className="navbar-brand">
            About Us
          </Link>
          {this.props.isLoggedIn && <AuthButton />}
        </div>
      </div>
    );
  }
}

export default NavBar;
