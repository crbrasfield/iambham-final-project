import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
<div style={{marginTop: '5%', width: '100%', height: '11%', backgroundColor: '#343A40', marginLeft: '0px'}}>

  <div className="row" style={{marginTop: '5%', width: '100%', height: '11%', backgroundColor: '#343A40', marginLeft: '0px'}}>
    <div className="col-md-4">
    <br/><br/>
      <h5 style={{color: '#16A2B7', display: 'flex', justifyContent: 'center' }} >INNOVATE HEALTH</h5>
          <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Established to help connect people</h6>
          <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>to physicians, Innovate Health is</h6>
          <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>dedicated to providing quality</h6>
          <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>compassionate care for our</h6>
          <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>patients and their families</h6>
    </div>
    <div className="col-md-2">
    <br/><br/>
      <h5 style={{color: '#16A2B7', display: 'flex', justifyContent: 'center' }} >EXPLORE</h5>
    
        <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Locations</h6>
        <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Services</h6>
        <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Patients</h6>
        <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Doctors</h6>
        <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Nurses</h6>

      

    </div>
    <div className="col-md-3">
    <br/><br/>
      <h5 style={{color: '#16A2B7', display: 'flex', justifyContent: 'center' }} >CONTACT</h5>
      <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>apply@innovatebham.com</h6>
      <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>(555) 555 - 5555</h6>
      <h6 style={{color: 'white', display: 'flex', justifyContent: 'center'}}>Birmingham, AL</h6>
    </div>
    <div className="col-md-3">
    <br/><br/>
          <h5 style={{color: '#16A2B7', display: 'flex', justifyContent: 'center'}}>FOLLOW US</h5>
          <img width="77%" height="77%" style={{marginLeft: '11%'}} src="http://patti-rocks.com/site/wp-content/uploads/2015/08/socialmedia.png" alt="social media icons"/>
    </div>

</div>
<br/><br/>
</div>
        );
    }
} 
export default Footer ;

// display: 'flex', justifyContent: 'center', 