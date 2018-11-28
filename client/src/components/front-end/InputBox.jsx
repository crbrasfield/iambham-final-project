import React, { Component } from 'react';
import { render } from 'react-dom';

class InputBox extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (

  <div style={formStyle}>
          <div className = "form-group">
            <label for="person">Name</label>
            <input type="text" className = "form-control" aria-describedby="textHelp" placeholder="Your Name" />
      </div>
      <div className = "form-group">
            <label for="age">Age</label>
            <input type="text" className = "form-control" aria-describedby="textHelp" placeholder="Age" />
      </div>
      <div className = "form-group">
            <label for="email">Email address</label>
            <input type="email" className = "form-control" aria-describedby="textHelp" placeholder="Enter email" />
      </div>
      <div className="dropdown">
  <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Gender
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a className="dropdown-item" href="#">Female</a>
    <a className="dropdown-item" href="#">Male</a>
  </div>
  </div>
      <div className = "form-group">
            <label for="number">Phone</label>
            <input type="text" className = "form-control" aria-describedby="textHelp" placeholder="Enter email" />
     </div>
     <div className = "form-group">
            <label for="symptom">Description</label>
            <input type="text" className = "form-control" aria-describedby="textHelp" placeholder="Enter email" />
     </div>
            <div className = "form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className = "form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
          <div>
                <button type="submit" className = "btn btn-primary">Submit</button>
    </div>
    </div>

            );
                }
            }
        
export default InputBox;

let formStyle = {
  border: '4px solid black',
  textalign: 'center',
  width: '50em',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0 0 0 400px',
    }

  