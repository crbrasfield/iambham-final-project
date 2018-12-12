import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import * as appointmentService from "../../services/appointments";
import { currentUser } from "../../services/user";
import { throws } from "assert";
import { all as fetchDoctors } from "../../services/doctors";

export default class ApptEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      appointment: {},
      description: "",
      doctors: []
    };

    this.handleEdit = this.handleEdit.bind(this);
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      let user = await currentUser();
      let appointment = await appointmentService.one(id);
      let doctors = await fetchDoctors();

      appointment.date = new Date(appointment.date);

      this.setState({
        user,
        appointment,
        doctors,
        description: appointment.description
      });
    } catch (err) {
      console.error(err);
    }
  }

  updateField = (field, value) => {
    this.setState({
      ...this.state,
      appointment: { ...this.state.appointment, [field]: value }
    });
  };

  assignDoctor = e => {
    this.setState({
      ...this.state,
      appointment: {
        ...this.state.appointment,
        doctorid: Number(e.target.value) || null
      }
    });
  };

  async handleEdit(e) {
    e.preventDefault();
    try {
      let id = this.props.match.params.id;
      let editDescription = await appointmentService.update(
        id,
        this.state.appointment
      );

      this.props.history.replace(`/appointments`);
    } catch (err) {
      console.error(err);
    }
  }

  today = apptDate => {
    console.log(apptDate);
    const date = apptDate ? new Date(apptDate) : new Date();
    const month = date.getMonth();
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const year = date.getFullYear();

    const today = `${year}-${month}-${day}`;

    return today;
  };

  render() {
    console.log(this.state);
    return (
      <div className="container pt-5 pb-5">
        <form onSubmit={this.handleEdit}>
          <div className="form-group">
            <label>When would you like to be seen?</label>
            <input
              required
              type="date"
              id="start"
              name="trip-start"
              value={this.state.appointment.date}
              min={this.today()}
              max="2018-12-31"
              className="form-control"
              onChange={e => {
                this.updateField("date", e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <label>Tell us whats wrong</label>
            <textarea
              required
              type="text"
              className="form-control"
              placeholder="I'm feeling..."
              onChange={e => {
                this.updateField("description", e.target.value);
              }}
              value={this.state.appointment.description}
            />
          </div>

          <div className="form-group">
            <label>Preferred Doctor</label>
            <select
              onChange={e => {
                this.assignDoctor(e);
              }}
              className="form-control"
              value={this.state.appointment.doctorid}
            >
              <option value="">Any</option>
              {this.state.doctors.map(d => (
                <option value={d.id}>Dr. {d.last_name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-info">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
