import React from 'react';
import { Link } from 'react-router-dom';
import { isLoggedIn } from '../../services/user';

const DoctorAuth = (props) => {
    if (isLoggedIn()) {
        return <Link className="btn btn-info btn-lg" to="/logout">Logout</Link>;
    } else {
        return <Link className="btn btn-info btn-lg" to="/doctorlogin">Doctors' Entrance</Link>;
    }
};

export default DoctorAuth;