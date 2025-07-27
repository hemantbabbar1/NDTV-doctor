import React from "react";
import "../../Styles/css/widgets/side-widget-home.css";
import Link from "next/link";
import { fetchLiveArticles } from "@/src/Utils/fetchLiveArticles";

const Trending_news = async () => {
  let articles = [];
  try {
    // Fetch articles using fetchLiveArticles
    articles = await fetchLiveArticles();
  } catch (error) {
    // Handle error while fetching articles
    return <p>Error loading articles.</p>;
  }

  // Extract 9th to 13th index articles (10th to 14th articles)
  const trendingArticles = articles?.slice(9, 13) || [];

  return (
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
              <Link
                href={article.link}
                title="{article.link}"
                className="s-ls_lnk"
              >
                <div className="s-ls_txt">{article.title}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Trending_news;
