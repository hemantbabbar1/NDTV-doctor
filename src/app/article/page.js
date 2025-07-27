import React from "react";
import { fetchData } from "../../../src/Utils/fetchData";

// import "../../Styles/css/widgets/title-widget-2.css";
// import "../../Styles/css/widgets/title-widget-3.css";

import "../../Styles/css/article/story-atf.css";
import "../../Styles/css/article/story-page.css";
import "../../Styles/css/article/expand-txt.css";
import "../../Styles/css/article/story-comments.css";
import "../../Styles/css/article/post-by.css";
import "../../Styles/css/article/elements.css";
import "../../Styles/css/article/ai-summary-accordion-1.css";
import "../../Styles/css/article/social.css";
import "../../Styles/css/article/copy-icon.css";
import "../../Styles/css/article/recommended-article.css";
import "../../Styles/css/article/article-featured-video.css";
import "../../Styles/css/article/tags.css";
import "../../Styles/css/article/published-drop.css";

// Importing components
import Article from "@/src/components/Common/Article/Article";
import Seo_widget from "@/src/components/Common/Seo_widget";

// Page component for article
const page = async () => {
  let articleData = [];
  let error = false;

  try {
    // Fetch data using the centralized fetchData helper function
    const data = await fetchData(
      "", // API endpoint
      "public/data/listing/article.json" // Static file path
    );
    articleData = data || [];
  } catch (e) {
    error = true;
  }

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
