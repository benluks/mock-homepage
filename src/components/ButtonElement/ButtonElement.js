import React from "react";
import "./ButtonElement.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import "../Animations.css";

function Button({ destination, buttonLabel, theme, id }) {
  return (
    <>
      <Router>
        <Link className={`button-container ${theme}`} to={destination}>
          <div className={`button ${theme}`}>
            <div></div>
            <div></div>
            {buttonLabel}
            <MdKeyboardArrowRight id={id} />
          </div>
        </Link>
      </Router>
    </>
  );
}

export default Button;
