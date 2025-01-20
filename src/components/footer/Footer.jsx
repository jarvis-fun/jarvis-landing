import { SocialLinks, WATCH_DEMO, WhitePaperLink } from "../../utilis/const";
import footerLogo from "/images/footer-logo.png";

const Footer = () => {
  return (
    <div className="min-h-0">
      {/* Footer card */}
      <div className="flex justify-center">
        <div className="flex flex-col items-center justify-center bg-primary rounded-3xl font-gilroy w-[90%] sm:w-[70%] p-4 sm:p-10">
          <div className="flex flex-col sm:flex-row gap-4 mb-4">
            <div className="flex  border-2 justify-center border-black rounded-full w-[260px] h-[35px]">
              <span className="flex  align-center justify-center items-center gap-1 font-gilroy font-semibold ml-[10px] pt-1">
                <span className="text-[24px] font-bold">•</span> 10,000+
                Strategies
              </span>
            </div>
            <div className="flex items-center justify-center border-2 border-black rounded-full w-[260px] h-[35px]">
              <span className=" flex align-center justify-center items-center gap-1 font-gilroy font-semibold pt-1">
                <span className="text-[24px] font-bold">•</span> $50M+ in
                Trading Volume
              </span>
            </div>
            <div className="flex items-center justify-center border-2 border-black rounded-full w-[260px] h-[35px]">
              <span className="flex align-center justify-center items-center gap-1 font-gilroy font-semibold pt-1">
                <span className="text-[24px] font-bold">•</span> 98% Agent
                Uptime
              </span>
            </div>
          </div>
          <span className="text-[24px] sm:text-[32px] text-center font-gilroy font-extrabold">
            Ready to Let AI Handle Your Trading?
          </span>
          <span className="text-[16px] font-gilroy font-semibold text-center  w-[90%]">
            Your perfect trading assistant is just one prompt away. No coding
            needed, no complex setups—just your strategy in plain English. Join
            thousands of traders who've already automated their success.
          </span>

          <div className="flex flex-col sm:flex-row gap-2 mt-8">
            <button
              className="bg-black text-white rounded-full  w-[80vw] h-[40px] sm:w-[214px] sm:h-[48px] font-gilroy "
              onClick={() => window.open(WhitePaperLink, "_blank")}
            >
              White Paper
            </button>
            <button
              className="border-2 border-black rounded-full  w-[80vw] h-[40px] sm:w-[214px] sm:h-[48px] font-gilroy"
              onClick={() => window.open(WATCH_DEMO.URL, "_blank")}
            >
              Watch Demo
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 font-gilroy p-4 sm:p-20 group">
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start col-span-2 sm:col-span-1 gap-10 mb-10 mt-8 sm:mt-0 sm:mb-0">
          <img src={footerLogo} alt="footer logo" className="w-[177px]" />
          {/* <button
            className="flex items-center justify-center font-gilroy w-[370px] h-[40px] sm:w-[114px] sm:h-[40px] font-semibold  bg-primary rounded-full outline-none"
            disabled
          >
            Sign Up
          </button> */}
        </div>

        <div className="flex flex-col gap-8">
          <span className="text-white font-bold text-[16px]">
            Community & Social{" "}
          </span>
          <div className="flex flex-col gap-2 text-[#888888] text-[14px]">
            <span>
              <a href={SocialLinks.Twitter} target="_blank">
                Twitter/X
              </a>
            </span>
            <span>
              {" "}
              <a href={SocialLinks.Discord} target="_blank">
                Discord
              </a>
            </span>
            <span>
              {" "}
              <a href={SocialLinks.Telegram} target="_blank">
                Telegram
              </a>
            </span>
            <span>
              {" "}
              <a href={SocialLinks.Dexscreener} target="_blank">
                Dexscreener
              </a>
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-8 relative">
          <div className="bg-dynamicGradient h-[300px] w-[200px] absolute right-20 blur-[80px] animate-moveCircle transition-all duration-200" />
          <span className="text-white font-bold text-[16px]">
            Legal & Compliances{" "}
          </span>
          <div className="flex flex-col gap-2 text-[#888888] text-[14px]">
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Risk Disclosure</span>
            <span>Trading Disclaimer</span>
            <span>Security Policy</span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-footerPrimaryGradient h-[300px] w-[300px] blur-[80px] absolute sm:bottom-[-220px] right-30 animate-moveCircle transition-all duration-200 " />
          <div className="flex flex-col gap-8">
            <span className="text-white font-bold text-[16px]">
              Support & Resources{" "}
            </span>
            <div className="flex flex-col gap-2 text-[#888888] text-[14px]">
              <span>Documentation</span>
              <span>Help Center</span>
              <span>API Documentation</span>
              <span>Status Page</span>
              <span>Contact Support</span>
            </div>
          </div>
        </div>

        {/* 
        <div className="flex flex-col gap-8 ">
          <span className="text-white font-bold text-[16px]">Contact:</span>
          <div className="flex flex-col gap-2 text-[#888888] text-[14px]">
            <span>
              #111-5678, from Gastavo <br /> Montreal, Quebec H6T 4A7
            </span>
            <span>#Contact Number#</span>
          </div>
        </div> */}
      </div>
      <div className="flex flex-col gap-4 p-4 sm:p-10">
        <hr className="bg-[#333333]" />
        <div className="flex justify-between">
          <span className="text-[#888888] text-[14px] font-medium">
            {" "}
            &copy; 2025 Jarvis.fun.
          </span>
          <span className="text-[#888888] text-[14px] font-medium">
            All rights reserved.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
