import React, { Component } from "react";
import { render } from "react-dom";
import ApptCard from "./ApptCard";
import * as appointmentService from "../../services/appointments";

class ApptTimeline extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appts: props.appts
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      appts: nextProps.appts
    });
  }

  render() {
    return (
      <div>
        <div className="accordion" id="accordionExample">
          <div style={{ display: "flex", flexDirection: "column" }}>
            {this.state.appts.map(appt => {
              return (
                <div style={{ margin: "5px" }}>
                  <ApptCard
                    cancelAppointment={this.props.cancelAppointment}
                    key={appt.appointment_id}
                    appointment={appt}
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
