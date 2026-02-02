import Header from "./header.jsx";
import "./mainpanel.css";
import Taskinput from "./taskinput.jsx";

const MainPanel = () => {
  return (
    <div className="main-panel">
      <Header />
      <Taskinput />
    </div>
  );
};

export default MainPanel;
