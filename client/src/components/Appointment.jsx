import React from 'react';
import { Link } from 'react-router-dom';



export default (props) => {

    
    return (


        <div className="card" style={{width: "18em"}}>
  <div className="card-body">
    <h5 className="card-title">Appointment Information</h5>
    <p className="card-text">{props.firstname} {props.lastname} Age:{props.age}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">Email:{props.email}</li>
    <li className="list-group-item">Phone:{props.number}</li>
    <li className="list-group-item">Gender:{props.gender}</li>
    <li className="list-group-item">Other:{props.other}</li>
  </ul>
  <div className="card-body">
  <p className="card-text">{props.description}</p>
    <Link to="/appointments/:id/edit" id="view" className="btn-outline-primary">Update</Link>
  </div>
</div>


    )
}