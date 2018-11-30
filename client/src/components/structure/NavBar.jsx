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
<<<<<<< HEAD:client/src/components/structure/NavBar.jsx
                    <Link to="/" className="navbar-brand">Innovate Health</Link>
=======
                    <Link to="/" className="navbar-brand">NVT Health</Link>
>>>>>>> 04b4b81ea00cec82b930f144f64d57e38bf62f04:client/src/components/front-end/NavBar.jsx
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