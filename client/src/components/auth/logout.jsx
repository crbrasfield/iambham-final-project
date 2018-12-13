import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class Logout extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        userService.logout();
        location.replace('/')
    }

    render() {
        return null;
    }
}

export default Logout;