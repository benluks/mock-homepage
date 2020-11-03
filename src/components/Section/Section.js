import React, { useEffect } from "react";
import Button from "../ButtonElement/ButtonElement";
import "./Section.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Section({ id, theme, img, headline, description }) {
  const themes = ["th1", "th2", "th3"];

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className={`section ${themes[theme - 1]}`} id={id}>
        <div className={`section-container ${themes[theme - 1]}`}>
          <div className="image-container" data-aos="fade-right">
            <img alt="" src={img} />
          </div>

          <div className="text-container" data-aos="fade-up">
            <h1>{headline}</h1>
            <p>{description}</p>
            <Button
              buttonLabel="Learn More"
              destination="/learnmore"
              theme={`learnmore ${themes[theme - 1]}`}
              id="learn-more"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
