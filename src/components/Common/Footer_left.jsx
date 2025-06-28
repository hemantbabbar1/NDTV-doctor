import React from "react";
import { FaSquareFacebook } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import Footer_logo from "./Footer_logo";

// Footer_left component
// This component renders the left section of the footer with the NDTV logo and social media links.

const Footer_left = () => {
  return (
    <>
      <div className="FtrLhs Ftr_Mnn">
        <a className="FtrLogo_lk" href="/">
          <Footer_logo />
        </a>

        <div className="FtrScl">
          <div className="FtrScl_ttl">Follow us on</div>

          <div className="FtrScl_wr">
            <a
              href="https://www.facebook.com/ndtv"
              className="FtrScl_lk fb FtrTtp"
            >
              <FaSquareFacebook className="FtrScl_icn" />
              <div className="FtrTip on-bottom">
                <div className="FtrTip_wrp">facebook</div>
              </div>
            </a>
            <a href="https://twitter.com/ndtv" className="FtrScl_lk twt FtrTtp">
              <FaXTwitter className="FtrScl_icn" />
              <div className="FtrTip on-bottom">
                <div className="FtrTip_wrp">twitter</div>
              </div>
            </a>
            <a
              href="https://youtube.com/user/ndtv"
              className="FtrScl_lk yt FtrTtp"
            >
              <FaYoutube className="FtrScl_icn" />
              <div className="FtrTip on-bottom">
                <div className="FtrTip_wrp">Youtube</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/ndtv/?hl=en"
              className="FtrScl_lk inst FtrTtp"
            >
              <RiInstagramFill className="FtrScl_icn" />

              <div className="FtrTip on-bottom">
                <div className="FtrTip_wrp">Instagram</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer_left;
