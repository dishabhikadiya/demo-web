import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import Products from "./products";

const Container = () => {
  return (
    <div className="parallax pt-3 bg-grey">
      <div className="container parallax__container">
        <div className="parallax__content">
          <h4 className="parallax__heading">
            Save Money & Protect The Planet!
          </h4>
          <div className="parallax__sub-heading">
            Whether you’re thinking of upgrading or already have, you can make
            it cheaper and more environmentally friendly by trading-in and
            shopping with us!
          </div>
          <div className="parallax__bullets">
            <div className="parallax__bullet">
              <img
                src="https://media.umbraco.io/heartcore/ql3b0ewk/icon-1.jpg"
                className="parallax__bullet-image"
              />
              <div className="parallax__bullet-text">
                Trade in your unwanted phones, tech, CDs, DVDs, games and books
                for cash.
              </div>
            </div>
            <div className="parallax__bullet">
              <img
                src="https://media.umbraco.io/heartcore/z12dglcj/icon-2.jpg"
                className="parallax__bullet-image"
              />
              <div className="parallax__bullet-text">
                Save by putting that cash towards buying refurbished tech from
                the Decluttr Store.
              </div>
            </div>
            <div className="parallax__bullet">
              <img
                src="https://media.umbraco.io/heartcore/pzvdubkl/icon-3.jpg"
                className="parallax__bullet-image"
              />
              <div className="parallax__bullet-text">
                You'll help the environment by reducing e-waste and saving
                precious resources too.
              </div>
            </div>
            <div className="parallax__bullet">
              <img
                src="https://media.umbraco.io/heartcore/kklg23uq/icon-4.jpg"
                className="parallax__bullet-image"
              />
              <div className="parallax__bullet-text">
                Keep the cycle going by trading in every time you upgrade. It's
                smart for you... smart for the planet!
              </div>
            </div>
          </div>
          <div className="parallax__buttons">
            <a className="blue-izanami-button parallax__button">
              Start Shopping
            </a>
            <a className="green-izanami-button parallax__button">
              Start Selling
            </a>
          </div>
        </div>
        <div className="parallax__image">
          <img src="https://media.umbraco.io/heartcore/8d895f2c99f313b/bottom-phones-mobile.png" />
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Container;
