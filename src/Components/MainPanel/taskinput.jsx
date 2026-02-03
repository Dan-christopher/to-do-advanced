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
    <div className="taskinputbox">
      <input
        type="text"
        placeholder="What is your next task?"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
};
export default Taskinput;
