import React from "react";
import { Link } from "react-router-dom";

export default ({ appointment }) => {
  return (
    <div key={appointment.id} className="card" style={{ width: "18em" }}>
      <div className="card-body">
        <h5 className="card-title">Appointment Information</h5>
        <p className="card-text">
          {appointment.firstname} {appointment.lastname} Age:{appointment.age}
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Email:{appointment.email}</li>
        <li className="list-group-item">Phone:{appointment.number}</li>
        <li className="list-group-item">Gender:{appointment.gender}</li>
        <li className="list-group-item">Other:{appointment.other}</li>
      </ul>
      <div className="card-body">
        <p className="card-text">{appointment.description}</p>
        <Link
          to="/appointments/:id/edit"
          id="view"
          className="btn-outline-primary"
        >
          Update
        </Link>
      </div>
    </div>
  );
};
