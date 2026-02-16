import Header from "./header.jsx";
import Taskinput from "./taskinput.jsx";
import TaskList from "./tasklist.jsx";

const MainPanel = ({ selectedFilter, tasks, onAddTask, onToggleTask, onDeleteTask }) => {

  const getFilteredTasks = () => {
    if (selectedFilter === "Today tasks") {
      return tasks;
    }
    return tasks.filter((task) => task.category === selectedFilter);
  };

  return (
    <main className="p-6 lg:p-8 min-h-screen w-full">
      <div className="w-full space-y-8">
        <Header />
        <Taskinput onAddTask={onAddTask} selectedFilter={selectedFilter} />
        <TaskList
          tasks={getFilteredTasks()}
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
        />
      </div>
    </main>
  );
};

export default MainPanel;
