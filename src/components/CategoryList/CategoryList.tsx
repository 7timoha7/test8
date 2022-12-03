import React from 'react';
import "./CategoryList.css"
import {NavLink} from "react-router-dom";

const CategoryList = () => {
  return (
    <div className="categoryList">
      <ul className="mainUl">
        <li className="mainLi"><NavLink className="mainLink" to={"quotes/star-wars"}>Star Wars</NavLink></li>
        <li className="mainLi"><NavLink className="mainLink" to={"quotes/famous-people"}>Famous people</NavLink></li>
        <li className="mainLi"><NavLink className="mainLink" to={"quotes/saying"}>Saying</NavLink></li>
        <li className="mainLi"><NavLink className="mainLink" to={"quotes/humour"}>Humour</NavLink></li>
        <li className="mainLi"><NavLink className="mainLink" to={"quotes/motivational"}>Motivational</NavLink></li>
      </ul>
    </div>
  );
};

export default CategoryList;