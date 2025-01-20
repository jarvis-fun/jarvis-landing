import dashboardImg from "/images/dashboard.png";
import { motion } from "motion/react";
const Dashboard = () => {
  return (
    <motion.div className="flex justify-center p-4 relative">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ease:"easeIn",delay: 0.3}}
        className="bg-dashboardGradient h-[100px] w-[100px] blur-[100px] absolute z-[0] sm:w-[300px] sm:h-[300px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ease:"easeIn",delay: 0.5}} 
        className="bg-dashboardGradient h-[15px] w-[65%] absolute blur-[10px] z-[0]"
      />
      <img
        src={dashboardImg}
        alt="dashboard"
        className="z-[10]  sm:w-[75%] bg-black"
      />
    </motion.div>
  );
};

export default Dashboard;
