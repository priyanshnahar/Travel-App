import React, { useState } from "react";
import "./Navbar.css";
import { MenuItems } from "../Menu/MenuItem";
import { Link } from "react-router-dom";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <div>
      <nav className="navbarItems">
        <h1 className="navbar-logo">Musafir</h1>
        <div className="menu-icons">
          <i
            className={clicked ? "fas fa-times" : "fas fa-bars"}
            onClick={() => setClicked(!clicked)}
          />
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i> {item.title}
                </Link>
              </li>
            );
          })}
          <button>SignUp</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
