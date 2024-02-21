import React from "react";
import NewWidget from "./NewWidget";

const Widgets = (props) => {
  const { widgetCount } = props;

  let allWidgets = [];

  widgetCount.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      allWidgets.push(<NewWidget key={`${index}-${i}`} widgetType={index} />);
    }
  });

  return <div className="widgets">{allWidgets}</div>;
};

export default Widgets;
