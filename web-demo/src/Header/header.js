import React, { useState } from "react";
import "../App.css";
import "../simple-grid.min.css";
import Navbar from "./navbar";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  return (
    <header>
      <div className="Container">
        <div className="row">
          <div className="col-7 col-lg-8 col-md-8 col-left">
            <div className="header-left">
              <a
                className="showSideNavButton btn-sidenav"
                onClick={toggleDrawer}
              >
                <img
                  src="https://www.decluttr.com/Assets/Images/mobile-menu.png"
                  alt="menu"
                />
              </a>
            </div>
            <a className="logo">
              <img
                src="https://www.decluttr.com/Assets/Images/logo-decluttr.svg"
                alt="decluttr"
              />
            </a>
            <div className="buyAndSell">
              <a className="shop">
                <span>shop</span>
              </a>
              <a className="sell active">
                <span>sell</span>
              </a>
              <div>
                <a className="col-7 col-lg-8 col-md-8">
                  <img
                    src="https://www.decluttr.com/Assets/Images/logo-bbb-1x.png"
                    alt="bbb logo"
                    className="header2"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="col-5 col-md-4 col-lg-4">
            <div className="acount_link">
              <a title="My Account">
                <span>My Account</span>
              </a>
            </div>
            <div className="acount_block">
              <a>
                <span className="heading">My Account</span>
              </a>
              <span className="links">
                <a>Sign In</a>&nbsp;
                <a>Register</a>
              </span>
            </div>
            <div className="cart">
              <a className="basket">
                <em>
                  <strong className="badge">0</strong>
                </em>
                <span>Cart</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {isDrawerOpen && (
        <div className="drawer">
          <div className="drawer-content">
            <div className="slidemenu">
              <a className="goBuy">
                <span>shop</span>
              </a>
              <a className="goSell">
                <span>sell</span>
              </a>
            </div>
            <span className="register">
              <a>Sign In</a>&nbsp;
              <a>Register</a>
            </span>
            <div className="bar">
              <ul>
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
              </ul>
            </div>
            <button onClick={toggleDrawer}>Close Drawer</button>
          </div>
        </div>
      )}
      <Navbar />
    </header>
  );
};

export default Header;
