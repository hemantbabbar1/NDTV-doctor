import React from "react";
import Image from "next/image";

const HmCrd_C = ({ articles }) => {
  if (!articles || !articles.results || articles.results.length < 10)
    return null;

  // Get articles from index 4 to 10 (inclusive)
  const atfMidArt = articles.results.slice(4, 10);

  return (
    <>
      <div className="HmCr_col2">
        <div className="HmCr_ul">
          {atfMidArt.map((article, index) => (
            <div className="HmCr_li" key={article.id || index}>
              <div className="HmCr_wr">
                <div className="crd-c">
                  <div className="crd_img">
                    <div className="img-gr img-gr_a">
                      <Image
                        className="lz_img crd_img-full"
                        alt={article.title}
                        src={article.thumb_image}
                        width={240}
                        height={180}
                        sizes="(max-width: 600px) 100vw, 240px"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </div>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <a className="crd_cat-lk" href="#">
                        {article.category}
                      </a>
                    </div>
                    <h3 className="crd_D-ttl">
                      <a
                        className="crd_lnk"
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HmCrd_C;
