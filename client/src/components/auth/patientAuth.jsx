import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const PatientAuth = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-info btn-lg" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-info btn-lg" to="/patientlogin">Patients' Entrance</Link>;
    }
};

export default PatientAuth;