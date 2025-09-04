import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ChatBot from "./components/chatBot"; // ✅ Import ChatBot component
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <main>
        {/* Additional content */}
      </main>
      <ChatBot /> {/* ✅ Chatbot appears bottom-right */}
    </div>
  );
}

export default App;
