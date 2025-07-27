import React from "react";
import "../../../src/Styles/css/elements/calc-metrics.css";
import "../../../src/Styles/css/rhs-advertisement.css";

const Home_rhs = () => {
  return (
    <>
      <div className="vjl2_Rhs CrdSptrLt CrdSptrLt_a vjl-m-non">
        <div>
          {/* <!-- RHS taboola Ads One --> */}
          <a className="ads-wrp mb-15" href="#">
            <span className="ads-wrp_txt">Advertisement</span>
            <img
              className=""
              width="300"
              height="250"
              src="https://drop.ndtv.com/test/hk-ndtv/Ndtv-doctor/v1.8/images/doctor/Group-8382.png"
              alt="img"
            />
          </a>
          {/* <!-- RHS taboola Ad - you may like --> */}
          <div className="tbl_cnt_wrp">
            <div className="tbl_lhs_wrp">
              <div className="tbl_hdr-wrp clearfix">
                <div className="tbl_hdr-lft">
                  <div className="tbl_hdr-ttl">You May Like</div>
                </div>
                <div className="tbl_hdr-rgt">
                  <div className="tbl_hdr-txt">Sponsored links</div>
                </div>
              </div>
              <div className="tbl_ad-wrp">
                {/* <!-- Item --> */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm mb-15">
                    <div className="tbl_ad-img2">
                      <div className="img-gr img-gr_c">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_184%2Cw_220%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/0c9b5669dd10145a9caf083b545f317d.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-ttl">
                      Dubai Tour Package Costs From Delhi Might Actually
                      Surprise You
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- RHS taboola Ad - you may like --> */}
          <a className="ads-wrp mb-15" href="#">
            <span className="ads-wrp_txt">Advertisement</span>
            <img
              className=""
              width="300"
              height="250"
              src="https://drop.ndtv.com/test/hk-ndtv/Ndtv-doctor/v1.8/images/doctor/Group-8383.png"
              alt="img"
            />
          </a>
          {/* <!-- Calculate Matrics --> */}
          <div className="ClcMtr_wr">
            <div className="ClcMtr_cn">
              <div className="ClcMtr_ttl">
                Calculate <br />
                Your Health <br />
                Metrics Instantly!
              </div>
              <div className="ClcMtr_img">
                <img
                  src="https://drop.ndtv.com/test/hk-ndtv/Ndtv-doctor/v1.8/images/doctor/metrics.png"
                  alt="img"
                  width={91}
                  height={79}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_rhs;
