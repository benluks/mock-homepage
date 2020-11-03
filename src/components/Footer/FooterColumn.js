import React from "react";

import { BrowserRouter as Router, Link } from "react-router-dom";

function FooterColumn({ headline, links }) {
  return (
    <div className={`footer-column__wrapper ${headline}`}>
      <div className="footer-column__headline">{headline}</div>
      <Router>
        {links.map((link, index) => (
          <Link to={`/${link}`} id={index} key={(link, index)}>
            {link}
          </Link>
        ))}
      </Router>
    </div>
  );
}

export default FooterColumn;
