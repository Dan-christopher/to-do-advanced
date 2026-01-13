import React, { useState } from "react";
import "./popup.css";

const Popup = ({ onClose }) => {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      console.log("Task added:", task);
      setTask("");
      onClose();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h3>Add Task</h3>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task name"
        />

        <div className="actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleAddTask}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
