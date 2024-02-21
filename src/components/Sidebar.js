import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="content">
        <div className="navigation2">
          <div className="header">
            <img
              className="icon"
              src={require("../assets/L2493.png")}
              alt=""
            ></img>
          </div>

          <div className="navigation3">
            <div className="nav-item-button">
              <img
                className="side-icon"
                src={require("../assets/activity.png")}
                alt=""
              ></img>
            </div>

            <div className="nav-item-button">
              <img
                className="side-icon"
                src={require("../assets/message-chat-square.png")}
                alt=""
              ></img>
            </div>

            <div className="nav-item-button">
              <img
                className="side-icon"
                src={require("../assets/layers-three-01.png")}
                alt=""
              ></img>
            </div>

            <div className="nav-item-button">
              <img
                className="side-icon"
                src={require("../assets/bar-chart-square-02.png")}
                alt=""
              ></img>
            </div>
          </div>
          
        </div>
        <div className="footer">
          <img
            className="avatar"
            src={require("../assets/Avatar.png")}
            alt=""
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
