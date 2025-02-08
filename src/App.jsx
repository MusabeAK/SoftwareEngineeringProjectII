import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Intro from "./pages/Intro";
import Team from "./pages/Team";
import Documents from "./pages/documents"
import Monica from "./pages/monica";
import Precious from "./pages/precious";
import Karim from "./pages/karim";
import Collins from "./pages/collins";
import Timeline from "./pages/timeLine";


const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/team" element={<Team />} />
          <Route path="/documents" element={<Documents/>}/>
          <Route path="/precious" element={<Precious/>}/>
          <Route path="/karim" element={<Karim/>}/>
          <Route path="/collins" element={<Collins/>}/>
          <Route path="/monica" element={<Monica/>}/>

          <Route path="/timeLine" element={ <Timeline/>}/>
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
