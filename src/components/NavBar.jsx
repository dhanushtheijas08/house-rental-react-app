import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/sign-up", text: "Register" },
  { to: "/login", text: "Login" },
];

const NavBar = () => {
  const renderLinks = links.map((link) => (
    <li key={link.to}>
      <Link
        className="sm:px-3 text-lg rounded text-primary sm:py-2 hover:text-primary-foreground hover:bg-primary transition-all duration-200"
        to={link.to}
      >
        {link.text}
      </Link>
    </li>
  ));
  return (
    <nav>
      <ul className="flex flex-col sm:flex-row">{renderLinks}</ul>
    </nav>
  );
};

export default NavBar;
