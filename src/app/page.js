import React from "react";

// Home CSS imports
import "../styles/css/grid/main-card-grid1.css";
import "../styles/css/card-widget/lines-spacing-padding.css";
import "../styles/css/elements/tittle-tabs-color.css";
import "../styles/css/elements/list-news.css";
import "../styles/css/cards/cards-hm.css";
import "../styles/css/cards/cards-content.css";
import "../styles/css/cards/doctor-cards-content.css";
import "../styles/css/cards/card-b.css";
import "../styles/css/cards/card-c.css";
import "../styles/css/cards/card-c_v1.css";
import "../styles/css/cards/card-c_v2.css";
import "../styles/css/cards/card-d.css";
import "../styles/css/cards/card-d_v1.css";
import "../styles/css/cards/card-h.css";
import "../styles/css/cards/card-bt.css";
import "../styles/css/cards/card-image-transition.css";
import "../styles/css/pages-css/home-edits.css";
import "../styles/css/helper.css";

//import home components
import Atf_sections from "../components/Home/sections/Atf_sections";
import Home_section1_server from "../components/Home/sections/Home_section1_server";
import Home_section2 from "../components/Home/sections/Home_section2";
import Home_section3_server from "../components/Home/sections/Home_section3_server";
import Home_section4_server from "../components/Home/sections/Home_section4_server";
import Home_section5_server from "../components/Home/sections/Home_section5_server";
import Home_section6_server from "../components/Home/sections/Home_section6_server";
import Home_section7 from "../components/Home/sections/Home_section7";
import Home_section8_server from "../components/Home/sections/Home_section8_server";
import Home_section9_server from "../components/Home/sections/Home_section9_server";
import Home_section10 from "../components/Home/sections/Home_section10";
import Home_section11_server from "../components/Home/sections/Home_section11_server";
import Taboola_home from "../components/taboola/Taboola_home";

const Page = () => {
  return (
    <>
      {/* <!--====== Content ( LHS, Main Content and RHS ) ======--> */}
      <Atf_sections />

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
    </>
  );
};

export default Page; // Export the component
