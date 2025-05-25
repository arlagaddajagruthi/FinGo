
const HeroSection = () => {
  return (
    <div className="pt-16 pb-24 px-6 bg-gradient-to-b from-white via-pink-50 to-pink-100">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-pink-700 mb-6">
          Manage Financial Spends <br className="hidden md:block" /> with Intelligence
        </h1>
        <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
          An <span className="font-semibold text-pink-600">AI-powered financial management platform </span> 
          designed to help you track, analyze, and optimize your spending. Access real-time insights, 
          leverage smart budgeting tools, and receive personalized recommendations— all to empower your financial decisions with clarity and confidence.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
