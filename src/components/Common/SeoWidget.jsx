import React from "react";
import "../../Styles/css/widgets/seo-text-bottom.css";

const SeoWidget = ({ articleData, error }) => {
  const { tags = [] } = articleData || {};
  articleData;

  return (
    <>
      <div className="SoFl_wp">
        <div className="SoFl_cn">
          <div className="SoFl_wr">
            <div className="SoFl_cr">
              <div className="SoFl_cr-lf">
                <div className="SoFl_cr-lf-cnt">
                  <div className="SoFl_cr-tx">
                    <p className="mb-0">
                      Track
                      <a href="https://www.ndtv.com/latest">Latest News</a>
                      Live on NDTV.com and get
                      <a href="https://www.ndtv.com">news</a> updates from
                      <a href="https://www.ndtv.com/india">India </a> and around
                      the
                      <a href="https://www.ndtv.com/world-news">world</a>
                    </p>
                  </div>
                  <div className="SoFl_cr-lf-r2">
                    <div className="SoFl_ss_cnt">
                      <div className="SoFl_ss_h pl-0"> Follow us:</div>
                      <div className="SoFl_ss-ics pl-0">
                        <a
                          href="https://twitter.com/ndtv"
                          target="_blank"
                          className="SoFl_ss-ic SoFl_ss-ic-tw"
                        >
                          <svg className="vj_icn vj_twitter-art">
                            <use xlinkHref="#vj_twitter-art" />
                          </svg>
                        </a>
                        <a
                          href="https://www.youtube.com/user/ndtv"
                          target="_blank"
                          className="SoFl_ss-ic SoFl_ss-ic-yt"
                        >
                          <svg className="vj_icn vj_youtube-art">
                            <use xlinkHref="#vj_youtube-art" />
                          </svg>
                        </a>
                        <a
                          href="https://www.whatsapp.com/channel/0029Va4lixw7z4kcvZI9JM12"
                          target="_blank"
                          className="SoFl_ss-ic SoFl_ss-ic-wt"
                        >
                          <svg className="vj_icn vj_whatsapp-art">
                            <use xlinkHref="#vj_whatsapp-art" />
                          </svg>
                        </a>
                        <a
                          href="https://www.instagram.com/ndtv/"
                          target="_blank"
                          className="SoFl_ss-ic SoFl_ss-ic-in"
                        >
                          <svg className="vj_icn vj_instagram-art">
                            <use xlinkHref="#vj_instagram-art" />
                          </svg>
                        </a>
                        <a
                          href="https://www.facebook.com/ndtv"
                          target="_blank"
                          className="SoFl_ss-ic SoFl_ss-ic-fc"
                        >
                          <svg className="vj_icn vj_facebook-art">
                            <use xlinkHref="#vj_facebook-art" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SoFl_cr-rg">
                <div className="SoFl_cr-rg-cr">
                  {/* <a className="SoFl_cr-rg-lk" href="#">
                    Hair Fall
                  </a>
                  <a className="SoFl_cr-rg-lk" href="#">
                    Diabetes Cure
                  </a>
                  <a className="SoFl_cr-rg-lk" href="#">
                    Pregency Cure
                  </a>
                  <a className="SoFl_cr-rg-lk" href="#">
                    Cancer Treatment &amp; Care
                  </a>
                  <br /> */}

                  {tags}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SeoWidget;
