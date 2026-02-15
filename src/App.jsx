import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar/sidebar";
import MainPanel from "./Components/MainPanel/mainpanel";
import RightPanel from "./Components/RightPanel/RightPanel";
import { initialTasks } from "./data/initialtask.js";
import "./App.css";

const App = () => {
  const [selectedFilter, setSelectedFilter] = useState("Today tasks");
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(initialTasks);
  }, []);

  const handleAddTask = (taskTitle, taskCategory, taskTime) => {
    const newTask = {
      id: Date.now(),
      title: taskTitle,
      category: taskCategory,
      time: taskTime,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr_400px] min-h-screen bg-neu-base gap-0 text-neu-text selection:bg-purple-500/30 selection:text-purple-900 transition-all duration-300">
      <Sidebar onFilterChange={setSelectedFilter} />
      <MainPanel
        selectedFilter={selectedFilter}
        tasks={tasks}
        onAddTask={handleAddTask}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
      <RightPanel tasks={tasks} />
    </div>
  );
};
export default App;
