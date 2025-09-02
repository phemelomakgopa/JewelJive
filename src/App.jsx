import React from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/HeroSection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main>
        {/* Additional content: Product sections, etc. */}
      </main>
    </div>
  );
}

export default App;
