"use client";

import React from "react";

const Title1 = ({ title, icon = "vj-icn-arrow-left", link = "#" }) => (
  <div className="vjl-row">
    <div className="vjl-md-12">
      <h2 className="tp-ttl1 tp-ttl-bg1">
        <a href={link} className="tp-ttl-lnk">
          {title}
          <span className="tp_arrBx">
            <svg className={`vj_icn ${icon}`}>
              <use href={`#${icon}`}></use>
            </svg>
          </span>
        </a>
      </h2>
    </div>
  </div>
);

export default Title1;
