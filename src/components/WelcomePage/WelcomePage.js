import React from "react";
import Video from "../../videos/video.mp4";
import Button from "../ButtonElement/ButtonElement";
import "./WelcomePage.css";
import "../Animations.css";

function WelcomePage() {
  return (
    <>
      <div className="welcome-wrapper">
        <video autoPlay muted loop src={Video} id="welcomeVideo" />
        <div className="welcome-content__wrapper">
          <div className="header-wrapper">
            <h1 className="main-header">
              Europe's most trusted provider of things and stuff.
            </h1>
            <Button
              destination="/signup"
              buttonLabel="Get involved"
              theme="learnmore"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default WelcomePage;
