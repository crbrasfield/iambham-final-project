import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-brand">DR Similator</Link>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outliine-success my-2 my-sm-0">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NavBar;