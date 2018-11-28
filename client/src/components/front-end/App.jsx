import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import InputBox from './InputBox';
import NavBar from './NavBar';

class Navigation extends Component {

    render() {
        return (
            
                <Router>
                    <Fragment>
                    
                        <NavBar /> 
                        <Link to="/">Home</Link>
                        <Switch>
                            <Route exact path="/" component={InputBox} />
                        </Switch>
              
            </Fragment>
  </Router>
        )
    }
}

export default Navigation;