import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: "Intro", path: "/" },
    { name: "Our Team", path: "/team" },
    { name: "Project Timeline", path: "/timeline" },
    { name: "Contact", path: "/contact" },
    { name: "Documents", path: "/documents" },


  ];

  return (
    <div className="w-full flex justify-center">
      <header className="w-full lg:w-3/4 bg-teal-600 px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="text-white text-xl font-semibold">MyopiaDX Blog</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white relative px-2 py-1 transition-all duration-300 hover:text-teal-100
                  ${
                    location.pathname === item.path
                      ? 'after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-white'
                      : ""
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-white px-2 py-1 transition-all duration-300 hover:text-teal-100
                    ${
                      location.pathname === item.path
                        ? "border-b-2 border-white"
                        : ""
                    }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
