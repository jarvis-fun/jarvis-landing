const FeaturesCard = ({ heading, children, translateY }) => {
  return (
    <div className="group relative flex flex-col justify-between rounded-2xl w-[413px] h-[441px] overflow-hidden bg-[#1b1b1b] hover:shadow-features-card-shadow transition-all duration-500">
      <div className="bg-hoverGradient w-full h-full opacity-0 group-hover:opacity-100 blur-[170px] absolute top-0 left-0" />
      <span
        className={`text-[32px] text-white font-gilroy font-bold absolute bottom-4 left-4 transform translate-y-0 transition-all duration-1000 ${translateY}`}
      >
        {heading}
      </span>

      <p className="text-[16px] text-white font-gilroy  font-medium absolute bottom-4 left-4 opacity-0 transition-all duration-500 delay-300 group-hover:opacity-100 group-hover:translate-y-0">
        {children}
      </p>
    </div>
  );
};

export default FeaturesCard;
