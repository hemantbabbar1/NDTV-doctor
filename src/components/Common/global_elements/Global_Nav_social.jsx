import React from "react";
import Link from "next/link";
import { FaXTwitter, FaYoutube, FaFacebook } from "react-icons/fa6";
import { FaLinkedin, FaSnapchatSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { BsFillThreadsFill } from "react-icons/bs";

const Global_Nav_social = () => {
  return (
    <>
      <div className="GlbNvScl">
        <div className="dd-nav_in-tl GlbNvDrp_ttl">
          <Link
            className="dd-nav_in-tl-lk GlbNvDrp_ttl-lk"
            href="#social-media-section"
          >
            Follow us on
          </Link>
        </div>

        <div className="GlbNvScl_wr">
          <Link
            href="https://twitter.com/ndtv"
            className="GlbNvScl_lk twt FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on X (formerly Twitter)"
          >
            <FaXTwitter className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://www.youtube.com/ndtv"
            className="GlbNvScl_lk yt FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on YouTube"
          >
            <FaYoutube className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://www.instagram.com/ndtv"
            className="GlbNvScl_lk inst FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on Instagram"
          >
            <AiFillInstagram className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12"
            className="GlbNvScl_lk whatsapp FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on WhatsApp Channel"
          >
            <RiWhatsappFill className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://www.facebook.com/ndtv"
            className="GlbNvScl_lk fb FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on Facebook"
          >
            <FaFacebook className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://in.linkedin.com/company/ndtv"
            className="GlbNvScl_lk linkedin FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on LinkedIn"
          >
            <FaLinkedin className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://www.threads.net/@ndtv"
            className="GlbNvScl_lk threads FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on Threads"
          >
            <BsFillThreadsFill className="GlbNvScl_icn" />
          </Link>
          <Link
            href="https://story.snapchat.com/p/0ec7a62d-e215-4c0c-94f0-ac70d8355798"
            className="GlbNvScl_lk snapchat FtrTtp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow NDTV on Snapchat"
          >
            <FaSnapchatSquare className="GlbNvScl_icn" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Global_Nav_social;
