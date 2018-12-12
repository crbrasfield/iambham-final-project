import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const PatientAuth2 = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-light btn-sm" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-light btn-sm" to="/patientlogin">Patients ></Link>;
    }
};

export default PatientAuth2;