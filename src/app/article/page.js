import React from "react";
import axios from "axios";

// import "../../styles/css/widgets/title-widget-2.css";
// import "../../styles/css/widgets/title-widget-3.css";

import "../../styles/css/article/story-atf.css";
import "../../styles/css/article/story-page.css";
import "../../styles/css/article/expand-txt.css";
import "../../styles/css/article/story-comments.css";
import "../../styles/css/article/post-by.css";
import "../../styles/css/article/elements.css";
import "../../styles/css/article/ai-summary-accordion-1.css";
import "../../styles/css/article/social.css";
import "../../styles/css/article/copy-icon.css";
import "../../styles/css/article/recommended-article.css";
import "../../styles/css/article/article-featured-video.css";
import "../../styles/css/article/tags.css";
import "../../styles/css/article/published-drop.css";

// Importing components
import Article from "@/src/components/Common/Article/Article";
import Seo_widget from "@/src/components/Common/Seo_widget";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// Example axios function with error flag
async function getArticleData() {
  try {
    const res = await axios.get(`${API_BASE_URL}/data/listing/article.json`, {
      headers: { "Cache-Control": "no-store" },
    });
    return {
      articleData: res.data,
      error: false,
    };
  } catch (error) {
    return { articleData: [], error: true };
  }
}

// Page component for listing
const page = async () => {
  const { articleData, error } = await getArticleData();
  return (
    <>
      <div className="LstPg_cnt">
        <Article articleData={articleData} error={error} />

        {/* SEO Text bottom */}
        <Seo_widget articleData={articleData} error={error} />
      </div>
    </>
  );
};

export default page;
