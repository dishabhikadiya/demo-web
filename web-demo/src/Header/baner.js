import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import Category from "../Home/category";
const Baner = () => {
  return (
    <div className="umb-grid">
      <div className="grid-section">
        <div className="hero-area">
          <div className="row h-100 position-relative overflow-hidden">
            <div className="col hero-area__content">
              <div className="d-flex flex-column align-items-center">
                <div style={{ maxWidth: "573px" }}>
                  <h1 className="white-title text-left">
                    The Smart, Sustainable and Trusted Way to Buy and Sell Tech
                  </h1>
                </div>
                <div className="hero-area__buttons w-100">
                  <a className="hero-area__btn hero-area__btn_blue ">
                    Start Shopping
                  </a>
                  <a className="hero-area__btn hero-area__btn_green ">
                    Start Selling
                  </a>
                </div>
              </div>
            </div>
            <div className="col hero-area__img-wrapper">
              <picture>
                <source
                  srcSet="https://media.umbraco.io/heartcore/2ndhsuds/hero-banner-image-3.png?format=webp"
                  type="image/webp"
                />
                <img
                  src="https://media.umbraco.io/heartcore/2ndhsuds/hero-banner-image-3.png?format=webp"
                  className="hero-area__img"
                />
              </picture>
            </div>
            <div className="hero-area__figure1"></div>
            <div className="hero-area__figure2"></div>
          </div>
          <div className="hero-area__sub-text row">
            <p style={{ textAlign: "center" }}>
              <strong>
                Decluttr is your one-stop website to buy refurbished tech{" "}
              </strong>
              and
              <strong> trade in the tech you don't need anymore</strong>
              <strong>
                .
                <br />
              </strong>
              "You’ll make money, save money and help reduce e-waste too!"
            </p>
          </div>
        </div>
      </div>
      <div className="bg-grey">
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column pt-3">
              <h2 className="black-title text-center">
                Shop & Sell By Category
              </h2>
            </div>
          </div>
        </div>
      </div>
      <Category />
    </div>
  );
};

export default Baner;
