"use client";
import React from "react";
import { useFooterLinks } from "@/src/context/FooterLinksContext";
import Footer_copyright from "./footer/Footer_copyright";

const Footer_right = () => {
  const { mainLinks, extraLinks, loading, error } = useFooterLinks();
  // Check if links is an array and has items
  //if (!Array.isArray(links) || links.length === 0) return null; // If no links, return nothing or a placeholder

  // Handle loading and error states
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  // If still loading, you can return a loading state
  if (loading) {
    return null;
  }

  // Example debug log
  //console.log("Footer_right links:", mainLinks);

  return (
    <>
      <div className="FtrRhs">
        <div className="FtrRhs_wr">
          <div className="FtrLks_cn">
            <div className="FtrLks_wr">
              <ul className="FtrLks_ul">
                {mainLinks.map((item, idx) => (
                  <li className="FtrLks_li" key={item.link || idx}>
                    <a
                      className="FtrLks_lk"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="FtrLks_cn Ftr_Mnn">
            <div className="FtrLks_ttl"> NDTV Group Sites</div>
            <div className="FtrLks_wr">
              <ul className="FtrLks_ul">
                {extraLinks.map((item, idx) => (
                  <li className="FtrLks_li" key={item.link || idx}>
                    <a
                      className="FtrLks_lk"
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.Title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Footer_copyright />
      </div>
    </>
  );
};

export default Footer_right;
