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

//import home components
import Atf_sections from "../components/Home/sections/Atf_sections";
import Home_section1 from "../components/Home/sections/Home_section1";
import Home_section2 from "../components/Home/sections/Home_section2";
import Home_section3 from "../components/Home/sections/Home_section3";
import Home_section4 from "../components/Home/sections/Home_section4";

const Page = () => {
  return (
    <>
      {/* <!--====== Content ( LHS, Main Content and RHS ) ======--> */}
      <Atf_sections />

      {/* <!--====== Find Health Solutions ======--> */}
      <Home_section1 />

      {/* <!--====== FAQs - The Answers You Need ======--> */}
      <Home_section2 />

      {/* <!--====== Pregenancy Solutions ======--> */}
      <Home_section3 />

      <Home_section4 />
    </>
  );
};

export default Page; // Export the component
