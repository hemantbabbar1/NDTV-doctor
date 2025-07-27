"use client";
import React, { useState, useEffect } from "react";
import Footer_copyright from "./Footer_copyright";
import { fetchData } from "../../../../src/Utils/fetchData";

const Footer_right = () => {
  const [mainLinks, setMainLinks] = useState([]);
  const [extraLinks, setExtraLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFooterLinks = async () => {
      try {
        console.log("Fetching main links from Footer2016Bottom.json");
        const mainLinksData = await fetchData(
          "/data/Footer2016Bottom.json", // API endpoint
          "public/data/Footer2016Bottom.json" // Static file path
        );
        console.log("Fetched main links data:", mainLinksData);
        setMainLinks(mainLinksData);

        console.log("Fetching extra links from footernewhp_hp2023_footer.json");
        const extraLinksData = await fetchData(
          "/data/footernewhp_hp2023_footer.json", // API endpoint
          "public/data/footernewhp_hp2023_footer.json" // Static file path
        );
        console.log("Fetched extra links data:", extraLinksData);
        setExtraLinks(extraLinksData);
      } catch (err) {
        console.error("Error fetching footer links:", err);
        setError("Failed to load footer links.");
      } finally {
        setLoading(false);
      }
    };

    fetchFooterLinks();
  }, []);

  // Handle loading and error states
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }

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
