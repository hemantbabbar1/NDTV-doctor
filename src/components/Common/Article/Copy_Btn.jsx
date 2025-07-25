"use client";

import React, { useState } from "react";

const Copy_Btn = ({ urlToCopy = "" }) => {
  const [copied, setCopied] = useState(false); // कॉपी स्थिति को ट्रैक करने के लिए

  const handleCopyClick = async () => {
    if (!urlToCopy) {
      console.warn("Copy_Btn: No URL provided in urlToCopy prop.");
      return;
    }

    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(urlToCopy);
        setCopied(true);

        //For 5 Seconds Delay
        setTimeout(() => {
          setCopied(false);
        }, 4000); //
      } else {
        console.warn(
          "Copy_Btn: Clipboard API not supported. Please copy manually."
        );
      }
    } catch (err) {
      console.error("Copy_Btn: Failed to copy URL to clipboard:", err);
      setCopied(false);
    }
  };

  return (
    <>
      <div className="CpyLk_wr">
        <button
          type="button"
          title="copy"
          className={`CpyLk_lk ${copied ? "js_Cpyd" : ""}`}
          onClick={handleCopyClick}
          style={{
            border: "none",
            background: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <div className="CpyLk_icn-wr">
            <svg className="vj_icn vj_copy-i">
              <use xlinkHref="#vj_copy-i" />
            </svg>
          </div>
          <div className="CpyLk_tt-wr">
            {copied && <div className="CpyLk_tt-tx">Link Copied!</div>}
          </div>
        </button>
      </div>
    </>
  );
};

export default Copy_Btn;
