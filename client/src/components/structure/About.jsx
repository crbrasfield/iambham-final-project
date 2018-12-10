import React from "react";
import docGif from "./images/doc2.gif";

const About = () => {
  return (
    <div style={{ width: "100vw", padding: "0%" }}>
      <div style={{ backgroundColor: "#C49BED", maxHeight: "88%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <img src={docGif} alt="doctor purple" />

          <h1
            style={{
              color: "white",
              marginRight: "3%",
              marginLeft: "3%",
              marginTop: "2%",
              marginBottom: "2%"
            }}
          >
            Established to help connect people to physicians, Innovate Health is
            dedicated to providing quality compassionate care for our patients
            and their families.
          </h1>
        </div>
      </div>

      <div style={{ backgroundColor: "#3F90CE", maxHeight: "88%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center"
          }}
        >
          <h1
            style={{
              color: "white",
              marginRight: "3%",
              marginLeft: "5%",
              marginTop: "2%",
              marginBottom: "2%",
              border: "2px"
            }}
          >
            Doctors here at Innovate Health take extra care ensure that our
            patients are not only recieving the best treatment, but also
            experience the care and compassion we have for them.
          </h1>

          <img
            src="https://cdn.dribbble.com/users/514480/screenshots/2091133/doctor.gif"
            alt="doctor checkup"
          />
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#EE6977",
          display: "flex",
          alignItems: "center"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center"
          }}
        >
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/24b00827752581.5636a3c872676.gif"
            alt="nurse"
            style={{ height: "424px" }}
          />

          <h1 style={{ color: "white", marginLeft: "5%", border: "2px" }}>
            Our Nurses here at Innovate Health always make comfort and warmth a
            top priority. We care about building meaningful relationships with
            all of our patients.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default About;
