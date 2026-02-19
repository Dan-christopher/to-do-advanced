import React, { useState } from "react";


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
    <div className="fixed inset-0 bg-neu-base/80 backdrop-blur-sm flex items-center justify-center z-[100] animate-in fade-in duration-200">
      <div className="bg-neu-base p-6 rounded-2xl shadow-neu w-80 transform transition-all scale-100 animate-in zoom-in-95 duration-200 border border-white/40">
        <h3 className="text-xl font-bold text-neu-text mb-6">Add Task</h3>

        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter task name"
          className="w-full bg-neu-base shadow-neu-pressed rounded-xl p-4 text-neu-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-neu-accent/20 transition-all mb-6 text-sm"
          autoFocus
        />

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-gray-500 font-medium hover:text-neu-text hover:shadow-neu transition-all active:scale-95 duration-200"
          >
            Cancel
          </button>
          <button
            onClick={handleAddTask}
            className="px-6 py-2 rounded-xl bg-neu-base text-neu-accent font-bold shadow-neu hover:shadow-neu-pressed hover:text-purple-600 transition-all active:scale-95 duration-200"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
