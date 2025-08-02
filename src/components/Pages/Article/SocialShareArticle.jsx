"use client";

import React from "react";

import { FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";

import "../../../Styles/css/elements/social-dropdown.css";

const SocialShareArticle = ({ articleData, error }) => {
  // Data Destructure
  const { title = "", excerpt = "", link = "" } = articleData || {};

  return (
    <>
      <div className="SSR_drp SSR_rgt">
        <div
          className="SSR_btn-lnk"
          onClick={async (e) => {
            // Try native share on mobile
            if (typeof window !== "undefined" && navigator.share && link) {
              e.preventDefault();
              try {
                await navigator.share({
                  title: title,
                  text: excerpt,
                  url: link,
                });
              } catch (err) {
                // User cancelled or error
              }
            }
            // Otherwise, let dropdown open (desktop)
          }}
        >
          <svg className="SSR_icn vj_icn vj_share2">
            <use xlinkHref="#vj_share2" />
          </svg>
          <span className="SSR_btn-tx"> Share</span>
        </div>
        <div className="SSR_drp-nav SSR_WEB">
          <ul className="SSR_drp-nav-ul">
            <li className="SSR_drp-nav-li">
              <a
                className="SSR_drp-nav-lnk"
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                  link
                )}&text=${encodeURIComponent(title)}`}
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
                  title + " " + link
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
                  link
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
                  link
                )}&title=${encodeURIComponent(title)}`}
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
                  title
                )}&body=${encodeURIComponent(link)}`}
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
    </>
  );
};

export default SocialShareArticle;
