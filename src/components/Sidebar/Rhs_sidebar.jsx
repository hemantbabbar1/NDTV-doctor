import React from "react";
import Trending_news from "../Common/Trending_news";

const Rhs_sidebar = () => {
  return (
    <>
      {/* <!--=== RHS sidebar ===--> */}

      <div className="ads-wrp">
        <span className="ads-wrp_txt">Advertisement</span>
        <img
          src="/assets/images/rhs_ads.png"
          border="0"
          width="300"
          alt=""
          className="img_ad"
        />
      </div>

      <div className="tbl_cnt_wrp mb-10">
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
                  Dubai Tour Package Costs From Delhi Might Actually Surprise
                  You
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Trending Article --> */}
      <Trending_news />
    </>
  );
};

export default Rhs_sidebar;
