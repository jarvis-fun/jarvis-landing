import { jarvisDashboard, SocialLinks } from "../../utilis/const";
import Logo from "/images/logo.png";

const Header = () => {
  return (
    <div className="relative">
      <div
        className={` bg-dynamicGradient h-screen w-[12%] absolute sm:-top-16  blur-[190px]`}
      />
      <div className="flex items-center justify-between bg-transparent p-5 sm:ml-20 sm:mr-20">
        <div>
          <img src={Logo} alt="logo" />
        </div>

        <div className="flex gap-4">
          <div className="items-center justify-center bg-primary px-4 h-[32px] rounded-full  ">
            <button
              className="font-gilroy font-semibold text-center align-sub"
              onClick={() => window.open(jarvisDashboard, "_blank")}
            >
              Get Started
            </button>
          </div>
          <div className="border-2 border-secondary text-secondary px-4 items-center font-semibold rounded-full h-[32px] font-gilroy hover:bg-secondary hover:text-black">
            <button
              className="font-gilroy font-semibold text-center align-sub"
              onClick={() => window.open(SocialLinks.Dexscreener, "_blank")}
            >
              Buy Jarvis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
