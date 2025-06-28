"use client";

import React from "react";
import "../../styles/css/widgets/side-widget-home.css";

// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";
import Link from "next/link";

const Trending_news = () => {
  const { articles } = useArticles();
  // 9th to 13th index articles (10th to 14th articles)
  const trendingArticles = articles?.slice(9, 13) || [];

  return (
    <>
      <div className="s-lf-wid s-lf-bg">
        <div>
          {/* <!-- Trending News --> */}
          <div className="s-ttl mb-10">
            <h3 className="s-ttl-clr">Trending News</h3>
          </div>
          <ul className="s-ls_ul s-ls_br s-ls_ul3 mb-15">
            {trendingArticles.map((article, idx) => (
              <li className="s-ls_li" key={article.id || idx}>
                <div className="crd_cat">{article.category}</div>
                <a
                  href={article.link}
                  title="{article.link}"
                  className="s-ls_lnk"
                >
                  <div className="s-ls_txt">{article.title}</div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Trending_news;
