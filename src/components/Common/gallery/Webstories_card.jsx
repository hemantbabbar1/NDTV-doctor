import React from "react";
import Image from "next/image";
import Link from "next/link";

const Webstories_card = ({ webstory }) => {
  return (
    <>
      <div className="crd-h crd-b_h-at res_crd-1">
        <Link href={webstory.link} className="WsNsLst-lnk" target="_blank">
          <div className="crd_img">
            <div className="img-gr img-gr_e">
              <Image
                className=""
                alt={webstory.title}
                title={webstory.title}
                src={webstory.full_image}
                width={258}
                height={315}
              />
            </div>
            <div className="WsNsLst_pg-wrp WsNsLst_pg-bt">
              <div className="WsNsLst_pg">
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
                <em></em>
              </div>
            </div>
          </div>

          <div className="crd_txt-wrp crd-b_Txbg1">
            <h3 className="WsNsLst_ttl">
              <span className="crd_lnk">{webstory.title}</span>
              <div className="WsNsLst_bt">
                <span className="WsNsLst_dt">{webstory.pubDate}</span>
              </div>
            </h3>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Webstories_card;
