import React from "react";

function Header({ handleNavigation }) {
  return (
    <header className="App-header">
      <nav>
        <h1>Eye Disease Detection</h1>
        <ul>
          <li>
            <a href="#" onClick={() => handleNavigation("home")}>
              Home
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation("tasks")}>
              Tasks
            </a>
          </li>
          <li>
            <a href="#" onClick={() => handleNavigation("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
