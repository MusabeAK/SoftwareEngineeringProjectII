import React, { useState } from "react";
import "./App.css"; // Custom CSS
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Tasks from "./components/tasks/Tasks";
import Contacts from "./components/Contact";

function App() {
  // State to hold the current content type
  const [content, setContent] = useState("home");

  // Function to update content based on the clicked link
  const handleNavigation = (view) => {
    setContent(view); // Update the state with the view
  };

  return (
    <div className="App">
      <Header handleNavigation={handleNavigation} />

      <main>
        <article>
          {content === "home" && <Home />}
          {content === "tasks" && <Tasks />}
          {content === "contact" && <Contacts />}
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default App;
