import { useState } from "react";

const Taskinput = ({ onAddTask, selectedFilter }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskTime, setTaskTime] = useState("");

  const handleAddTask = () => {
    if (taskTitle.trim() === "") {
      alert("Please enter a task title");
      return;
    }

    onAddTask(taskTitle, selectedFilter, taskTime);

    // Reset form
    setTaskTitle("");
    setTaskTime("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="relative group mb-8">
      <div className="relative bg-neu-base rounded-2xl p-2 flex items-center gap-3 shadow-neu-pressed">
        <div className="p-2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v8" /><path d="M8 12h8" /></svg>
        </div>
        <input
          type="text"
          placeholder="What is your next task?"
          className="bg-transparent border-none outline-none text-neu-text placeholder-gray-400 w-full text-lg h-12"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={handleAddTask}
          className="px-6 py-2 bg-neu-base text-neu-accent rounded-xl font-bold shadow-neu hover:shadow-neu-pressed active:shadow-neu-pressed active:scale-95 transition-all duration-200"
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default Taskinput;
