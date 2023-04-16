import "./Navbar.css";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SatateContext } from "../../context";

function Navbar() {
  const { alertText } = useContext(SatateContext);
  return (
    <nav>
      <div className="menus">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/exam" className="link">
          Exam
        </NavLink>
        <NavLink to="/admin" className="link">
          Admin
        </NavLink>
      </div>
      <div className="alerts">{alertText}</div>
    </nav>
  );
}

export default Navbar;
