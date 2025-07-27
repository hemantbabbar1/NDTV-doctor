"use client";

import React from "react";
import Link from "next/link";
import "../../Styles/css/widgets/side-widget.css";
import Sidebar_Tittle from "../Sidebar/Sidebar_Tittle";

const Recent_news = ({ recentNews, error }) => {
  return (
    <>
      <div className="s-lf-wid">
        <div>
          {/* Related News */}
          <Sidebar_Tittle tittle="Recent News" />

          <ul className="s-ls_ul s-ls_br mb-50">
            {recentNews && recentNews.length > 0 ? ( // Added check for recentNews
              recentNews.slice(0, 5).map((recentItem) => (
                <li key={recentItem.id} className="s-ls_li">
                  <Link href={recentItem.link} className="s-ls_lnk">
                    <div className="s-ls_txt">{recentItem.title}</div>
                  </Link>
                </li>
              ))
            ) : (
              // Optionally, display a loading message or "No news available"
              <li>No recent news available.</li>
            )}
          </ul>
          {error && (
            <div className="s-ls_error">
              <p>{error}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Recent_news;
