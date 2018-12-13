import React, { Component, Fragment } from "react";
import * as doctorService from "../../services/doctors";
import * as apptService from "../../services/appointments";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

class IndividualDoctor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      doctor: {},
      appointments: {}
    };
  }

  async componentDidMount() {
    try {
      let id = this.props.match.params.id;
      let doctor = await doctorService.one(id);

      this.setState({ doctor });
      console.table(this.state.doctor);
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1>
          Doctor: {this.state.doctor.first_name} {this.state.doctor.last_name}
        </h1>
        <h6>Phone: {this.state.doctor.phone}</h6>
        <h6>E-mail: {this.state.doctor.email}</h6>
      </div>
    );
  }
}

export default IndividualDoctor;
