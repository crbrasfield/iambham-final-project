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
        <div
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {this.state.appts.map(appt => {
            return (
              <div style={{ margin: "5px" }}>
                <ApptCard appointment={appt} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ApptTimeline;
