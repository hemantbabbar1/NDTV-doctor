"use client";

import React from "react";

const Title1 = ({ title, link = "#" }) => (
  <h2 className="tp-ttl1 tp-ttl-bg1">
    <a href={link} className="tp-ttl-lnk">
      {title}
    </a>
  </h2>
);

export default Title1;
