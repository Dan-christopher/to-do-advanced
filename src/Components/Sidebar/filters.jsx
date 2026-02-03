import React, { useState } from "react";
import Popup from "./popup";

const Filters = ({ onFilterChange }) => {
  const [addTask, setAddTask] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Today tasks");

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div>
      <div className="filters">
        <h2>Daily Tasks</h2>
        <ul>
          <li
            onClick={() => handleFilterClick("Personal")}
            className={activeFilter === "Personal" ? "active" : ""}
          >
            Personal
          </li>
          <li
            onClick={() => handleFilterClick("work")}
            className={activeFilter === "work" ? "active" : ""}
          >
            Work
          </li>
          <li
            onClick={() => handleFilterClick("Freelance")}
            className={activeFilter === "Freelance" ? "active" : ""}
          >
            Freelance
          </li>
          <li
            onClick={() => handleFilterClick("Today tasks")}
            className={activeFilter === "Today tasks" ? "active" : ""}
          >
            All Tasks
          </li>
        </ul>
      </div>
      <div className="settings">
        <h2>Settings</h2>
      </div>
      {addTask && <Popup onClose={() => setAddTask(false)} />}
    </div>
  );
};
export default Filters;
