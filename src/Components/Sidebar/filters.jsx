import React, { useState } from "react";
import Popup from "./popup";

const Filters = () => {
  const [addTask, setAddTask] = useState(false);
  return (
    <div>
      <div className="filters">
        <h2>Daily Tasks</h2>
        <ul>
          <li>Work</li>
          <li>Personal</li>
          <li>Shopping</li>
          <li>
            <span onClick={() => setAddTask(true)}>Add</span>
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
