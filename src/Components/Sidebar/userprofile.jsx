import DanImg from "../../assets/Dan.png";
const Userprofile = () => {
  return (
    <div>
      <div className="user-info">
        <h2>Dan Christopher</h2>
        <p>Software Developer</p>
      </div>
      <div className="user-img">
        <img src={DanImg} alt="User Profile" />
      </div>
    </div>
  );
};
export default Userprofile;
