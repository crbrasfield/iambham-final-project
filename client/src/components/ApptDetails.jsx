import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ApptTimeline from './ApptTimeline';

class ApptDetails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            age: '',
            email: '',
            password: '',
            number: '',
            other: '',
            description: ''
        }
    }

    async componentDidMount() {
        try {
            let res = await fetch(`/api/appointments/${this.props.match.params.id}`);
            let appt = await res.json();
            let firstname = appt.firstname;
            let lastname = appt.lastname;
            let age = appt.age;
            let email = appt.email;
            let password = appt.password;
            let number = appt.number;
            let other = appt.other;
            let description = appt.description;
            this.setState({ firstname: firstname, lastname: lastname, age: age, email: email, password: password, number: number, other: other, description: description });

        }
        catch (e) { }
    }

    async delete(id) {
        try {
            let res = await fetch(`/api/appointments/${id}`, {
                method: 'DELETE'
            });
            console.log(res);
            this.props.history.replace('/');
    }
    catch (err) {
        console.log(`You've got an error!..: ${err}`);
    }
}
render() {
    return(
        <React.Fragment>

          
          <ApptTimeline appts={this.state.appts} />


          {/* <Input 
                    handleFirst={this.handleFirst}
                    handleLast={this.handleLast}
                    handleAge={this.handleAge}
                    handleEmail={this.handleEmail}
                    handlePassword={this.handlePassword}
                    handleNumber={this.handleNumber}
                    handleOther={this.handleOther}
                    handleDescription={this.handleDescription}
                    handleSubmit={this.handleSubmit}

                    firstname={this.state.firstname}
                    lastname={this.state.lastname}
                    age={this.state.age}
                    email={this.state.email}
                    password={this.state.password}
                    number={this.state.number}
                    other={this.state.other}
                    description={this.state.description}
                    id={this.state.id} />
           */}


                        <div id="DeleteIt" className="" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '0px' }}>
                                <button type="submit" style={{marginRight: '1em'}} className="btn btn-outline-danger" onClick={() => this.delete(this.props.match.params.id)} >Delete</button>
                                <Link className="btn btn-outline-success" to={`/appointments/${this.props.match.params.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
               
        </React.Fragment>
    )
}
}
export default ApptDetails ;