import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../../../Styles/css/webstories/webstories.css";
import Social_share from "../Social_share";

const Webstories_card = ({ webstory, dropDirection }) => {
  return (
    <>
      <div className="WsNsLst-a">
        <div className="WsNsLst-cn">
          <Link className="WsNsLst_img" target="_blank" href={webstory.link}>
            <div className="img-gr">
              <Image
                className="lz_img WsNsLst_img-full"
                alt={webstory.title}
                src={webstory.thumb_image}
                pinger-seen="true"
                width={247}
                height={297}
                loading="lazy"
                placeholder="blur"
                blurDataURL={webstory.thumb_image}
              />
            </div>
            <div className="WsNsLst_pg-wrp WsNsLst_pg-bt">
              <div className="WsNsLst_pg">
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
                <em />
              </div>
            </div>
          </Link>
          <div className="WsNsLst_txt-wrp">
            <h2 className="WsNsLst_ttl">
              <Link
                className="WsNsLst_ttl-lk"
                href={webstory.link}
                target="_blank"
              >
                {webstory.title}
              </Link>
            </h2>
            <div className="WsNsLst_bt">
              <div className="WsNsLst_dt">{webstory.pubDate}</div>

              <Social_share
                item={{ link: webstory.link, title: webstory.title }}
                dropDirection={dropDirection}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Set default props
Webstories_card.defaultProps = {
  dropDirection: "bottom", // Default value for dropDirection
};

export default Webstories_card;
