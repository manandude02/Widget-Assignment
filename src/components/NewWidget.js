import React from "react";
import TableExample from "./TableExample";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const columns = [
  {
    Header: "ID",
    accessor: "id",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Age",
    accessor: "age",
  },
];

const employeeData = localStorage.getItem("data");
const data = JSON.parse(employeeData);

const graphData = localStorage.getItem("graph");
const data2 = JSON.parse(graphData);

const summaryData = localStorage.getItem("summary");
const data3 = JSON.parse(summaryData);

const NewWidget = (props) => {
  return (
    <div className="new-widget">
      {props.widgetType===0 && <TableExample columns={columns} data={data} />}

      {props.widgetType===1 && <LineChart width={300} height={200} data={data2}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>}

    {props.widgetType===2 && <div>{data3.text}</div>}
    </div>
  );
};

export default NewWidget;
