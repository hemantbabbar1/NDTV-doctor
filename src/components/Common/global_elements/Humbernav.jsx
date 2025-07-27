"use client";

import React from "react";
import "../../../Styles/css/header/setting-dropdown.css";

export const Humbernav = () => {
  // This function will be called when the trigger is clicked.
  const toggleBodyClass = () => {
    // Access the <body> element directly using document.body
    // classList.toggle() adds the class if it's not present, and removes it if it is.
    document.body.classList.toggle("js_sid-nav");
  };

  return (
    <>
      <div className="brw-nav">
        {/* Attach the toggleBodyClass function to the onClick event */}
        <div
          className="sid-nav-icn_lnk side-nav-trigger"
          onClick={toggleBodyClass}
        >
          <div className="sid-nav-icn_wrp">
            <svg className="vj_icn vj_menu">
              <use xlinkHref="#vj_menu"></use>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Humbernav;
