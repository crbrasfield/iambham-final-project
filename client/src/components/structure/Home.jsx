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
            let appointments = await appointmentService.all()
            this.setState({ appointments });
            console.log(this.state.appointments);
        } catch (e) {
            console.error(e);
        }

    }

    render() {
        return (

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="button-group">
                    <div className="cont" style={{position: 'relative'}}>
                        <h5 style={{position: 'absolute', zIndex: '2'}}>Innovate Health is a major center for clinical use.
             Our faculty physicians, nursing staff, and support personnel are committed to providing world-class care to every patient.</h5>

                        <div className="" style={{ display: 'flex', justifyContent: 'center', position: 'relative', marginTop: '11%'}}>
<button style={{ position: 'absolute', right: '5.5%', top: '83%', zIndex: '2' }} type="button" className="btn btn-danger btn-lg">Doctor's Entrance</button>
                                <button style={{ position: 'absolute', left: '5%', top: '83%', zIndex: '2' }} type="button" className="btn btn-danger btn-lg">Patience's Entrance</button>
                            <img src="http://landing.sanitasweb.es/globalcare/welcomecenter/wp-content/uploads/2016/02/hospital.gif" alt="hospital" style={{ width: '100%' }}/>
                            

                        </div>

                    </div>


                </div>
            </div>

        );
    }
}

export default Home;