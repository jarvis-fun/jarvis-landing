import FeaturesCard from "./FeaturesCard";

const FeaturesCards = () => {
  return (
    <div className="flex gap-10 justify-center flex-wrap p-10 min-h-screen">
      <FeaturesCard
        heading="Natural Language Commands"
        translateY="group-hover:translate-y-[-300px]"
      >
        Type strategies like <span className="font-bold"> Buy SOL</span> when
        RSI is oversold and{" "}
        <span className="font-bold">Twitter sentiment rises</span>— your AI
        agent handles the rest
      </FeaturesCard>
      <FeaturesCard
        heading={"Fully Autonomous"}
        translateY={"group-hover:translate-y-[-350px]"}
      >
        AI Agent Deployers puts you at the forefront of&nbsp;
        <span className="font-bold">
          autonomous trading and DeFi management.
        </span>
        Leveraging&nbsp;
        <span className="font-bold">custom AI agents, </span>
        advanced TA, sentiment data, and prompt-based commands, you gain the
        freedom to respond to a&nbsp;<span className="font-bold">24/7</span>
        &nbsp; market—without the complexity of coding.
      </FeaturesCard>
      <FeaturesCard
        heading={"Market-Aware"}
        translateY={"group-hover:translate-y-[-350px]"}
      >
        <span className="font-bold">Ready to elevate your trading?</span>&nbsp;
        Deploy your own
        <span className="font-bold"> custom AI agent</span>&nbsp; and let the
        platform handle the rest, so you can focus on&nbsp;
        <span className="font-bold">growing your portfolio</span>&nbsp; in the
        ever-evolving world of crypto.
      </FeaturesCard>
    </div>
  );
};

export default FeaturesCards;
