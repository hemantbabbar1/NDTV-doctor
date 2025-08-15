import React from "react";
import Image from "next/image";
import Link from "next/link";

const ListNewsWap = ({ articles }) => {
  if (!articles || articles.length < 10) return null;

  // Get articles from index 4 to 10 (inclusive of 4, exclusive of 10)
  const atfMidArt = articles.slice(4, 10);

  return (
    <>
      <div className="ls-ns">
        <ul className="ls-ns_ul ls-ns_br">
          {atfMidArt.map((article, index) => (
            <li className="ls-ns_li" key={article.id || index}>
              <div className="crd-c_v1">
                <div className="crd_img">
                  <Link
                    className="img-gr img-gr_a"
                    href={article.link}
                    title={article.title}
                  >
                    <Image
                      className="lz_img crd_img-full"
                      alt={article.title}
                      src={article.thumb_image}
                      width={120}
                      height={68}
                      //sizes="(max-width: 600px) 100vw, 240px"
                      //style={{ width: "100%", height: "auto" }}
                    />
                  </Link>
                </div>
                <div className="crd_txt-wrp">
                  <div className="crd_cat">
                    <div className="crd_cat-lk">{article.category}</div>
                  </div>
                  <h3 className="crd_D-ttl">
                    <Link
                      className="crd_lnk"
                      href={article.link}
                      title={article.title}
                    >
                      {article.title}
                    </Link>
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ListNewsWap;
