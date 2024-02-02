import React from "react";
import "../simple-grid.min.css";
import "../App.css";
import Footer from "../Footer/footer";
const PopularAndBuy = () => {
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
                                  src="https://media.umbraco.io/heartcore/nrifnuz3/12.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPhone 12
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/ziwdzti2/s10.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Galaxy S10
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/cpplerzh/xr.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPhone XR
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/n4afxtje/11.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPhone 11
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="productgrid-banner flex-shrink-1 bg-grey my-2">
                    <div className="productgrid-banner__img-wrapper desktop">
                      <picture>
                        <source srcSet="https://media.umbraco.io/heartcore/orddgjgv/rent-banner-image.png?format=webp" />
                        <img
                          src="https://media.umbraco.io/heartcore/orddgjgv/rent-banner-image.png?format=webp"
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
                          Shop and Save with Decluttr!
                        </h2>
                        <div className="productgrid-banner__sub-heading">
                          Certified Refurbished | FREE 12 Month Warranty | 14
                          Day Money Back Guarantee
                        </div>
                      </div>
                      <a className="productgrid-banner__button">
                        Start Shopping
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
                                  src="https://media.umbraco.io/heartcore/ziwdzti2/s10.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Galaxy Note 10 Plus 5G
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/k1upd3xn/iphone-11-pro-1.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPhone 11 Pro
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/2pwddefj/s20-1.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            Galaxy S20
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
                                  src="https://media.umbraco.io/heartcore/k1upd3xn/iphone-11-pro-1.jpg"
                                  style={{ maxHeight: "110px" }}
                                  className="grid-item-image-izanami-img"
                                />
                              </picture>
                            </div>
                          </div>
                          <div className="grid-item-name-izanami v1 align-self-center">
                            iPhone 11 Pro-Max
                          </div>
                        </div>
                        <div className="grid-item-content-izanami v1 flex-column">
                          <div className="grid-item-buttons-izanami v1">
                            <a className="blue-izanami-button">shop</a>
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
      <Footer />
    </div>
  );
};

export default PopularAndBuy;
