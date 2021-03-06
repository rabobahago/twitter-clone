import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/new" exact activeClassName="active">
            New Tweet
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Nav;
