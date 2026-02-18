import React, { useState } from "react";
import { Copy, Briefcase, User, Calendar, Settings } from "lucide-react";
import Popup from "./popup";

const Filters = ({ onFilterChange }) => {
  const [addTask, setAddTask] = useState(false);
  const [activeFilter, setActiveFilter] = useState("Today tasks");

  const menuItems = [
    { id: "Today tasks", label: "All Tasks", icon: Copy },
    { id: "Personal", label: "Personal", icon: User },
    { id: "work", label: "Work", icon: Briefcase },
    { id: "Freelance", label: "Freelance", icon: Calendar },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 px-2">Daily Tasks</h2>
        <ul className="space-y-3">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeFilter === item.id;
            return (
              <li
                key={item.id}
                onClick={() => handleFilterClick(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all duration-200 group relative ${isActive
                    ? "text-neu-accent shadow-neu-pressed font-semibold"
                    : "text-gray-500 hover:text-neu-text hover:-translate-y-0.5 hover:shadow-neu-sm"
                  }`}
              >
                <Icon size={18} className={`transition-colors ${isActive ? "text-neu-accent" : "text-gray-400 group-hover:text-neu-text"}`} />
                <span className="text-sm">{item.label}</span>
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        <div className="px-4 py-3 rounded-xl cursor-pointer text-gray-500 hover:text-neu-text hover:shadow-neu-sm transition-all flex items-center gap-3 hover:-translate-y-0.5">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </div>
      </div>
      {addTask && <Popup onClose={() => setAddTask(false)} />}
    </div>
  );
};
export default Filters;
