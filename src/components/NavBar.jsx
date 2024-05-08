import React from "react";
import { Link } from "react-router-dom";

const links = [
  { to: "/", text: "Home" },
  { to: "/login", text: "Login" },
];

const NavBar = () => {
  const renderLinks = links.map((link) => (
    <li key={link.to}>
      <Link
        className="px-3 text-lg rounded text-primary-foreground hover:bg-white/90 hover:text-primary py-2"
        to={link.to}
      >
        {link.text}
      </Link>
    </li>
  ));
  return (
    <nav>
      <ul className="flex">{renderLinks}</ul>
    </nav>
  );
};

export default NavBar;
