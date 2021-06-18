import React from "react";
import "../App.css";

function Profile(props) {
  return (
    <div
      className="main"
      style={{
        display: "flex",
        justifyContent: "spacAround",
        padding: "125px"
      }}
    >
      <div
        style={{
          display: "block",
          marginTop: "100px",
          fontSize: "21px",
          fontFamily: "ubuntu, sans-serif",
          letterSpacing: "3px",
          lineHeight: "40px"
        }}
      >
        <div className="flex">
          {" "}
          <img src={props.img} alt="" />{" "}
        </div>
        <br />
        <br />
        <div id="about-me">
          {" "}
          <h1>
            Hello, my name is
            <span className="bio"> {props.name} </span>,<br />
            and I make horrible websites.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Profile;
