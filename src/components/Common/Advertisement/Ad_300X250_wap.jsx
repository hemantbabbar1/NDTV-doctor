import React from "react";
import "../../../styles/css/advertisement.css";

const Ad_300X250_wap = () => {
  return (
    <>
      {/*====== Top Advertisement ======*/}
      <div className="ad-art_full2 ad-art_wap">
        <div className="ad-art_rw">
          <div className="ad-art_wr">
            <div className="ad-art_tx1">Advertisement</div>
            <div className="ad-art_img-wr">
              <img
                src="https://tpc.googlesyndication.com/simgad/16376712540458270881" // This should ideally be dynamic or managed by an ad component
                alt="Advertisement"
                border={0}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ad_300X250_wap;
