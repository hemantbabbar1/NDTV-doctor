import React from "react";
import Social_share_article from "../Social_share_article";
import Image from "next/image";

const Article = ({ articleData, error }) => {
  // If there's an error or no articleData, display a message
  if (error) {
    return (
      <div className="error-message">
        Error: {error.message || "Failed to load article."}
      </div>
    );
  }

  // Destructure relevant data from the articleData prop for easier access
  const {
    title,
    excerpt,
    body,
    image_full,
    image_caption,
    byline,
    published,
    modified,
    primary_category,
    story_word_count,
    tags,
    // Add other fields you want to display
  } = articleData;

  // Function to format the date string
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    try {
      // Parse the date string and format it
      const date = new Date(dateTimeString);
      return date.toLocaleString("en-US", {
        //weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata", // Set the timezone specifically to Asia/Kolkata (IST)
        //timeZoneName: "short", // To display "IST"
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return dateTimeString; // Return original if formatting fails
    }
  };

  return (
    <>
      <div className="sp-wrp">
        {/*====== Story Starts ======*/}
        <div className="sp-hd" id="TxSS_selct">
          <div className="sp-cn pg-str-com js-ad-section">
            {/* Story Headline */}
            <h1 className="sp-ttl">{title || "No Title Available"}</h1>
            {/* Story description */}
            <h2 className="sp-descp">
              {excerpt || "No Excerpt Available"}
              {/* Fallback if excerpt is missing */}
            </h2>
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

            {/* Post By */}
            <nav className="pst-by">
              <ul className="pst-by_ul">
                <li className="pst-by_li">
                  <span className="pst-by_txt">By</span>
                  <span className="pst-by_lnk">{byline || "NDTV Staff"}</span>
                  {/* Display author */}
                </li>
                <li className="pst-by_li">{primary_category}</li>
                <li className="pst-by_li">
                  <span className="pst-by_lnk">
                    {formatDateTime(published)} IST
                  </span>
                  {/* Display published date */}
                  <div className="PbdDt_wr dd-nav_one dd-nav_hvr">
                    <svg className="vj_icn PbdDt_i-icn vj_info">
                      <use xlinkHref="#vj_info" />
                    </svg>
                    <div className="dd-nav">
                      {/* Inner Link 1 */}
                      <div className="dd-nav_in">
                        <ul className="dd-nav_ul">
                          <li className="dd-nav_li">
                            <div className="PbdDt_txt-rw">
                              <svg className="PbdDt_icn vj_icn vj_pencil">
                                <use xlinkHref="#vj_pencil" />
                              </svg>
                              <div className="PbdDt_txt-wr">
                                <span className="PbdDt_txt1">Published On</span>
                                <span className="PbdDt_txt2">
                                  {formatDateTime(published)} IST
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="dd-nav_li">
                            <div className="PbdDt_txt-rw">
                              <svg className="PbdDt_icn vj_icn vj_clock">
                                <use xlinkHref="#vj_clock" />
                              </svg>
                              <div className="PbdDt_txt-wr">
                                <span className="PbdDt_txt1">
                                  Last Updated On
                                </span>
                                <span className="PbdDt_txt2">
                                  {formatDateTime(modified)} IST
                                  {/* Display last modified date */}
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
            {/* Social Share */}
            <div className="ss ss_pg">
              {/* Author */}
              <div className="pst_opt">
                <div className="pst_opt-lft">
                  {/* Read Time - Dynamically rendered from JSON */}
                  <div className="read-tim">
                    <span className="read-tim_txt">Read Time</span>
                    <span className="read-tim_min">
                      {story_word_count?.readtime} min
                    </span>
                    {/* Access readtime from story_word_count */}
                  </div>
                </div>
                <div className="pst_icn-btn">
                  {/* social dropdown and on WAP native */}
                  <Social_share_article />
                  {/* Read in aap */}
                  <a className="RdAp_bt" href="#">
                    Read In App
                  </a>
                  {/*Copy Link*/}
                  <div className="CpyLk_wr">
                    <a
                      href="javaScript:void(0)"
                      title="copy"
                      className="CpyLk_lk"
                    >
                      <div className="CpyLk_icn-wr ">
                        <svg className="vj_icn vj_copy-i">
                          <use xlinkHref="#vj_copy-i" />
                        </svg>
                      </div>
                      <div className="CpyLk_tt-wr">
                        <div className="CpyLk_tt-tx">Link Coped</div>
                      </div>
                    </a>
                  </div>
                  {/* Comment */}
                  {/* <button
                    href="#"
                    className="ss-lk comment vj_mix-comment cmt-ac"
                  >
                    <span className="vj_mix">
                      <svg className="vj_icn vj_comments">
                        <use xlinkHref="#vj_comments" />
                      </svg>
                    </span>
                    <span className="cmt-tp">66</span>
                    
                  </button> */}
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="sp_txt">
              <div className="ins_instory_dv">
                {/* Main Article Image */}
                {image_full && ( // Conditionally render image if image_full exists
                  <div className="img-gr img-gr_a">
                    <Image
                      src={image_full}
                      alt={image_caption || title || "Article Image"}
                      border={0}
                      width={795}
                      height={447}
                      fetchPriority="high"
                      sizes="(max-width: 600px) 100vw, 594px"
                      //style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                )}
                {image_caption && (
                  <div className="sp_cap sp_b">{image_caption}</div>
                )}
              </div>
              <div className="Art-exp_cn">
                <div className="Art-exp_wr">
                  {/* The 'body' from your JSON is HTML. Using dangerouslySetInnerHTML */}
                  {body && <div dangerouslySetInnerHTML={{ __html: body }} />}

                  {/* Advertisement again */}
                  <div className="ad-art_full2 ad-art_wap">
                    <div className="ad-art_rw">
                      <div className="ad-art_wr">
                        <div className="ad-art_tx1">Advertisement</div>
                        <div className="ad-art_img-wr">
                          <img
                            src="https://tpc.googlesyndication.com/simgad/16376712540458270881"
                            alt="Advertisement"
                            border={0}
                            width={300}
                            height={250}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Art-exp_bt-wr">
                  <a
                    className="Art-exp_bt-lk Art-exp_bt-dn"
                    href="javascript:void(0);"
                  >
                    <span className="Art-exp_bt-lk-tx">Show full article</span>
                    <span className="Art-exp_bt-ic-wr">
                      <svg className="Art-exp_bt-ic vj_icn vj_arrow-down">
                        <use xlinkHref="#vj_arrow-down" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
