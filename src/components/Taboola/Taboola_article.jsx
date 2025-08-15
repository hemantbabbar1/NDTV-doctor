"use client";

import React, { forwardRef } from "react";

const Taboola_Article = forwardRef(({ leftSidebar, ...props }, ref) => {
  return (
    <>
      <div className="vjl-row">
        {leftSidebar && <aside className="vjl-Lhs-2">{leftSidebar}</aside>}
        {/*=== RHS taboola ads ===*/}
        <article className={leftSidebar ? "vjl-Mid-2" : "vjl-md-12"}>
          <div className="sp-wrp">
            {/* taboola Ads ( after Story ) */}
            <div className="tbl_cnt_wrp Js-Tbl_ad-ftr" ref={ref}>
              <div className="tbl_hdr-wrp clearfix">
                <div className="tbl_hdr-rgt">
                  <div className="tbl_hdr-txt">
                    <img
                      className="tbl_hdr-lgo"
                      src="https://cdn.taboola.com/static/f8/f89e1763-220d-4e09-ba69-9e040548fb7a.svg"
                      alt="taboolalogo"
                    />
                  </div>
                </div>
              </div>
              {/* Two Grid */}
              <div className="tbl_ad-grd tbl_ad_grd-two">
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/static/52/52ad682a-2a75-490d-8faa-36fc6a7e3681.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Build a Career in ML and Artificial Intelligence.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">upGrad</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/9df0a5fe0ab3ade44bc8fd8a9973246a.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Become A Data Scientist. No Technical Background
                        Required.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Great Learning</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/940597e41b88e761d681e37e828830a4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        PG Diploma in Data Science.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">
                          upGrad&amp; IIIT Bangalore
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/52083aaff8d5a2736f36c5916d835f50.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Become A Data Scientist. No Technical Background
                        Required.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Great Learning</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Three Grid */}
              <div className="tbl_ad-grd tbl_ad_grd-thr">
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/54586805ff560ccd2dd1a2c69e9d1af6.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        A Wealth Creation Partner That Understands You and Your
                        Dreams
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">
                          Supertech Capetown Sec 74, Noida
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/4392f35e3806635366233629c011710f.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        How're Professionals coping up with Marketing in the new
                        age
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">NMIMS Global Access</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/h_363,w_580,c_pad,b_auto/http%3A//cdn.taboola.com/libtrc/static/thumbnails/ca58a4e9996de767e9e8a87873f0b7ff.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Earn Money While You Sleep! I earn my Rs.35,000 a day
                        and I'm satisfied
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Olymtrade</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/7d89654d9b9317ed1c534c64c464b9f0.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Next-Gen Creation And Communication Platform
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Lark</span>
                        <span className="tbl_sub-txt">
                          Collaboration Platform
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/d15a4c6fd5a6168ee449999f56385d88.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Tired Of Recurring Infections In Your Baby? Learn More
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Danone India</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/3164f9b6ba50d1c36c8ff3258bfbfa04.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Design Thinking | Stanford Executive Education
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Olymtrade</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Two Grid */}
              <div className="tbl_ad-grd tbl_ad_grd-two">
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/static/52/52ad682a-2a75-490d-8faa-36fc6a7e3681.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Build a Career in ML and Artificial Intelligence.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">upGrad</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/9df0a5fe0ab3ade44bc8fd8a9973246a.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Become A Data Scientist. No Technical Background
                        Required.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Great Learning</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/940597e41b88e761d681e37e828830a4.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        PG Diploma in Data Science.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">
                          upGrad&amp; IIIT Bangalore
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_245%2Cw_440%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/52083aaff8d5a2736f36c5916d835f50.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Become A Data Scientist. No Technical Background
                        Required.
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Great Learning</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Three Grid */}
              <div className="tbl_ad-grd tbl_ad_grd-thr">
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/54586805ff560ccd2dd1a2c69e9d1af6.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        A Wealth Creation Partner That Understands You and Your
                        Dreams
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">
                          Supertech Capetown Sec 74, Noida
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/4392f35e3806635366233629c011710f.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        How're Professionals coping up with Marketing in the new
                        age
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">NMIMS Global Access</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/4392f35e3806635366233629c011710f.png"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Earn Money While You Sleep! I earn my Rs.35,000 a day
                        and I'm satisfied
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Olymtrade</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/7d89654d9b9317ed1c534c64c464b9f0.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Next-Gen Creation And Communication Platform
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Lark</span>
                        <span className="tbl_sub-txt">
                          Collaboration Platform
                        </span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/d15a4c6fd5a6168ee449999f56385d88.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Tired Of Recurring Infections In Your Baby? Learn More
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Danone India</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Item */}
                <div className="tbl_ad_grd-itm">
                  <div className="tbl_ad-itm">
                    <div className="tbl_ad-img">
                      <div className="img-gr img-gr_a">
                        <img
                          className="tbl_img-img"
                          src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_187%2Cw_280%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboola.com/libtrc/static/thumbnails/3164f9b6ba50d1c36c8ff3258bfbfa04.jpg"
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="tbl_ad-cnt">
                      <div className="tbl_ad-ttl">
                        Design Thinking | Stanford Executive Education
                      </div>
                      <div className="tbl_ad-txt">
                        <span className="tbl_sub-txt">Olymtrade</span>
                        <span className="tbl_sub-txt">Sponsored</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
});

export default Taboola_Article;
