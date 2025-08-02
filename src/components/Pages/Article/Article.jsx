"use server";

// src/components/Common/Article/Article.jsx
import React from "react";
import DOMPurify from "isomorphic-dompurify";
import SocialShareArticle from "./SocialShareArticle";
import Image from "next/image";
import PostBy from "./PostBy";
import Ad_300X250_wap from "../../Common/Advertisement/Ad_300X250_wap";
// import ReadInApp from "./ReadInApp";
import CopyBtn from "./CopyBtn";
import ShowMoreWap from "./ShowMoreWap";

const Article = ({ articleData, error, isExpanded }) => {
  // Error Statement
  if (error) {
    return (
      <div className="error-message">
        Error: {error.message || "Failed to load article."}
      </div>
    );
  }

  // Data Destructure
  const {
    title,
    excerpt,
    body,
    image_full,
    image_caption,
    link,
    story_word_count,
  } = articleData || {};

  // For DOM Purify
  const sanitizedBody = body ? DOMPurify.sanitize(body) : "";

  return (
    <>
      <div className="sp-wrp">
        {/*====== Story Starts ======*/}
        <div className="sp-hd" id="TxSS_selct">
          <div className="sp-cn pg-str-com js-ad-section">
            {/* Story Headline */}
            <h1 className="sp-ttl">{title || "No Title Available"}</h1>
            {/* Story description */}
            <h2 className="sp-descp">{excerpt || "No Excerpt Available"}</h2>

            {/*====== For Ad. in WAP  ======*/}
            <Ad_300X250_wap />

            <PostBy articleData={articleData} error={error} />

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
                  </div>
                </div>
                <div className="pst_icn-btn">
                  <SocialShareArticle articleData={articleData} error={error} />
                  {/* <ReadInApp /> */}
                  <CopyBtn urlToCopy={link} />
                  {/* <Comment_Btn /> */}
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="sp_txt">
              <div className="ins_instory_dv">
                {image_full && (
                  <div className="img-gr img-gr_a">
                    <Image
                      src={image_full}
                      alt={image_caption || title || "Article Image"}
                      width={795}
                      height={447}
                      fetchPriority="high"
                      sizes="(max-width: 600px) 100vw, 594px"
                    />
                  </div>
                )}
                {image_caption && (
                  <div className="sp_cap sp_b">{image_caption}</div>
                )}
              </div>
              <div className={`Art-exp_cn ${isExpanded ? "Art-exp_less" : ""}`}>
                <div className="Art-exp_wr">
                  {sanitizedBody && (
                    <div dangerouslySetInnerHTML={{ __html: sanitizedBody }} />
                  )}
                  <Ad_300X250_wap />
                </div>
                <ShowMoreWap isExpanded={isExpanded} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
