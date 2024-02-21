import React from "react";

const Navigation = (props) => {
  return (
    <div className="navigation">
      <img
        className="vector"
        src={require("../assets/Vector2.png")}
        alt=""
      ></img>

      <button
        className="link1"
        onClick={()=>{props.setModal(true)}}
      ></button>

      <img
        className="link2"
        src={require("../assets/Link2.png")}
        alt=""
      ></img>

      <img
        className="home"
        src={require("../assets/home.png")}
        alt=""
      ></img>

      <img
        className="left-sidebar"
        src={require("../assets/Left Sidebar.png")}
        alt=""
      ></img>
    </div>
  );
};

export default Navigation;
