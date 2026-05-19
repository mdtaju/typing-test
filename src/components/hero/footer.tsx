import { useContext } from "react";
import IconRestart from "../../assets/images/icon-restart.svg";
import { SettingContext } from "../../context/SettingContext";

function Footer() {
  const { setValue } = useContext(SettingContext);

  const handleRestart = () => {
    setValue?.((prev) => ({
      ...prev,
      testStatus: true,
      time: 60,
      wpm: 0,
      accuracy: 0,
    }));
  };
  return (
    <div className="pt-6 border-t border-gray-text flex flex-col items-center">
      <button
        onClick={handleRestart}
        className="px-3 py-1 bg-[#262626] rounded-md text-white font-semibold cursor-pointer">
        Restart Test{" "}
        <img
          src={IconRestart}
          alt="restart"
          className="inline-block ml-1 w-4 h-4"
        />
      </button>
    </div>
  );
}

export default Footer;
