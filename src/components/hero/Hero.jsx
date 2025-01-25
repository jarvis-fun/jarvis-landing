import { WATCH_DEMO, WhitePaperLink, jarvisDashboard } from "../../utilis/const";
import Frame from "/images/Frame.png";
import {ReactTyped} from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center overflow-hidden">
      <div className="flex flex-col gap-7 items-center justify-center">
        <span className="text-white text-[48px] text-center font-gilroy font-extrabold">
          Create <span className="text-primary font-normal">Intelligent </span>{" "}
          Trading <br className="hidden sm:block" /> Agents Without
          <span className="text-secondary font-normal"> Code</span>
        </span>

        <span className="text-white w-[90%] sm:w-[80%] text-center font-gilroy font-medium text-[16px]">
          Turn your trading ideas into autonomous agents—no code needed. Just
          describe your strategy in plain English, and watch it execute in
          real-time.
        </span>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
          <button
            className="bg-primary  rounded-full w-[80vw] h-[40px] font-semibold sm:w-[214px] sm:h-[48px] font-gilroy "
             onClick={()=> window.open(WhitePaperLink,"_blank")}
          >
            White Paper
          </button>
          <button className="border-2 border-secondary text-secondary font-semibold rounded-full w-[80vw] h-[40px] sm:w-[214px] sm:h-[48px] font-gilroy hover:bg-secondary hover:text-black" 
            onClick={() =>window.open(WATCH_DEMO.URL,"_blank")}
          >
            Watch Demo
          </button>
        </div>
      </div>

      <div className="flex justify-center items-center mt-20 w-[100%] relative">
        <div className="absolute left-6 sm:left-40 inset-0 bg-gradient-to-r from-[#00BCBC] to-[#E8E337] w-[90%] sm:w-[70%] blur-[20px] animate-gradient-move"></div>
        <ReactTyped
            strings={[
              "Jarvis, snipe new tokens at 50 SOL liquidity instantly.",
              "Monitor Elon's tweets, invest $100 in token calls.",
            ]}
            typeSpeed={40}
            backSpeed={55}
            attr="placeholder"
            loop
            className="relative z-10 w-[90%] sm:w-[70%] rounded-full h-[48px] bg-black text-white outline-none  pt-4 pr-36 pb-4 pl-6"
        >
          <input
              type="text"
              readOnly
              className="bg-black text-white outline-none"
              style={{ width: "100%" }}
          />
        </ReactTyped>
        <button
          className="relative z-10 -ml-32  flex items-center  justify-center gap-2 bg-primary rounded-full w-[122px] h-[40px] text-gray-00 "
          onClick={() =>window.open(jarvisDashboard,"_blank")}
        >
          <img src={Frame} alt="frame" />
          Submit
        </button>
      </div>
      <div className="bg-footerPrimaryGradient h-screen w-[30%] blur-[220px] absolute sm:bottom-[-170px] sm:right-0" />
    </div>
  );
};

export default Hero;
