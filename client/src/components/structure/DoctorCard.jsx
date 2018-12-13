import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import * as doctorService from "../../services/doctors";

export default class ListDocs extends Component {
  state = {
    doctors: []
  };

  async componentDidMount() {
    try {
      let doctors = await doctorService.all();

      this.setState({ doctors });
    } catch (err) {
      console.error(err);
    }
  }

  // listDoctors = () => {
  //     this.state.doctors.map(doctor => {
  //         return <li className="list-group-item">{doctor.first_name}</li>
  //     })
  // }

  render() {
    return (
      <div className="container mt-5 mb-5">
        <h1>List of Doctors</h1>
        <ul className="list-group list-group-flush">
          {this.state.doctors.map(doctor => {
            return (
              <Route key={doctor.id}>
                <li className="list-group-item">
                  <Link to={`/doctor/${doctor.id}`}>
                    Dr. {doctor.first_name} {doctor.last_name}
                  </Link>
                </li>
              </Route>
            );
          })}
        </ul>
      </div>
    );
  }
}
