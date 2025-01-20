import React from "react";
import strategy1 from "/images/strategy1.png";
import strategy2 from "/images/strategy2.png";
import strategy3 from "/images/strategy3.png";
import strategy4 from "/images/strategy4.png";
import { motion } from "motion/react";
const Strategy = () => {
  return (
    <motion.div className="flex flex-wrap font-gilroy text-white min-h-screen mt-10 sm:mt-0">
      
      <motion.div className="flex-1 order-last sm:order-first p-4 sm:p-0 sm:mt-20">
        <motion.div
          className="absolute ml-0 -mt-36 sm:ml-20 sm:mt-0 w-[170px] h-[100px] sm:w-[230px] sm:h-[169px]"
          initial={{ y: "-20px", x: "200px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={strategy1} alt="strategy1" />
        </motion.div>

        <motion.div
          className="absolute ml-48 -mt-20 sm:ml-96 sm:mt-24 w-[170px] h-[50px] sm:w-[210px] sm:h-[122px]"
          initial={{ y: "20px", x: "-100px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={strategy2} alt="strategy2" />
        </motion.div>

        <motion.div
          className="absolute sm:ml-28 sm:mt-52 w-[170px] h-[50px]  sm:w-[206px] sm:h-[121px]"
          initial={{ y: "20px", x: "200px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={strategy3} alt="strategy3" />
        </motion.div>

        <motion.div
          className="absolute ml-44 mt-10 sm:mt-64 sm:ml-80 w-[170px] h-[100px] sm:w-[236px] sm:h-[224px]"
          initial={{ y: "20px", x: "-100px" }}
          whileInView={{ y: 0, x: 0 }}
          transition={{ ease: "easeIn", duration: 1 }}
        >
          <img src={strategy4} alt="strategy4" />
        </motion.div>
      </motion.div>

      <div className="sm:flex-1 sm:flex sm:items-center  relative ">
        <div className="bg-dynamicGradient h-[200px] w-[90%] absolute blur-[80px] sm:blur-[110px] sm:-right-40 " />
        <div className="flex flex-col items-center justify-center sm:items-start sm:justify-start">
          <span className="font-extrabold text-[24px] sm:text-[32px] text-center">
            Test Your Strategy
          </span>
          <p className="text-[16px] w-[90%] text-center sm:text-start font-medium">
            Before risking real capital, validate your agent's performance
            against historical market data. Fine-tune your strategy parameters
            while analyzing detailed metrics across different market conditions
            to ensure your agent performs exactly as intended.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Strategy;
