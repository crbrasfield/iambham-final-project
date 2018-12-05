import React from 'react';

const Input = props => {
    return (
        <React.Fragment>
            <br/><br/>
            <form style={{ display: 'flex', justifyItems: 'center', marginTop: '3%' }}>
                <div>

                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="person"></label>
                            <input type="text" className="form-control" text={props.firstname} onChange={props.handleFirst} aria-describedby="textHelp" placeholder="First Name"
                                // onChange={e => this.setState({ firstname: e.target.value })}
                                 />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="person"></label>
                            <input type="text" className="form-control" text={props.lastname} onChange={props.handleLast} aria-describedby="textHelp" placeholder="Last Name" 
                            // onChange={e => this.setState({ lastname: e.target.value })} 
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label for="age"></label>
                            <input type="number" className="form-control" text={props.age} onChange={props.handleAge} aria-describedby="textHelp" maxLength="2" placeholder="Age"
                            // onChange={e => this.setState({ age: e.target.value })} 
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-5">
                            <label for="email"></label>
                            <input type="email" className="form-control" text={props.email} onChange={props.handleEmail} aria-describedby="textHelp" placeholder="Email" 
                            //onChange={e => this.setState({ email: e.target.value })} 
                            />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="exampleInputPassword1"></label>
                            <input type="password" className="form-control" text={props.password} onChange={props.handlePassword} id="exampleInputPassword1" placeholder="Password" 
                            //onChange={e => this.setState({ password: e.target.value })} 
                            />
                        </div>
                        <div className="form-group col-md-3">
                            <label for="number"></label>
                            <input type="number" className="form-control" text={props.number} onChange={props.handleNumber} aria-describedby="textHelp" maxLength="10" placeholder="Phone Number"
                            // onChange={e => this.setState({ number: e.target.value })}
                             />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col-md-3">
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
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="form-group col-md-4" style={{ display: 'flex', alignItems: 'flex-start' }}>
                            <label for="other"></label>
                            <input type="text" className="form-control" text={props.other} onChange={props.handleOther}aria-describedby="textHelp" placeholder="(if other)" 
                            //onChange={e => this.setState({ other: e.target.value })} 
                            />
                        </div>

                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-10">
                            <label for="symptom">What can we help you with?</label>
                            <input type="text" className="form-control" text={props.description} onChange={props.handleDescripion} aria-describedby="textHelp" placeholder="Description"
                            // onChange={e => this.setState({ description: e.target.value })}
                             />
                        </div>

                        <div id="bookIt" className="col-md-2" style={{ display: 'flex', alignItems: 'center', marginTop: '2.5%' }}>
                            <button type="submit" className="btn btn-outline-primary" onClick={props.handleSubmit} >Schedule</button>
                        </div>
                    </div>

                </div>
            </form>  
        </React.Fragment>
    )
}

export default Input ;