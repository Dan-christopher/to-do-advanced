import "./taskitem.css";

const TaskItem = ({ task, onToggle, onDelete }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Personal":
        return "#FF6B6B";
      case "work":
        return "#FFD93D";
      case "Freelance":
        return "#6BCB77";
      default:
        return "#999";
    }
  };

  return (
    <div className="task-item">
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="task-checkbox"
        />
        <div
          className="task-color-indicator"
          style={{ backgroundColor: getCategoryColor(task.category) }}
        ></div>
        <div className="task-info">
          <p className={`task-title ${task.completed ? "completed" : ""}`}>
            {task.title}
          </p>
          <span className="task-time">{task.time}</span>
        </div>
      </div>
      <button
        className="task-delete-btn"
        onClick={() => onDelete(task.id)}
        title="Delete task"
      >
        ✕
      </button>
    </div>
  );
};

export default TaskItem;
