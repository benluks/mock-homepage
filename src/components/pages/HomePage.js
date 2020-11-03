import React from "react";
import Navbar from "../Navbar/Navbar";
import Section from "../Section/Section";
import WelcomePage from "../WelcomePage/WelcomePage";
import { Section1, Section2, Section3 } from "../Section/Data";
import Footer from "../Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <WelcomePage />
      <Section {...Section1} />
      <Section {...Section2} />
      <Section {...Section3} />
      <Footer />
    </>
  );
}
