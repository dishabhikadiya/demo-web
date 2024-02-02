import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import BuyAndSell from "./buyAndSell";

const Category = () => {
  return (
    <div className="bg-grey">
      <div className="container pt-3">
        <div className="row clearfix">
          <div className="col-md-12 column">
            <div>
              <div
                className="macro-container pt-0"
                style={{ maxWidth: "none" }}
              >
                <div
                  className="products-grid"
                  style={{ width: "auto", left: 0 }}
                >
                  <div className="row justify-content-center">
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/1xtbx0q5/mobile-phones.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Cell Phones
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/qpcm0kbj/ipads-tablets.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPad & Tablets
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/kuafpn50/macbook-imacs.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            MacBook & iMac
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/dz1j50cx/entertainment.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Entertainment
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productgrid-banner flex-shrink-1 bg-grey my-2">
                    <div className="productgrid-banner__img-wrapper desktop">
                      <picture>
                        <source srcSet="https://media.umbraco.io/heartcore/ohrglibx/leaves.png?format=webp" />
                        <img
                          src="https://media.umbraco.io/heartcore/ohrglibx/leaves.png?format=webp"
                          className="productgrid-banner__image"
                        />
                      </picture>
                    </div>
                    <div className="productgrid-banner__img-wrapper mobile">
                      <picture>
                        <source srcSet="https://media.umbraco.io/heartcore/ohrglibx/leaves.png?format=webp" />
                        <img
                          src="https://media.umbraco.io/heartcore/ohrglibx/leaves.png?format=webp"
                          className="productgrid-banner__image margin-left"
                        />
                      </picture>
                    </div>
                    <div className="productgrid-banner__content">
                      <div className="productgrid-banner__text">
                        <h2 className="white-title text-left">
                          Upgrade the Smart Way...
                        </h2>
                        <div className="productgrid-banner__sub-heading">
                          Trade in your unwanted tech and use the cash to buy
                          your next device!
                        </div>
                      </div>
                      <a className="productgrid-banner__button">
                        Start Selling
                      </a>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/mxffxtqu/watches.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Apple Watch
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="	https://media.umbraco.io/heartcore/j2gjrmig/consoles.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Consoles
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/0n2jogyy/ipods.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPod
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid-item-izanami coll-6 col-lg-3 col-xl-3 py-2 py-sm-3">
                      <div className="grid-item-card-izanami">
                        <div className="grid-item-header v1">
                          <div className="grid-item-image-wrapper-izanami v1">
                            <div className="grid-item-image-izanami v1">
                              <picture className="d-flex">
                                <img
                                  src="https://media.umbraco.io/heartcore/4cogbzwj/laptops.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Laptops
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                            <a className="green-izanami-button">Sell</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="coll-9">
        <BuyAndSell />
      </div>
    </div>
  );
};

export default Category;
