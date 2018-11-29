import React, { Component } from 'react';
import { render } from 'react-dom';

class Appointments extends Component {

    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            password: '',
            number: '',
            other:'',
            description: ''
        }
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleNumber = this.handleNumber.bind(this);
        this.handleOther = this.handleOther.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirst(e) {
        // console.log(e.target.value);
        this.setState({firstname: e.target.value});
    }

    handleLast(e) {
        // console.log(e.target.value);
        this.setState({lastname: e.target.value});
    }

    handleAge(e) {
        // console.log(e.target.value);
        this.setState({age: e.target.value});
    }

    handleEmail(e) {
        // console.log(e.target.value);
        this.setState({email: e.target.value});
    }

    handlePassword(e) {
        // console.log(e.target.value);
        this.setState({password: e.target.value});
    }

    handleNumber(e) {
        // console.log(e.target.value);
        this.setState({number: e.target.value});
    }

    handleOther(e) {
        // console.log(e.target.value);
        this.setState({other: e.target.value});
    }

    handleDescription(e) {
        // console.log(e.target.value);
        this.setState({description: e.target.value});
    }

   async handleSubmit(e) {
        try {
            let res = await fetch('api/appointments', {
                method: 'POST',
                headers: {
                    "Content-Type": "applications/json"
                },
                body: JSON.stringify(this.state)
            });
            this.props.history.replace('/');
        }       catch (err) {}
    }

    render() {
        return (

            <form action="/appointments" method="GET">
                <div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="person"></label>
                            <input type="text" className="form-control" aria-describedby="textHelp" placeholder="First Name" 
                            onChange = {e => this.setState({firstname: e.target.value})} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="person"></label>
                            <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Last Name" onChange = {e => this.setState({lastname: e.target.value})} />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="age"></label>
                            <input type="number" className="form-control" aria-describedby="textHelp" maxLength="2" placeholder="Age" onChange = {e => this.setState({age: e.target.value})} />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="email"></label>
                            <input type="email" className="form-control" aria-describedby="textHelp" placeholder="Email" onChange = {e => this.setState({email: e.target.value})} />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="exampleInputPassword1"></label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange = {e => this.setState({password: e.target.value})} />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="number"></label>
                            <input type="number" className="form-control" aria-describedby="textHelp" maxLength="10" placeholder="Phone Number" onChange = {e => this.setState({number: e.target.value})} />
                        </div>
                    </div>


                    <div className="form-row">
                    <div className="col-md-2">
                        <select class="custom-select custom-select-md mb-3">
  <option selected>Gender</option>
  <option value="male">Male</option>
  <option value="female">Female</option>
</select>
                    </div>

                    <div className="col-md-5">
                          <select class="custom-select" size="2">
  <option selected>Insurance</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
  <option onChange = {e => this.setState({other: e.target.value})} value="other">Other</option>
</select>        
                    </div>

                    <div className="form-group col-md-4" style={{display: 'flex', alignItems: 'flex-start'}}>
                            <label for="other"></label>
                            <input type="text" className="form-control" aria-describedby="textHelp" placeholder="(if other)" onChange = {e => this.setState({other: e.target.value})} />
                        </div>
               
                        </div>

 


                    <div className="form-row">
                        <div className="form-group col-md-9">
                            <label for="symptom">What can we help you with?</label>
                            <input type="text" className="form-control" aria-describedby="textHelp" placeholder="Description" onChange = {e => this.setState({description: e.target.value})} />
                        </div>

                        <div id="bookIt" className="col-md-3" style={{display: 'flex', alignItems: 'center', marginTop: '1.8%'}}>
                            <button type="submit" className="btn btn-primary">Schedule</button>
                        </div>
                    </div>

                </div>
            </form>
        )
    }
}

export default Appointments;