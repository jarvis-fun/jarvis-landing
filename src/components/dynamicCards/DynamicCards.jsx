import React from "react";
import DynamicCard from "./DynamicCard";
import agent from "/images/agent.png";
import liquidity from "/images/liquidity.png";
const DynamicCards = () => {
  return (
    <div className="flex flex-col">
      <DynamicCard
        heading={"Launch Your Agent"}
        text={
          "Take your tested strategy to the live markets with confidence. Our secure permission system ensures your AI agent operates within your specified parameters, executing trades automatically while you maintain full control over risk management and position sizing."
        }
        image={agent}
        direction={"order-first"}
        gradientStyles={"left-[-190px] top-[200px]"}
      />

      <DynamicCard
        heading={"Smart Liquidity Management"}
        text={
          "Maximize your DeFi earnings with intelligent liquidity management. Your AI agent continuously monitors market conditions, APY rates, and impermanent loss risks to automatically rebalance positions across different pools for optimal returns."
        }
        image={liquidity}
        direction={"order-first sm:order-last"}
        gradientStyles={"right-[-190px] top-[200px]"}
      />
    </div>
  );
};

export default DynamicCards;
