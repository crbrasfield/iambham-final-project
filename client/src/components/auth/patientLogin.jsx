import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class patientLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirectToReferrer: false,
            email: '',
            password: '',
            feedbackMessage: '',
            checkingLogin: true
        };
    }

    componentDidMount() {
        userService.checkLogin()
        .then((loggedIn) => {
            if (loggedIn) {
                this.setState({ redirectToReferrer: true, checkingLogin: false });
            } else {
                this.setState({ checkingLogin: false });
            }
        });
    }

    login(e) {
        e.preventDefault();
        userService.login(this.state.email, this.state.password)
        .then(() => {
            this.setState({ redirectToReferrer: true });
        }).catch((err) => {
            if (err.message) {
                this.setState({ feedbackMessage: err.message });
            }
        });
    }

    handleEmailChange(value) {
        this.setState({ email: value });
    }

    handlePasswordChange(value) {
        this.setState({ password: value });
    }

    render() {
       const { from } = this.props.location.state || { from: { pathname: '/' } };
       const { redirectToReferrer, checkingLogin } = this.state;

       if (checkingLogin) {
           return <IndeterminateProgress message="Checking Login Status..." />;
       }
       if (redirectToReferrer) {
           return (
               <Redirect to={from} />
           );
       }

       return ( 
        <div style={{ position: 'relative', backgroundColor: '#F47D21', display: 'flex', justifyContent: 'center' }}>
                {/* <div className="alert alert-warning" style={{ position: 'absolute', display: 'flex', justifyContent: 'center', marginTop: '5.5%' }} role="alert">
                    You must be logged in to view this page.
           </div> */}
                <img width="88%" height="77%" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e20d3b56093929.599fd7b26b7e1.gif" alt="doctor login img" style={{clip: 'rect(0px 0px 50px 0px)' }}  />
                

                <div style={{ display: 'flex', justifyContent: 'center'}}>

                    <form onSubmit={e => this.login(e)}>
                        <div className="form-row">
                            <div style={{ position: 'absolute', left: '7%', bottom: '0%', zIndex: '2' }} className="form-group col-md-4">
                                <input placeholder="Email" id="email" className="form-control" type="email" onChange={e => this.handleEmailChange(e.target.value)} required />
                            </div>
                            <div style={{ position: 'absolute', left: '47%', bottom: '0%', zIndex: '2' }} className="form-group col-md-4">
                                <input placeholder="Password" id="password" className="form-control" type="password" onChange={e => this.handlePasswordChange(e.target.value)} required />
                            </div>
                            <div style={{ position: 'absolute', right: '7%', bottom: '0%',zIndex: '2' }}>
                                <input type="submit" value="Login" className="btn btn-primary" />
                                {this.state.feedbackMessage ? <p>
                                    {this.state.feedbackMessage}
                                </p> : null}
                            </div>
                        </div>

                    </form>
                </div>
            </div>
         );
    }
}

const alertStyle = {
    padding: "20px",
    marginTop: "7%"
};

const addBlogFormStyle = {
    border: "10px solid darkcyan",
    padding: "50px"
};

export default patientLogin;