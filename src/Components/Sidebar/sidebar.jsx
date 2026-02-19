import Userprofile from "./userprofile";
import Filters from "./filters";

const Sidebar = ({ onFilterChange }) => {
  return (
    <aside className="lg:sticky lg:top-0 lg:h-screen h-auto bg-neu-base border-r border-[#d1d9e6] flex flex-col p-6 transition-all duration-300">
      <Userprofile />
      <div className="mt-8 flex-1">
        <Filters onFilterChange={onFilterChange} />
      </div>
    </aside>
  );
};
export default Sidebar;
