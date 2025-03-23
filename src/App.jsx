import { useState } from "react";
import OctaviewClient from "octaview-client";
import Details from "./Details";

function App() {
  const [view, setView] = useState("other");

  const config = {
    background: "#F5F5F5",
    textColor: "#2F4F4F",
    buttonColor: "#00796B",
    api: "7d1dad24e6c3e3d6d5583adcf421cbd5dd21902d213856a46ae743d2670cdcd8",
    userId: "67dfc1ecce17377463491263",
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Octaview Implementation Example</h1>
        <p>This is a demonstration of the octaview-client npm package integration</p>
        <div className="testing-info">For testing purposes only</div>
      </header>
      
      <div className="nav-buttons">
        
        <button 
          className={`nav-button ${view === "other" ? "active" : ""}`}
          onClick={() => setView("other")}
        >
          About Octaview
        </button>
        <button 
          className={`nav-button ${view === "career" ? "active" : ""}`}
          onClick={() => setView("career")}
        >
          Career Opportunities
        </button>
      </div>

      <div className="content-container">
        {view === "career" ? <OctaviewClient {...config} /> : <Details />}
      </div>
      
      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Octaview Client Demo. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;