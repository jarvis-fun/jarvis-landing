import React from "react";

const DynamicCard = ({ heading, text, image, direction, gradientStyles }) => {
  return (
    <div className="flex flex-wrap items-center text-white relative font-gilroy min-h-screen overflow-hidden">
      <div className={`sm:flex-1 sm:ml-20 ${direction}`}>
        <div
          className={` bg-dynamicGradient h-[250px] w-[60%] absolute blur-[160px] ${gradientStyles}`}
        />
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <span className="font-extrabold text-[24px] sm:text-[32px] text-center">
            {heading}
          </span>
          <p className="text-[16px] w-[90%] text-center sm:text-start font-medium">
            {text}
          </p>
        </div>
      </div>
      <div className="flex flex-1 justify-center items-center  sm:p-0 ">
        <img src={image} alt="image" />
      </div>
    </div>
  );
};

export default DynamicCard;
