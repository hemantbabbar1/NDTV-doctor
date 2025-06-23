"use client";

import React from "react";
import "../../styles/css/widgets/side-widget-home.css";

// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";

const Trending_news = () => {
  const { articles } = useArticles();
  // 10th to 14th index (inclusive of 10, exclusive of 15)
  const trendingArticles = articles?.results?.slice(10, 14) || [];

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
                <div className="crd_cat">
                  <a className="crd_cat-lk" href="#">
                    {article.category}
                  </a>
                </div>
                <a href={article.url} className="s-ls_lnk">
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
