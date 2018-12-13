import React from "react";
import { currentUser } from "../../services/user";

import {
  one as getDoctor,
  update as updateDoctor
} from "../../services/doctors";
import {
  one as getPatient,
  update as updatePatient
} from "../../services/patients";

export default class Profile extends React.Component {
  state = {
    loading: true,
    success: false,
    user: {}
  };

  componentDidMount() {
    currentUser().then(user => {
      this.setState(user);

      if (user.user_type === "patient") {
        this.fetchPatientProfile(user.id);
      } else {
        this.fetchDoctorProfile(user.id);
      }
    });
  }

  fetchPatientProfile = id => {
    getPatient(id).then(p => {
      this.setState({ user: p, loading: false });
    });
  };

  fetchDoctorProfile = id => {
    getDoctor(id).then(d => {
      this.setState({ user: d, loading: false });
    });
  };

  updateField = (field, value) => {
    this.setState({ user: { ...this.state.user, [field]: value } });
  };

  onSubmit = e => {
    e.preventDefault();

    if (
      !this.state.user.email ||
      !this.state.user.first_name ||
      !this.state.user.last_name ||
      !this.state.user.phone
    ) {
      this.setState({ invalid: true });
      return;
    }

    this.save();
  };

  save = () => {
    const { user } = this.state;

    if (this.state.user.user_type === "patient") {
      updatePatient(user.id, user).then(() => {
        this.setState({ success: true });

        setTimeout(() => {
          window.location.reload();
        }, 1000);
      });
    } else {
      updateDoctor(user.id, user).then(() => {
        this.setState({ success: true });
      });

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  render() {
    if (this.state.loading) return null;
    return (
      <div className="container pt-5">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>First name *</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="First name"
              onChange={e => {
                this.updateField("first_name", e.target.value);
              }}
              value={this.state.user.first_name}
            />
          </div>
          <div className="form-group">
            <label>Last name *</label>
            <input
              required
              type="text"
              className="form-control"
              placeholder="Last name"
              onChange={e => {
                this.updateField("last_name", e.target.value);
              }}
              value={this.state.user.last_name}
            />
          </div>
          <div className="form-group">
            <label>Email address *</label>
            <input
              required
              type="email"
              className="form-control"
              placeholder="Email"
              onChange={e => {
                this.updateField("email", e.target.value);
              }}
              value={this.state.user.email}
            />
          </div>
          <div className="form-group">
            <label>Phone *</label>
            <input
              required
              type="number"
              className="form-control"
              placeholder="Phone"
              value={this.state.user.phone}
              onChange={e => {
                this.updateField("phone", e.target.value);
              }}
            />
          </div>
          {this.state.success && (
            <div className="alert alert-success" role="alert">
              Profile updated!
            </div>
          )}
          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
