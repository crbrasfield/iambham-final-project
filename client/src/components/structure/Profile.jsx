import React, { Component, Fragment } from 'react';

class UserProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }

    // async componentDidMount() {
    //     try {
    //         let user = fetch('api/');
    //         console.log(user)
    //     } catch (err) {
    //         console.error(err)
    //     }
    // }

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                margin: "10%"
              }}>
            <h1>User: </h1>
            </div>
        )
    }
}

export default UserProfile;