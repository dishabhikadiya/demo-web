import React from "react";
import "../App.css";
import "../simple-grid.min.css";
import Navbar from "./navbar";
const Header = () => {
  return (
    <header>
      <div className="Container">
        <div className="row">
          <div className="col-7 col-lg-8 col-md-8 col-left">
            <div className="header-left">
              <a className="showSideNavButton btn-sidenav">
                <img src="https://www.decluttr.com/Assets/Images/mobile-menu.png" />
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
      <Navbar />
    </header>
  );
};

export default Header;
