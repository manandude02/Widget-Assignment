import React, { useState } from "react";
import Navigation from "./Navigation";
import Widgets from "./Widgets";
import Sidebar from "./Sidebar";
import Modal from "./Modal";

const Dashboard = () => {
  const [modal, setModal] = useState(false);
  const [widgetCount, setWidgetCount] = useState([0,0,0]);

  return (
    <div className="dashboard">
      <Navigation setModal={setModal} />
      <Widgets widgetCount={widgetCount} />
      <Sidebar />
      {modal ? (
        <Modal
          setModal={setModal}
          setWidgetCount={setWidgetCount}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Dashboard;
