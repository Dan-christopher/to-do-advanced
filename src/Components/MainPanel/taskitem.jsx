import { Trash2, Check, Clock } from "lucide-react";

const TaskItem = ({ task, onToggle, onDelete }) => {
  const getCategoryColor = (category) => {
    switch (category) {
      case "Personal":
        return "bg-pink-400 shadow-[0_0_10px_rgba(244,114,182,0.4)]";
      case "work":
        return "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.4)]";
      case "Freelance":
        return "bg-green-400 shadow-[0_0_10px_rgba(74,222,128,0.4)]";
      default:
        return "bg-gray-400";
    }
  };

  return (
    <div className="group relative bg-neu-base rounded-xl p-5 transition-all duration-200 shadow-neu hover:-translate-y-1 hover:shadow-lg flex items-center gap-5">

      {/* Checkbox */}
      <div
        onClick={() => onToggle(task.id)}
        className={`w-6 h-6 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200 ${task.completed
            ? "bg-neu-base shadow-neu-pressed"
            : "bg-neu-base shadow-neu hover:shadow-neu-pressed"
          }`}
      >
        {task.completed && <Check size={14} className="text-neu-accent" />}
      </div>

      {/* Category Indicator */}
      <div className={`w-1.5 h-10 rounded-full ${getCategoryColor(task.category)}`}></div>

      {/* Content */}
      <div className="flex-1">
        <p className={`text-lg font-medium transition-all duration-300 ${task.completed ? "text-gray-400 line-through" : "text-neu-text"
          }`}>
          {task.title}
        </p>
        {task.time && (
          <div className="flex items-center gap-2 text-xs text-gray-500 mt-1 font-medium">
            <Clock size={12} />
            <span>{task.time}</span>
          </div>
        )}
      </div>

      {/* Delete Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onDelete(task.id);
        }}
        className="opacity-0 group-hover:opacity-100 p-2.5 text-gray-400 hover:text-red-500 bg-neu-base rounded-full shadow-neu hover:shadow-neu-pressed active:scale-95 transition-all duration-200"
        title="Delete task"
      >
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default TaskItem;
