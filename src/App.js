import React from "react";
import "./App.css";
import "./tailwind.output.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import Dashboard from "./components/Dashboard/dashboard";

function App() {
  return (
    <div className="background h-screen">
      <Dashboard />
    </div>
  );
}

export default App;
