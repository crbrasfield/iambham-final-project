import React, { Component } from "react";
import { render } from "react-dom";
import ApptCard from "./ApptCard";
import * as appointmentService from "../../services/appointments";
import { all as fetchDoctors } from "../../services/doctors";

class ApptTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appts: props.appts,
      doctors: []
    };
  }

  componentDidMount() {
    fetchDoctors().then(doctors => {

      this.setState({ doctors });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      appts: nextProps.appts
    });
  }

  render() {
    // console.log("from render", this.state.appts)

    return (
      <div>
        <div className="accordion" id="accordionExample">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {this.state.appts.map(appt => {
              return (
                <div style={{ margin: "5px" }}>
                  <ApptCard
                    cancelAppointment={this.props.cancelAppointment}
                    key={appt.id}
                    appointment={appt}
                    doctor={this.state.doctors.find(d => d.id == appt.doctorid)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default ApptTimeline;
