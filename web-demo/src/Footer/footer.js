import React from "react";
import "../App.css";
import "../simple-grid.min.css";
const Footer = () => {
  return (
    <footer className="accordion footer" id="accordionfooter">
      <div className="container py-3 footer-nav-container">
        <div className="roww footer-columns">
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">Help</div>
            <ul className="collapse">
              <li>Shipping Locator</li>
              <li>How it Works</li>
              <li>
                <a>About Us</a>
              </li>
              <li>
                <a>Wholesale</a>
              </li>
              <li>
                <a>Affiliate Program</a>
              </li>
              <li>
                <a>Help Center</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">USEFUL</div>
            <ul className="collapse" id="useful">
              <li>
                <a>Sitemap</a>
              </li>
              <li>
                <a>Fast Payments</a>
              </li>
              <li>
                <a>Student Discount</a>
              </li>
              <li>
                <a>Refer a Friend</a>
              </li>
              <li>
                <a>Press Page</a>
              </li>
              <li>
                <a>Certification</a>
              </li>
              <li>
                <a>Recycle Cell Phones</a>
              </li>
              <li>
                <a>Sell Broken Phones</a>
              </li>
              <li>
                <a>Sell Phone By Carrier</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">legal</div>
            <ul className="collapse">
              <li>
                <a>Privacy Policy</a>
              </li>
              <li>
                <a>Free Shipping Service T&Cs</a>
              </li>
              <li>
                <a>Terms & Conditions</a>
              </li>
              <li>
                <a>Copyright</a>
              </li>
              <li>
                <a>Do Not Sell or Share My Information</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">Sell</div>
            <ul className="collapse">
              <li>
                <a>Sell iPhone</a>
              </li>
              <li>
                <a>Samsung Phone Trade In</a>
              </li>
              <li>
                <a>iPad Trade In</a>
              </li>
              <li>
                <a>Sell Books</a>
              </li>
              <li>
                <a>MacBook Trade In</a>
              </li>
              <li>
                <a>Sell My Apple Watch</a>
              </li>
              <li>
                <a>Trade In Consoles</a>
              </li>
              <li>
                <a>Sell Video Games</a>
              </li>
              <li>
                <a>Sell LEGO®</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">buy</div>
            <ul className="collapse">
              <li>
                <a>Refurbished Phones</a>
              </li>
              <li>
                <a>Refurbished iPhone</a>
              </li>
              <li>
                <a>Refurbished Samsung Phones</a>
              </li>
              <li>
                <a>Refurbished iPad</a>
              </li>
              <li>
                <a>Refurbished Apple Watch</a>
              </li>
              <li>
                <a>Refurbished Games Consoles</a>
              </li>
              <li>
                <a>Cheap DVDs</a>
              </li>
              <li>
                <a>Cheap CDs</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg footer-item">
            <div className="heading collapsed">Social & Regions</div>
            <ul className="collapse">
              <li>
                <a>
                  <picture>
                    <source srcSet="https://media.umbraco.io/heartcore/wpodzkv4/facebook.png?format=webp" />
                    <img
                      src="https://media.umbraco.io/heartcore/wpodzkv4/facebook.png?format=webp"
                      className="icon-width"
                    />
                  </picture>
                  Facebook
                </a>
              </li>
              <li>
                <a>
                  <picture>
                    <source srcSet="https://media.umbraco.io/heartcore/w02pwd4y/youtube.png?format=webp" />
                    <img
                      src="https://media.umbraco.io/heartcore/w02pwd4y/youtube.png?format=webp"
                      className="icon-width"
                    />
                  </picture>
                  YouTube
                </a>
              </li>
              <li>
                <a>
                  <picture>
                    <source srcSet="https://media.umbraco.io/heartcore/wl5prbu5/blog.png?format=webp" />
                    <img
                      src="https://media.umbraco.io/heartcore/wl5prbu5/blog.png?format=webp"
                      className="icon-width"
                    />
                  </picture>
                  Blog
                </a>
              </li>
              <li>
                <a>USA</a>
              </li>
              <li>
                <a>United Kingdom</a>
              </li>
              <li>
                <a>Sell My Phone UK</a>
              </li>
              <li>
                <a>Sell iPhone UK</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-12 coll-sm-12 col-md-10 col-lg-10">
            <div className="copyright">
              <picture>
                <source srcSet="https://media.umbraco.io/heartcore/bftdt2fb/footer-bbb-tp.png?format=webp" />
                <img src="https://media.umbraco.io/heartcore/bftdt2fb/footer-bbb-tp.png?format=webp" />
              </picture>
              <span className="stronger first-line">
                © Copyright decluttr.com 2023
              </span>
              LEGO® is a trademark of the LEGO® Group of companies which does
              not sponsor, authorize or endorse this site.
              <br />
              <span className="smaller">
                *According to our latest price comparison of carriers & direct
                buyback services. Email marketing@decluttr.com to find out more.
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
