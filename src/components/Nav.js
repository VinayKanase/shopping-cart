import React from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

function Nav({ cartTotalProducts }) {
  return (
    <nav className="nav">
      <h1>SHOPTOP</h1>
      <ul className="nav__links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <Link to="/shop">Shop</Link>
        <li>
          <div className="nav__search">
            <input type="search" placeholder="Search" />
            <span>
              <i className="icon-search"></i>
            </span>
          </div>
        </li>
        <li>
          <Link to="/cart">
            <div className="nav__cart">
              <i className="icon-shopping-cart"></i>
              <span className="count">{cartTotalProducts}</span>
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
