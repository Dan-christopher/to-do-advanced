import { useState } from "react";
import Sidebar from "./Components/Sidebar/sidebar";
import MainPanel from "./Components/MainPanel/mainpanel";
import "./App.css";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today tasks");

  return (
    <>
      <Sidebar onFilterChange={setSelectedFilter} />
      <MainPanel selectedFilter={selectedFilter} />
    </>
  );
};
export default App;
