import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthButton from "../auth/authButton";
import { currentUser } from "../../services/user";

class NavBar extends Component {
  state = {
    user: {}
  };

  componentDidMount() {
    currentUser().then(user => {
      this.setState({ user });
    });
  }

  render() {
    console.log("current user:", this.state.user);
    return (
      <div>
        <div className="navbar fixed-top navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
            INNOVATE HEALTH
          </Link>
          {this.props.isLoggedIn && (
            <Link to="/appointments" className="navbar-brand">
              {this.state.user.user_type === "patient"
                ? "My Appointments"
                : "Appointments"}
            </Link>
          )}

          {!this.props.isLoggedIn && (
            <Link to="/aboutInnovateHealth" className="navbar-brand">
              About Us
            </Link>
          )}

          {this.state.user && (
            <Link to="/profile" className="navbar-brand">
              {this.state.user.first_name} {this.state.user.last_name}
            </Link>
          )}
          {this.props.isLoggedIn && <AuthButton />}
        </div>
      </div>
    );
  }
}

export default NavBar;
