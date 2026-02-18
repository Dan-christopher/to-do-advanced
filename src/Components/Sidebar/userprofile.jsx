import DanImg from "../../assets/Dan.png";

const Userprofile = () => {
  return (
    <div className="flex items-center gap-4 pb-6 border-b border-[#d1d9e6]">
      <div className="relative">
        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#e0e5ec] shadow-neu p-0.5">
          <img src={DanImg} alt="User Profile" className="w-full h-full object-cover rounded-full" />
        </div>
        <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#e0e5ec] shadow-sm"></div>
      </div>
      <div>
        <h2 className="text-neu-text font-bold text-sm tracking-wide">Dan Christopher</h2>
        <p className="text-gray-500 text-xs font-medium">Software Developer</p>
      </div>
    </div>
  );
};
export default Userprofile;
