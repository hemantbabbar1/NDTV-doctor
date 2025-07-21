"use client";

import React from "react";

import { FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { FaRedditAlien } from "react-icons/fa";

const Social_share = ({ item }) => {
  return (
    <>
      <div className="SSR_drp SSR_rgt">
        <div
          className="SSR_btn-lnk"
          onClick={async (e) => {
            // Try native share on mobile
            if (typeof window !== "undefined" && navigator.share) {
              e.preventDefault();
              try {
                await navigator.share({
                  title: item.title,
                  text: item.description,
                  url: item.link,
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
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
                <FaXTwitter className="vj_icn vj_twitter-fill vj_ss-icn" />
                Twitter
              </a>
            </li>
            <li className="SSR_drp-nav-li">
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
                <RiWhatsappFill className="vj_icn vj_whatsapp-fill vj_ss-icn" />
                WhatsApp
              </a>
            </li>
            <li className="SSR_drp-nav-li">
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
                <FaFacebook className="vj_icn vj_facebook-fill vj_ss-icn" />
                Facebook
              </a>
            </li>
            <li className="SSR_drp-nav-li">
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
                <FaFacebook className="vj_icn vj_facebook-fill vj_ss-icn" />
                Facebook
              </a>
            </li>
            <li className="SSR_drp-nav-li">
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
                <FaRedditAlien className="vj_icn vj_reddit-fill vj_ss-icn" />
                Reddit
              </a>
            </li>
            <li className="SSR_drp-nav-li">
              <a className="SSR_drp-nav-lnk" href="javascript:void(0)">
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

export default Social_share;
