import React from "react";
import { Link } from "react-router-dom";

export default ({ appointment, cancelAppointment, doctor }) => {
  const date = new Date(appointment.date);

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  console.log(doctor);

  return (
    <div
      className="card"
      key={appointment.appointment_id}
      style={{ width: "100%" }}
    >
      <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        id={`apt-${appointment.appointment_id}`}
      >
        <div className="mb-0" style={{ flex: 1 }}>
          <button
            className="btn btn-link text-info"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${appointment.appointment_id}`}
            aria-expanded="true"
            aria-controls={`collapse${appointment.appointment_id}`}
          >
            {month}/{day}/{year}
          </button>
        </div>
        <div className="mb-0 text-secondary" style={{ flex: 1 }}>
          {appointment.description.substring(0, 10)}...
        </div>
        <div className="mb-0 text-secondary" style={{ flex: 1 }}>
          {appointment.doctorid ? (
            <Link to={`/doctor/${appointment.doctorid}`}>
              Dr. {doctor.last_name}
            </Link>
          ) : (
            "-"
          )}
        </div>
      </div>

      <div
        id={`collapse${appointment.appointment_id}`}
        className="collapse hide"
        aria-labelledby={`apt-${appointment.appointment_id}`}
        data-parent="#accordionExample"
      >
        <div className="card-body clearfix">
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
        <div className="card-body clearfix">
          <div>{appointment.description}</div>
          <hr />
          <Link
            className="btn btn-danger mt-2 float-right"
            style={{ marginLeft: "auto" }}
            to={`appointments/${appointment.appointment_id}/edit`}
          >
            Edit appointment
          </Link>  
        </div>
      </div>
    </div>
  );
};
