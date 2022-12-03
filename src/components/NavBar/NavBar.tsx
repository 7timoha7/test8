import React from 'react';
import "./NavBar.css";
import {NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <h1>Quotes Central</h1>
      </div>
      <ul className="navUl">
        <li className="navLi"><NavLink className="navLink" to={"/"}>Quotes</NavLink></li>
        <li className="navLi"><NavLink className="navLink" to={"/newQuot"}>Submit new quotes</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;