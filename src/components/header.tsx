import LogoLarge from "../assets/images/logo-large.svg";
import LogoSmall from "../assets/images/logo-small.svg";
import IconBest from "../assets/images/icon-personal-best.svg";

function Header({ personalBest = 0 }: { personalBest: number }) {
  return (
    <div className="flex items-center justify-between">
      {/* logo container */}
      <div className="w-8 h-8 md:w-70 md:h-12 flex items-center justify-center">
        {/* logo for large device */}
        <img
          src={LogoLarge}
          alt="Logo"
          className="w-fit h-auto hidden md:block"
        />
        {/* logo for small device */}
        <img
          src={LogoSmall}
          alt="Logo"
          className="w-fit h-auto block md:hidden"
        />
      </div>
      {/* personal best container */}
      <div className="flex items-center">
        <img
          src={IconBest}
          alt="Personal Best"
          className="w-4 h-4 md:w-6 md:h-6"
        />
        <span className="ml-1 text-gray-200 font-light flex items-center gap-1">
          <span className="hidden md:block">Personal </span> Best:{" "}
          <span className="font-bold">{personalBest} WPM</span>
        </span>
      </div>
    </div>
  );
}

export default Header;
