import React, { Component } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';
        

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="navbar navbar-light bg-light">
                    <Link to="/" className="navbar-brand">Innovate Health</Link>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder=' " I am looking for... " ' aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default NavBar;