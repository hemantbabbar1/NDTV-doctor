import React from "react";
import { ArticlesProvider } from "@/src/Context/ArticlesContext";

//import Desktop home components css
import "../../Styles/css/pages-css/_home-page-styles.css";

import Atf_sections_server from "./sections/Atf_sections_server";
import Home_section1_server from "./sections/Home_section1_server";
import Home_section2 from "./sections/Home_section2";
import Home_section3_server from "./sections/Home_section3_server";
import Home_section4_server from "./sections/Home_section4_server";
import Home_section5_server from "./sections/Home_section5_server";
import Home_section6_server from "./sections/Home_section6_server";
import Home_section7 from "./sections/Home_section7";
import Home_section8_server from "./sections/Home_section8_server";
import Home_section9_server from "./sections/Home_section9_server";
import Home_section10 from "./sections/Home_section10";
import Home_section11_server from "./sections/Home_section11_server";
import Taboola_home from "../Taboola/Taboola_home";

const DesktopHomeSections = () => {
  return (
    <ArticlesProvider>
      {/* <!--====== Content ( LHS, Main Content and RHS ) ======--> */}
      <Atf_sections_server />
      {/* <!--====== Find Health Solutions ======--> */}
      <Home_section1_server />
      {/* <!--====== FAQs - The Answers You Need ======--> */}
      <Home_section2 />
      {/* <!--====== Pregenancy Solutions ======--> */}
      <Home_section3_server />
      {/* <!--====== Health Solutions ======--> */}
      <Home_section4_server />
      {/* <!--====== Health Solutions 2 ======--> */}
      <Home_section5_server />
      {/* <!--====== Fitness and Excercise ======--> */}
      <Home_section6_server />
      {/* <!--====== Baby Name Calc ======--> */}
      <Home_section7 />
      {/* <!--====== Videos ======--> */}
      <Home_section8_server />
      {/* <!--====== Photo Gallery ======--> */}
      <Home_section9_server />
      {/* <!--====== BMI Calculator======--> */}
      <Home_section10 />
      {/* <!--====== Webstories ======--> */}
      <Home_section11_server />
      {/* <!--====== Taboola Home ======--> */}
      <Taboola_home />
    </ArticlesProvider>
  );
};

export default DesktopHomeSections;
