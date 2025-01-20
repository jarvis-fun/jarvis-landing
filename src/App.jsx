import Ai from "./components/ai/Ai";
import Dashboard from "./components/dashboard/Dashboard";
import DynamicCards from "./components/dynamicCards/DynamicCards";
import FeaturesCards from "./components/featuresCards/FeaturesCards";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Strategy from "./components/strategy/Strategy";
function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex justify-center min-h-screen ">
        <Hero />
      </div>
      <div>
        <FeaturesCards />
      </div>
      <div>
        <Dashboard />
      </div>
      <div>
        <Ai />
      </div>
      <div>
        <Strategy />
      </div>
      <div>
        <DynamicCards />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
