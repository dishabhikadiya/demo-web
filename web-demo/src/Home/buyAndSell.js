import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import Container from "./container";
const BuyAndSell = () => {
  return (
    <div className="bg-grey py-0">
      <div className="trustpilotwidget container">
        <div className="trustpilotwidget__content">
          <div className="trustpilotwidget__heading">
            Everyone is talking about us!
          </div>
          <div className="trustpilotwidget__subtext">
            Phone was in excellent condition, it arrived very quick, and just
            what I wanted. Would highly recommend and would definitely use
            again.
          </div>
          <div className="trustpilotwidget__author">
            <span>Greg</span>
            <picture>
              <source srcSet="https://media.umbraco.io/heartcore/dm5lbgrz/5-trust_216x28_jpg.png?format=webp" />
              <img
                src="https://media.umbraco.io/heartcore/dm5lbgrz/5-trust_216x28_jpg.png?format=webp"
                className="trustpilotwidget__right-inline-image my-2"
              />
            </picture>
          </div>
        </div>
        <div className="trustpilotwidget__right"></div>
        <picture>
          <source srcSet="https://media.umbraco.io/heartcore/dm5lbgrz/5-trust_216x28_jpg.png?format=webp" />
          <img
            src="https://media.umbraco.io/heartcore/dm5lbgrz/5-trust_216x28_jpg.png?format=webp"
            className="trustpilotwidget__bottom-image"
          />
        </picture>
      </div>
      <Container />
    </div>
  );
};

export default BuyAndSell;
