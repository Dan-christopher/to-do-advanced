import Userprofile from "./userprofile";
import Filters from "./filters";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Userprofile />
      <Filters />
    </div>
  );
};
export default Sidebar;
