import React, { useState } from "react";

const Modal = (props) => {
  const [activeContainer, setActiveContainer] = useState(null);
  const [selected, setSelected] = useState(-1);

  const containerStyles = {
    container1: "1px solid #E4E4E7",
    container2: "1px solid #E4E4E7",
    container3: "1px solid #E4E4E7",
  };

  const handleClick = (containerId) => {
    setActiveContainer(containerId);
  };

  if (activeContainer) {
    containerStyles[activeContainer] = "1.5px solid #5E5ADB";
  }

  return (
    <div className="modal">
      <div className="playground"></div>
      <div className="components">Components</div>

      <div
        className="container1"
        onClick={() => {
          handleClick("container1");
          setSelected(0);
        }}
        style={{ border: containerStyles.container1 }}
      >
        <div className="container1-1">
          <div className="summary">Data</div>
          <div className="description">Random Description</div>
        </div>
      </div>

      <div
        className="container2"
        onClick={() => {
          handleClick("container2");
          setSelected(1);
        }}
        style={{ border: containerStyles.container2 }}
      >
        <div className="container1-1">
          <div className="summary">Graph</div>
          <div className="description">Random Description</div>
        </div>
      </div>

      <div
        className="container3"
        onClick={() => {
          handleClick("container3");
          setSelected(2);
        }}
        style={{ border: containerStyles.container3 }}
      >
        <div className="container1-1">
          <div className="summary">Summary</div>
          <div className="description">Random Description</div>
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={() => {
            if (selected !== -1) {
              props.setWidgetCount((prev) => {
                const updatedPrev = [...prev];
                updatedPrev[selected]++;
                return updatedPrev;
              });
            }
            props.setModal(false);
          }}
          className="save-button"
        ></button>

        <button
          onClick={() => {
            props.setModal(false);
          }}
          className="cancel-button"
        ></button>
      </div>
    </div>
  );
};

export default Modal;
