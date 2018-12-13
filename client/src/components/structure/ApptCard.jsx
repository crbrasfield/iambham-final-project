import React from "react";
import { Link } from "react-router-dom";

export default ({ appointment, cancelAppointment, doctor }) => {
  const date = new Date(appointment.date);

  // console.log("from apptcard", appointment);

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  console.log(month, "asdfasdfasafasddf");

  return (
    <div
      className="card"
      key={appointment.id}
      style={{ width: "100%" }}
    >
      <div
        className="card-header"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
        id={`apt-${appointment.id}`}
      >
        <div className="mb-0" style={{ flex: 1 }}>
          <button
            className="btn btn-link text-info"
            type="button"
            data-toggle="collapse"
            data-target={`#collapse${appointment.id}`}
            aria-expanded="true"
            aria-controls={`#collapse${appointment.id}`}
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
        id={`collapse${appointment.id}`}
        className="collapse hide"
        aria-labelledby={`apt-${appointment.id}`}
        data-parent="#accordionExample"
      >
        <div className="card-body clearfix">
          <div>{appointment.description}</div>
          <hr />

          <button
            className="btn btn-danger mt-2 float-right"
            style={{ marginLeft: "auto" }}
            onClick={() => {
              cancelAppointment(appointment.id);
            }}
          >
            Cancel appointment
          </button>
          <Link
            className="btn btn-info mt-2 float-right"
            style={{ marginLeft: "10px" }}
            to={`appointments/${appointment.id}/edit`}
          >
            Edit appointment
          </Link>
        </div>
      </div>
    </div>
  );
};
