import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const DoctorAuth2 = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-light btn-sm" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-light btn-sm" to="/doctorlogin">Doctors ></Link>;
    }
};

export default DoctorAuth2;