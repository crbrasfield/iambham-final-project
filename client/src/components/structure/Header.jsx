import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <React.Fragment>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img
            style={{ height: "100px", width: "100px", marginTop: "3%" }}
            src="https://www.parkingpanda.com/cdn/azure/images/seo/logos/grady_cross.png"
            alt="cross"
          />
          <div>
            <h1 style={{}} className="text-center w-75 m-auto pt-5">
              INNOVATE HEALTH
            </h1>
          </div>
        </div>{" "}
        <br />
      </React.Fragment>
    );
  }
}
export default Header;
