import "./App.css";
import Dashboard from "./components/Dashboard";
import data from "./data/data.json";
import summary from "./data/summary.json";
import graph from "./data/graph.json";

function App() {
  const jsonString = JSON.stringify(data);
  localStorage.setItem("data", jsonString);

  const summaryJson = JSON.stringify(summary);
  localStorage.setItem("summary", summaryJson);

  const graphJson = JSON.stringify(graph);
  localStorage.setItem("graph", graphJson);

  return <Dashboard />;
}

export default App;
