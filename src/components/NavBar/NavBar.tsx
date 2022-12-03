import React from 'react';
import {NavLink} from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navBar">
      <div>
        <h1>Quotes Central</h1>
      </div>
      <ul className="navUl">
        <li className="navLi"><NavLink className="navLink" to={"/"}>Quotes</NavLink></li>
        <li className="navLi"><NavLink className="navLink" to={"/add"}>Submit new quotes</NavLink></li>
      </ul>
    </div>
  );
};

export default NavBar;