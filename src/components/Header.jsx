import React from "react";

function Header({ handleNavigation }) {
  return (
    <header class="text-lg font-bold bg-red-500 text-white">
      <nav>
        <h1>Pathological Myopia Detection - Project Documentation</h1>
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
            <a href="#" onClick={() => handleNavigation("documents")}>
              Documents
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
