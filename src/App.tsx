import "./App.css";
import Header from "./components/header";
import HeroSection from "./components/hero/hero";

function App() {
  return (
    <main className="bg-black-bg min-h-screen">
      <div className="py-8 px-4 md:px-8 max-w-350 mx-auto">
        <Header personalBest={85} />
        <HeroSection />
      </div>
    </main>
  );
}

export default App;
