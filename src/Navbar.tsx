import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-3">
      <a href="/" className="brand-logo">
        React typescript
      </a>
      <ul className="right hide-on-med-and-down">
        <li>
          <NavLink to="/about">О нас</NavLink>
        </li>
        <li>
          <NavLink to="/">To do</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
