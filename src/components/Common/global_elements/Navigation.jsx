"use client";

import React from "react";
import Link from "next/link";

import "../../../Styles/css/header/main-nav.css";
import "../../../Styles/css/header/main-nav-color.css";
import "../../../Styles/css/header/doctor/base/main-nav-color.css";
import "../../../Styles/css/header/list-dropdown.css";

const Navigation = ({ menuLinks, error }) => {
  if (error) {
    return (
      <nav className="m-nv_lf">
        <ul className="m-nv_ul">
          <li className="m-nv_li text-red-600">
            <p>Error loading navigation: {error}</p>
          </li>
        </ul>
      </nav>
    );
  }

  // if no meniu in the json this msg will be show
  if (!menuLinks || menuLinks.length === 0) {
    return (
      <nav className="m-nv_lf">
        <ul className="m-nv_ul">
          <li className="m-nv_li text-gray-500">
            <p>No navigation links available.</p>
          </li>
        </ul>
      </nav>
    );
  }

  return (
    <nav className="m-nv_lf">
      <ul className="m-nv_ul">
        {menuLinks.map((link) => (
          <li className="m-nv_li dd-nav_hvr" key={link.id}>
            <Link className="m-nv_lnk" title={link.name} href={link.path}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
