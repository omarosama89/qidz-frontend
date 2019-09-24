import React from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const activeStyle = { color: "orange" };
  return (

    <div className="sidebar content-box">

      <ul className="nav">
        <li className="current col-md-12">
          <NavLink activeStyle={activeStyle} to="/" exact>
            <i className="glyphicon glyphicon-user"></i> Customers
          </NavLink>
        </li>
        <li className="current col-md-12">
          <NavLink activeStyle={activeStyle} to="/vehicles">
            <i className="glyphicon glyphicon-road"></i> Vehicles
          </NavLink>
        </li>
      </ul>
    </div >
  );
}

export default Header;

