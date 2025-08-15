import React from "react";
import Image from "next/image";
import Link from "next/link";
import Social_share from "../Social_share";

import "../../../Styles/css/Photos/photo-gallery-card.css";
import timeStampConvert from "@/src/Utils/timeStampConvert";

const VideoCard = ({ videos, dropDirection }) => {
  return (
    <div className="PhtCrd_wr">
      <div className="PhtCrd_cn">
        <Link className="PhtCrd_img" href={videos.link}>
          {/* image */}
          <div className="img-gr img-gr_a">
            <Image
              className="lz_img WsNsLst_img-full"
              alt={videos.title}
              src={videos["media:thumbnail"]}
              pinger-seen="true"
              width={247}
              height={297}
              loading="lazy"
              placeholder="blur"
              blurDataURL={videos["media:thumbnail"]}
            />
          </div>
          <div className="VdTgIm-Crd">
            <div className="VdTgIm-Crd_lt">
              <span className="VdTgIm-Crd_vd">
                <svg className="vj_icn vj_play">
                  <use xlinkHref="#vj_play" />
                </svg>
                {timeStampConvert(videos["media:duration"])}
              </span>
            </div>
          </div>
        </Link>
        <div className="PhtCrd_txt-wr">
          <h3 className="PhtCrd_ttl">
            <Link href={videos.link} className="PhtCrd_ttl-lnk">
              <span className="PhtCrd_lnk">{videos.title}</span>
            </Link>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
