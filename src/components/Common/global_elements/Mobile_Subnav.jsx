"use client";

import React from "react";
import Link from "next/link";

import "../../../styles/css/header/sub-nav.css";
import "../../../styles/css/header/sub-nav-mb.css";
// import "../../../styles/css/header/sub-bottom-nav.css";

export const Mobile_Subnav = ({ menuLinks, error }) => {
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <>
      <div className="MSub-nav_cn">
        <div className="MSub-nav">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12 m_pr-0" style={{ display: "flex" }}>
                <div className="MSub-nav_wr">
                  <div className="hr-scroll MSub-nav_hr-scr">
                    <ul className="hr-scroll__content MSub-nv_ul">
                      {menuLinks &&
                        Array.isArray(menuLinks) &&
                        menuLinks.map((link) => (
                          <li className="MSub-nv_li" key={link.id}>
                            <Link
                              className="MSub-nav_lnk"
                              alt={link.name}
                              title={link.name}
                              href={link.path}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile_Subnav;
