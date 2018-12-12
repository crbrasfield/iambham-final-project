import React, { Component, Fragment } from 'react';
import * as userService from '../../services/user';
import * as doctorService from '../../services/doctors';
import { Redirect } from 'react-router-dom';
import IndeterminateProgress from '../utilities/indeterminateProgress';

class DoctorSignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newDoctor: {},

            first_name: '',
            last_name: '',
            number: '',
            email: '',
            password: '',
            age: ''


        }

        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleAge = this.handleAge.bind(this);

    }

    handleFirst(e) {
        // console.log(e.target.value);
        this.setState({ first_name: e.target.value });
    }

    handleLast(e) {
        // console.log(e.target.value);
        this.setState({ last_name: e.target.value });
    }


    handleEmail(e) {
        // console.log(e.target.value);
        this.setState({ email: e.target.value });
    }

    handlePassword(e) {
        // console.log(e.target.value);
        this.setState({ password: e.target.value });
    }

    handleNumber(e) {
        // console.log(e.target.value);
        this.setState({ number: e.target.value });
    }

    handleAge(e) {
        this.setState({ age: e.target.value })
    }
    async handleCreateDoctor() {
        try {
            let newDoctor = doctorService.insert(this.state)
            // let newDoctor = await fetch('api/new/createdoctor', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify(this.state)
            // });
            // this.setState({ newDoctor });
            this.props.history.replace('/');
        } catch (err) {
            console.error(err);
        }
    }

    render() {
        return (
            <React.Fragment>
            <button type="button" className="btn btn-md btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Register</button>

        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div className="modal-dialog" role="document">
<div className="modal-content">
  <div style={{color: '#343A40', zIndex: '2', position: 'relative'}} className="modal-header">
    <h5 style={{color: '#343A40', position: "absolute", marginleft: '14%'}} className="modal-title" id="exampleModalLabel">Register Here To Move Forward!</h5>
    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
      <span aria-hidden="true">&times;</span>
    </button>
  </div>
  <br/>
  <img style={{position: 'absolute', marginTop: '1%', marginLeft: '14%'}} src="https://cdn.dribbble.com/users/1047147/screenshots/3617172/all-walkin_-dribbble_1.gif" alt="moving forward" width="66%" height="66%" /> 
  <br/><br/><br/><br/>
  <div style={{color: '#16A2B7', display: 'flex', justifyContent: 'center', position: 'relative'}} className="modal-body">

  <form style={{ display: 'flex', justifyItems: 'center', marginTop: '3%', zIndex: '2' }}>
            <div>
                <div className="form-row" style={{display: 'flex', justifyContent: 'center'}}>

                    <div className="form-group col-md-4">
                        <label for="person"></label>
                        <input type="text" className="form-control" value={this.state.first_name} onChange={this.handleFirst} aria-describedby="textHelp" placeholder="Enter First Name"
                            // onChange={e => this.setState({ first_name: e.target.value })}
                             />
                    </div>

                    <div className="form-group col-md-4">
                        <label for="person"></label>
                        <input type="text" className="form-control" value={this.state.last_name} onChange={this.handleLast} aria-describedby="textHelp" placeholder="Enter Last Name" 
                        // onChange={e => this.setState({ last_name: e.target.value })} 
                        />
                    </div>
                    
                    {/* <div className="form-group col-md-4">
                        <label for="person"></label>
                        <input type="text" className="form-control" value={this.state.age} onChange={this.handleAge} aria-describedby="textHelp" placeholder="Enter Age" 
                        // onChange={e => this.setState({ last_name: e.target.value })} 
                        />
                    </div> */}

                    <div className="form-group col-md-4">
                        <label for="number"></label>
                        <input type="number" className="form-control" value={this.state.number} onChange={this.handleNumber} aria-describedby="textHelp" maxLength="10" placeholder="Phone Number"
                        // onChange={e => this.setState({ number: e.target.value })}
                         />
                    </div>
                    
                </div>


                <div className="form-row" style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="form-group col-md-5">
                        <label for="email"></label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.handleEmail} aria-describedby="textHelp" placeholder="Enter Your E-mail" 
                        //onChange={e => this.setState({ email: e.target.value })} 
                        />
                    </div>
                    <div className="form-group col-md-5">
                        <label for="exampleInputPassword1"></label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.handlePassword} id="exampleInputPassword1" placeholder="Enter Your Password" 
                        //onChange={e => this.setState({ password: e.target.value })} 
                        />
                    </div>
                    
                </div>
                  
                  <div>
                      
                  </div>

               

            </div>
        </form>  

  </div>
  <div className="modal-footer" style={{display: 'flex', justifyContent: 'space-between'}}>
    <button type="button" className="btn btn-outline-danger" data-dismiss="modal">Cancel</button>
    <button type="button" className="btn btn-outline-dark" onClick={(e) => {
                            // e.preventDefault();
                            this.handleCreateDoctor()}}>Register</button>
  </div>
</div>
</div>
</div>
        </React.Fragment>
        )
    }
}

export default DoctorSignUp;