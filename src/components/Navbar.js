import { useState } from "react";
import { NavLink } from "react-router-dom";

import "../css/Navbar.css";

function Navbar() {
  const [links, setLinks] = useState([
    { url: "/", name: "Home" },
    { url: "/characters", name: "Characters" },
  ]);

  const renderLinks = () => {
    return links.map((link, i) => (
      <NavLink className="links" to={link.url} key={i}>
        {link.name}
      </NavLink>
    ));
  };

  return (
    <nav className="navbar">
      <span className="logo"><img src="https://iconarchive.com/download/i45735/musett/dragon-ballz/Dragon-Ball.ico"/></span>
      <ul>{renderLinks()}</ul>
    </nav>
  );
}

export default Navbar;
