import Userprofile from "./userprofile";
import Filters from "./filters";
import "./sidebar.css";

const Sidebar = ({ onFilterChange }) => {
  return (
    <div className="sidebar">
      <Userprofile />
      <Filters onFilterChange={onFilterChange} />
    </div>
  );
};
export default Sidebar;
