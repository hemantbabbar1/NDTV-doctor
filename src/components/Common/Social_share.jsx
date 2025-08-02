"use client";

import React from "react";

import { FaXTwitter, FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";

import "../../Styles/css/elements/social-dropdown.css";

const Social_share = ({ item, dropDirection }) => {
  if (!item) {
    return null; // Handle cases where item is undefined
  }

  // This allows for different styles based on the direction of the dropdown
  // For example, "top" can be used to position the dropdown above the button
  const containerClass = `SSR_drp SSR_rgt ${
    dropDirection === "top" ? "SSR_drp-nav-tp" : ""
  }`;

  return (
    <div className={containerClass}>
      <a className="SSR_btn-lnk">
        <svg className="SSR_icn vj_icn vj_share2">
          <use xlinkHref="#vj_share2" />
        </svg>
        <span className="SSR_btn-tx"> Share</span>
      </a>
      <div className="SSR_drp-nav SSR_WEB">
        <ul className="SSR_drp-nav-ul">
          <li className="SSR_drp-nav-li">
            <a
              className="SSR_drp-nav-lnk"
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                item.link
              )}&text=${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="vj_icn vj_twitter-fill vj_ss-icn" />
              Twitter
            </a>
          </li>
          <li className="SSR_drp-nav-li">
            <a
              className="SSR_drp-nav-lnk"
              href={`https://wa.me/?text=${encodeURIComponent(
                item.title + " " + item.link
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <RiWhatsappFill className="vj_icn vj_whatsapp-fill vj_ss-icn" />
              WhatsApp
            </a>
          </li>
          <li className="SSR_drp-nav-li">
            <a
              className="SSR_drp-nav-lnk"
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                item.link
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="vj_icn vj_facebook-fill vj_ss-icn" />
              Facebook
            </a>
          </li>
          <li className="SSR_drp-nav-li">
            <a
              className="SSR_drp-nav-lnk"
              href={`https://reddit.com/submit?url=${encodeURIComponent(
                item.link
              )}&title=${encodeURIComponent(item.title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaRedditAlien className="vj_icn vj_reddit-fill vj_ss-icn" />
              Reddit
            </a>
          </li>
          <li className="SSR_drp-nav-li">
            <a
              className="SSR_drp-nav-lnk"
              href={`mailto:?subject=${encodeURIComponent(
                item.title
              )}&body=${encodeURIComponent(item.link)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="vj_icn vj_email-fill vj_ss-icn">
                <use xlinkHref="#vj_email-fill" />
              </svg>
              Email
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Social_share;
