"use client";

import React from "react";

const ShowMoreWAP = () => {
  const ShowMoreWAPToogle = () => {
    // Access the <body> element directly using document.body
    // classList.toggle() adds the class if it's not present, and removes it if it is.
    document.body.classList.toggle("Art-exp_less");
  };

  return (
    <div className="Art-exp_bt-wr">
      <div className="Art-exp_bt-lk Art-exp_bt-dn" onClick={ShowMoreWAPToogle}>
        <span className="Art-exp_bt-lk-tx">Show full article</span>
        <span className="Art-exp_bt-ic-wr">
          <svg className="Art-exp_bt-ic vj_icn vj_arrow-down">
            <use xlinkHref="#vj_arrow-down"></use>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default ShowMoreWAP;
