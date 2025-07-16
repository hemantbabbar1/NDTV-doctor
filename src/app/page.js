import React from "react";

//SEO for Page Title and description here
export const metadata = {
  title:
    "Health Care News, Health and Fitness Tips, Diet Plan, Home Remedies, Heart, Pregnancy and Sexual Health advice", // <title>
  description:
    "NDTV Doctor is the one stop site for all your health needs providing most credible health information and tips with expert advice on healthy living, diet plans, diabetes, weight loss, heart, cancer, pregnancy, sexual health, beauty care tips, home remedies and benefits.।", // <meta name="description"> टैग के लिए
};

// Home CSS imports
import "../styles/css/pages-css/_home-page-styles.css";
import HomeSections from "../components/Home/HomeSections";

const Page = () => {
  return (
    <>
      <HomeSections />
    </>
  );
};

export default Page; // Export the component
