import React from 'react';

const About = () => {
    return (
        <React.Fragment>

            <br /><br /><br />

            <h2 style={{}}>Innovate Health</h2>

            <div style={{backgroundColor: '#C49BED', height: '55%'}}>
                <div style={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center'}}>
                    <img src="https://media.discordapp.net/attachments/514855772010577921/519585760303644682/doc.gif?width=400&height=300" alt="doctor purple"/>

                    <h1 style={{ color: 'white', marginLeft: '3%'}}>
                    Established to help connect people to physicians, Innovate Health is dedicated to providing quality compassionate care for our patients and their families.
                    </h1>

                </div>
            </div>

            <div style={{backgroundColor: '#3F90CE', height: '55%'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>

                    <h1 style={{ color: 'white', marginLeft: '5%', border: '2px' }}>
                       Doctors here at Innovate Health take extra care ensure that our patients are not only recieving the best treatment, but also experience the care and compassion we have for them.
                    </h1>
                    
                    <img src="https://cdn.dribbble.com/users/514480/screenshots/2091133/doctor.gif" alt="doctor checkup" />
                    
                </div>
            </div>

            <div style={{backgroundColor: '#EE6977', height: '66%'}}>
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                    <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/24b00827752581.5636a3c872676.gif" alt="nurse"/>

                    <h1 style={{ color: 'white', marginLeft: '5%', border: '2px' }}>
                        Our Nurses here at Innovate Health always make comfort and warmth a top priority. We care about building meaningful relationships with all of our patients.
                    </h1>

                </div>
            </div>
        </React.Fragment>
    )
}

export default About;

//  Today Innovate Health is an epicenter of leading treatment with numerous physicians in several specialties.