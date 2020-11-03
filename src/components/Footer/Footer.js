import React from "react";
import "./Footer.css";
import { FooterColumn1, FooterColumn2, PrivacyStatement } from "./FooterData";
import FooterColumn from "./FooterColumn";
import CountriesSelect from "./CountriesSelect";
import { ImFacebook, ImTwitter, ImLinkedin2 } from "react-icons/im";

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-links__container">
          <div className="footer__col1">
            <div className="select-country">
              <CountriesSelect />
            </div>
            <div className="footer__contact">
              <FooterColumn {...FooterColumn1} />
            </div>
            <div className="social-media__container">
              <a href="facebook.com">
                <ImFacebook />
              </a>
              <a href="http//:www.twitter.com">
                <ImTwitter />
              </a>
              <a href="linkedin.com">
                <ImLinkedin2 />
              </a>
            </div>
          </div>
          <div className="footer__col2">
            <FooterColumn {...FooterColumn2} />
          </div>
        </div>
        <div className="footer-legal__container">
          <div className="foot-legal__links"></div>
          <div className="footer-legal__statement">{PrivacyStatement}</div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
