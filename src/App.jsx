import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Team from "./pages/Team";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/team" element={<Team />} />
          <Route
            path="/timeline"
            element={
              <div className="mx-auto w-full lg:w-3/4 px-4">Timeline Page</div>
            }
          />
          <Route
            path="/contact"
            element={
              <div className="mx-auto w-full lg:w-3/4 px-4">Contact Page</div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
