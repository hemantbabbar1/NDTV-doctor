import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Side_nav_social = () => {
  return (
    <>
      <li className="snv-two">
        <div className="sid-nav_li sid-nav_li-ttl">Follow Us On</div>
        <ul className="snv_cn-ul">
          <li className="snv_cn-li">
            <a
              className="snv_cn-lnk ripple"
              href="https://www.facebook.com/ndtv"
              target="_blank"
            >
              <div className="snv_ic-wrp">
                <FaSquareFacebook className="vj_icn vj_auto" />
              </div>
              Facebook
            </a>
          </li>
          <li className="snv_cn-li">
            <a
              className="snv_cn-lnk ripple"
              href="https://twitter.com/ndtv"
              target="_blank"
            >
              <div className="snv_ic-wrp">
                <FaXTwitter className="vj_icn vj_world-web" />
              </div>
              Twitter
            </a>
          </li>
          <li className="snv_cn-li">
            <a
              className="snv_cn-lnk ripple"
              href="https://www.instagram.com/ndtv/?hl=en"
              target="_blank"
            >
              <div className="snv_ic-wrp">
                <RiInstagramFill className="vj_icn vj_cities" />
              </div>
              Instagram
            </a>
          </li>

          <li className="snv_cn-li">
            <a
              className="snv_cn-lnk ripple"
              href="https://www.linkedin.com/company/ndtv"
              target="_blank"
            >
              <div className="snv_ic-wrp">
                <FaLinkedinIn className="vj_icn " />
              </div>
              LinkedIn
            </a>
          </li>

          <li className="snv_cn-li">
            <a
              className="snv_cn-lnk ripple"
              href="https://www.youtube.com/user/ndtv"
            >
              <div className="snv_ic-wrp">
                <FaYoutube className="vj_icn vj_south" />
              </div>
              YouTube
            </a>
          </li>
        </ul>
      </li>
    </>
  );
};

export default Side_nav_social;
