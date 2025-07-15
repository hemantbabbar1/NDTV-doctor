// Global_Nav.jsx
"use client";

import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import Global_Nav_social from "./Global_Nav_social";
import Global_Nav_App from "./Global_Nav_App";

/**
 * Global_Nav Component (Client Component)
 *
 * This component displays the global navigation menu.
 * It receives 'allData' and 'error' as props from a Server Component (e.g., Global_Nav_server).
 * It handles the rendering of dynamic network links and social media icons.
 */
const Global_Nav = ({ allData, error }) => {
  if (error) {
    return (
      <section className="section_two">
        <div className="vjl-cntr err">Error: {error}</div>
      </section>
    );
  }

  return (
    <>
      <div className="m-nv_ul GlbNv_ul">
        <div className="m-nv_li GlbNv_li">
          <div className="GlbNv1_wg">
            <Link
              className="m-nv_lnk GlbNv1_lnk"
              href="https://www.ndtv.com/"
              aria-label="Back to NDTV.com"
            >
              <FiArrowLeft className="GlbNv1_arr-bk" />
              NDTV.com
            </Link>

            <div className="m-nv_lnk GlbNv1_lnk GlbNv1_lnk-all dd-nav_hvr ">
              <span className="GlbNv1_lnk-spn"></span>
              <svg
                className="vj_icn vj-Menu-dots"
                aria-hidden="true"
                focusable="false"
              >
                <use href="#vj-Menu-dots"></use>
              </svg>

              <div className="dd-nav GlbNvDrp_cn">
                <div className="dd-nav_cn GlbNvDrp_wr">
                  <div className="dd-nav_rw GlbNvDrp_rw">
                    <div className="dd-nav_in dd-nav_lk-tb1 GlbNvDrp_col">
                      <div className="GlbNvDrp_Tp">
                        <div className="dd-nav_in-tl GlbNvDrp_ttl">
                          <Link
                            className="dd-nav_in-tl-lk GlbNvDrp_ttl-lk"
                            href="#our-network-section"
                          >
                            Our Network
                          </Link>
                        </div>
                        <ul className="dd-nav_ul GlbNvDrp_ul GlbNvDrp_ul-4">
                          {allData && allData.length > 0 ? (
                            allData.map((data, index) => (
                              <li
                                className="dd-nav_li GlbNvDrp_li"
                                key={data.id || `network-item-${index}`}
                              >
                                <Link
                                  className="m-nv_lnk GlbNvDrp_lnk"
                                  title={data.Title || "NDTV"}
                                  href={data.Link || "#"}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <div
                                    className="GlbNvDrp_icn"
                                    style={{ background: data.EmbedCode }}
                                  ></div>
                                  {data.Title}
                                </Link>
                              </li>
                            ))
                          ) : (
                            <li className="dd-nav_li GlbNvDrp_li">
                              <Link
                                className="m-nv_lnk GlbNvDrp_lnk"
                                title="NDTV"
                                href="https://www.ndtv.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <div
                                  className="GlbNvDrp_icn"
                                  style={{ background: "#333333" }}
                                ></div>
                                NDTV
                              </Link>
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>

                    <div className="dd-nav_in dd-nav_lk-tb1 GlbNvDrp_col2 GlbNvDrp_col-1">
                      <div className="GlbNv_sep"></div>
                      <Global_Nav_App />
                      <Global_Nav_social />
                    </div>
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

export default Global_Nav;
