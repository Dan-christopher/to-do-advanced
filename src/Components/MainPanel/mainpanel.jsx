import { useState, useEffect } from "react";
import Header from "./header.jsx";
import "./mainpanel.css";
import Taskinput from "./taskinput.jsx";
import TaskList from "./tasklist.jsx";
import { initialTasks } from "../../data/initialtask.js";

const MainPanel = ({ selectedFilter }) => {
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

  const getFilteredTasks = () => {
    if (selectedFilter === "Today tasks") {
      return tasks;
    }
    return tasks.filter((task) => task.category === selectedFilter);
  };

  return (
    <div className="main-panel">
      <Header />
      <Taskinput onAddTask={handleAddTask} selectedFilter={selectedFilter} />
      <TaskList
        tasks={getFilteredTasks()}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
};

export default MainPanel;
