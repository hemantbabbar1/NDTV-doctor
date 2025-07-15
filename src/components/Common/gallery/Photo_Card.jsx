import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TfiGallery } from "react-icons/tfi";

const Photo_Card = ({ photo }) => {
  return (
    <>
      <div className="crd-b">
        <div className="crd_img">
          <div className="img-gr img-gr_a">
            <Link href={photo.link}>
              <Image
                width={320}
                height={180}
                alt="{photo.title}"
                title="{photo.title}"
                src={photo.fullimage}
                border="0"
              />
            </Link>
          </div>
          <div className="crdPhTg_wr">
            <div className="crdPhTg_cn">
              <div className="crdPhTg_icn">
                <TfiGallery className="vj-doctor-photo-icn" />
              </div>
              <span className="crdPhTg_txt">5 images</span>
            </div>
          </div>
        </div>
        <div className="crd_txt-wrp">
          <h3 className="crd_D-ttl2">
            <div className="crd_lnk">
              <Link href={photo.link}>{photo.title}</Link>
            </div>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Photo_Card;
