import React from "react";
import { insert as createAppointment } from "../../services/appointments";
import { all as fetchDoctors } from "../../services/doctors";

export default class NewAppointment extends React.Component {
  constructor() {
    super();

    this.state = {
      appointment: {
        date: this.today(),
        description: "",
        doctorid: null
      },
      doctors: []
    };
  }

  componentDidMount() {
    fetchDoctors().then(res => {
      this.setState({ doctors: res });
    });
  }

  updateField = (field, value) => {
    this.setState({
      appointment: { ...this.state.appointment, [field]: value }
    });
  };

  onSubmit = e => {
    e.preventDefault();

    createAppointment(this.state.appointment).then(id => {
      this.setState({ success: true });

      this.props.history.replace(`/appointments`, { appointmentCreated: true });
    });
  };

  async handleNewAppt() {

    try {
        let newAppt = await fetch('api/appointments', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(this.state)
        });
        this.setState({ newAppt });
    } catch (err) {
        console.error(err);
    }
}

  today = () => {
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDay() < 10 ? `0${date.getDay()}` : date.getDay();
    const year = date.getFullYear();

    const today = `${year}-${month}-${day}`;

    return today;
  };

  assignDoctor = e => {
    this.setState({
      appointment: {
        ...this.state.appointment,
        doctorid: Number(e.target.value) || null
      }
    });
  };

  render() {
    return (
      <div className="container pt-5">
        <h1 className="text-info mb-2">New Appointment</h1>
        <form onSubmit={this.onSubmit}>
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
            >
              <option value="">Any</option>
              {this.state.doctors.map(d => (
                <option value={d.id}>Dr. {d.last_name}</option>
              ))}
            </select>
          </div>

          <button type="submit" className="btn btn-info" onClick={(e) => {
              e.preventDefault();
              this.handleNewAppt()}}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
