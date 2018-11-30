import React, { Component } from 'react';
import * as appointmentService from '../../services/appointments';
import { render } from 'react-dom';
import { Link } from 'react-router-dom';

class Home extends Component {
   constructor(props) {
       super(props);
    
       this.state = {
           appointments: []
       }
   }

   async componentDidMount() {
       try {
        let users = await appointmentService.all()
        this.setState({ appointments });
        console.log(this.state.appointments);
       } catch (e) {
           console.error(e);
       }
       
   }
  
    render() {
        return (
            <div className = "button-group">
            <h1>Welcome Patients</h1>
            <h5>Innovate Health is a major center for clinical use.
             Our faculty physicians, nursing staff, and support personnel are committed to providing world-class care to every patient.</h5>
            <button type="button" className="btn btn-danger btn-lg">Doctor's Entrance</button>
            <button type="button" className="btn btn-danger btn-lg">Patience's Entrance</button>
    
            </div>
        );
    }
}

export default Home;