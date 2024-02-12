import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import Baner from "./baner";
const Navbar = () => {
  return (
    <nav className="mainNavigationWrapper">
      <div className="mainNavigationContent">
        <div className="Container">
          <div className="row">
            <ui id="navit" className="col-12">
              <li>
                <a>Sell My Phone</a>
              </li>
              <li>
                <a>Sell CDs, DVDs & Blu-rays</a>
              </li>
              <li>
                <a>Sell Books</a>
              </li>
              <li>
                <a>Sell Tech</a>
              </li>
              <li>
                <a>Sell Games & Consoles</a>
              </li>
              <li>
                <a>Corporate Trade-In</a>
              </li>
              <li>
                <a>Customer Reviews</a>
              </li>
              <li>
                <a>How it Works</a>
              </li>
            </ui>
          </div>
        </div>
      </div>
      <Baner />
    </nav>
  );
};

export default Navbar;
