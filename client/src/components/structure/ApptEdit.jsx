import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import * as appointmentService from '../../services/appointments';
import { currentUser } from '../../services/user';
import { throws } from 'assert';

export default class ApptEdit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {},
            appointment: {},
            description: ''
        }
    }

    async componentDidMount() {
        try {
            let id = this.props.match.params.id;
            let user = await currentUser();
            let appointment = await appointmentService.one(id);

            this.setState({ user, appointment, description: appointment.description });
        } catch (err) {
            console.error(err);
        }
    }

    async handleEdit() {
        try {
          let id = this.props.match.params.id;
          let editDescription = await appointmentService.update(id, this.state);  

          this.props.history.replace(`/appointments`);
        } catch (err) {
            console.error(err)
        }
    }

    render() {
        return (
            <div>
                <form className="form-row">
                    <div className="form-group col-md-6">
                        <label for="description">Description</label>
                        <input 
                        type="text" 
                        className="form-control" 
                        placeholder={this.state.appointment.description} 
                        onChange={e => this.setState({ description: e.target.value })}
                        />
                    </div>
                    <button type="submit" className="btn btn-warning" 
                        onClick={e => {
                            e.preventDefault();
                            this.handleEdit(e);
                        }}
                    >
                        Edit appointment.
                    </button>
                </form>
            </div>
        )
    }
}
