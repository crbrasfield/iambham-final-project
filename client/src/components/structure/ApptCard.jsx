import React from "react";
import { Link } from "react-router-dom";

export default ({ appointment, cancelAppointment }) => {
  const date = new Date(appointment.date);

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return (
    <div
      class="card"
      key={appointment.appointment_id}
      style={{ width: "100%" }}
    >
      <div
        class="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        id={`apt-${appointment.appointment_id}`}
      >
        <div class="mb-0" style={{ flex: 1 }}>
          <button
            class="btn btn-link text-info"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${appointment.appointment_id}`}
            aria-expanded="true"
            aria-controls={`collapse${appointment.appointment_id}`}
          >
            {month}/{day}/{year}
          </button>
        </div>
        <div class="mb-0 text-secondary" style={{ flex: 1 }}>
          {appointment.description.substring(0, 10)}...
        </div>
        <div class="mb-0 text-secondary" style={{ flex: 1 }}>
          {appointment.doctorid ? (
            <Link to={`/doctor/${appointment.doctorid}`}>Doctor</Link>
          ) : (
            "-"
          )}
        </div>
      </div>

      <div
        id={`collapse${appointment.appointment_id}`}
        class="collapse hide"
        aria-labelledby={`apt-${appointment.appointment_id}`}
        data-parent="#accordionExample"
      >
        <div class="card-body clearfix">
          <div>{appointment.description}</div>
          <hr />
          <button
            className="btn btn-danger mt-2 float-right"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              cancelAppointment(appointment.appointment_id);
            }}
          >
            Cancel appointment
          </button>
        </div>
      </div>
    </div>
  );
};
