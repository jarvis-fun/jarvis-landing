import React from "react";
import ai1 from "/images/ai1.png";
import ai2 from "/images/ai2.png";
import ai3 from "/images/ai3.png";
import ai4 from "/images/ai4.png";
import { motion } from "motion/react";
const Ai = () => {
  return (
    <motion.div className="flex flex-wrap items-center font-gilroy text-white min-h-screen mt-10 sm:mt-0">
      <div className="sm:flex-1 sm:ml-20 relative">
        <div className="bg-dynamicGradient h-[200px] w-[90%] absolute blur-[80px] sm:blur-[110px] left-0 sm:-left-40" />
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <span className="font-extrabold text-[24px] sm:text-[32px] text-center">
            Design Your Ai Agent
          </span>
          <p className="text-[16px] w-[90%] text-center sm:text-start font-medium">
            Transform your trading expertise into automated strategies using
            natural language. Simply describe your perfect setup—from technical
            patterns to social signals—and let our platform turn your words into
            a sophisticated trading algorithm.
          </p>
        </div>
      </div>
      <motion.div className="flex flex-col items-center flex-1 gap-6 p-4 sm:p-0">
        <motion.div
          initial={{ y: "-20px", x: "200px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={ai1} alt="ai1" />
        </motion.div>
        <motion.div
          initial={{ y: "20px", x: "-100px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={ai2} alt="ai2" />
        </motion.div>
        <motion.div
          initial={{ y: "20px", x: "200px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={ai3} alt="ai3" />
        </motion.div>
        <motion.div
          initial={{ y: "20px", x: "-100px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={ai4} alt="ai4" />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Ai;
