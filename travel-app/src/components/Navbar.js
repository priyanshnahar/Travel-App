import React from "react";
import "./Navbar.css";
import { MenuItems } from "./MenuItem";


function Navbar() {
  return (
    <div>
      <nav className="navbarItems">
        <h1 className="navbar-logo">Musafir</h1>
        <ul className="nav-menu">
            {MenuItems.map((item, index) => {
                return(
                     <li key={index}>
            <a className= {item.cName} href="/">
              <i className={item.icon}></i> {item.title}
            </a>
          </li>
                )
            })}
          <button>SignUp</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
