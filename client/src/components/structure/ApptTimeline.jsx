import React, { Component } from 'react';
import { render } from 'react-dom';
import ApptCard from './ApptCard';
import * as appointmentService from '../../services/appointments';

class ApptTimeline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appts: []
        }
    }

    async componentDidMount() {
        try {
            let appointments = await appointmentService.all();
            this.setState({appts: appointments});
            // let res = await fetch('/api/appointments');
            // let appt = await res.json();
            // let appts = Object.keys(appt).map(apptId => {
            //     return {
            //         id: apptId,
            //         key: apptId,
            //         firstname: appt[apptId].firstname,
            //         lastname: appt[apptId].lastname,
            //         age: appt[apptId].age,
            //         email: appt[apptId].email,
            //         password: appt[apptId].password,
            //         number: appt[apptId].number,
            //         other: appt[apptId].other,
            //         description: appt[apptId].description
            //     }
            // });

            // appts.pop();
            // appts.reverse();
            // this.setState({ appts });


        } catch (e) { }
    }



    render() {
        return (

            <React.Fragment>
                <div className="d-flex flex-wrap align-items-center justify-content-around" >
                    {this.state.appts.map((appt) => {
                        return <ApptCard firstname={appt.firstname}
                        lastname={appt.lastname}
                        age={appt.age}
                        email={appt.email}
                        password={appt.password}
                        number={appt.number}
                        other={appt.other}
                        description={appt.description}
                        id={appt.id}
                        key={appt.key} />
                    })}
                </div>
            </React.Fragment>
        );
    }
}

export default ApptTimeline;