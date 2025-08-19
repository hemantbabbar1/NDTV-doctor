import React from "react";
// import { fetchData } from "@/src/Utils/fetchData";
import { isMobile } from "@/src/Utils/deviceDetection";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

// CSS imports (same as your current page)
import "../../../Styles/css/article/story-atf.css";
import "../../../Styles/css/article/story-page.css";
import "../../../Styles/css/article/expand-txt.css";
import "../../../Styles/css/article/story-comments.css";
import "../../../Styles/css/article/post-by.css";
// import "../../../Styles/css/article/elements.css";
import "../../../Styles/css/article/ai-summary-accordion-1.css";
import "../../../Styles/css/article/social.css";
import "../../../Styles/css/article/copy-icon.css";
import "../../../Styles/css/article/recommended-article.css";
import "../../../Styles/css/article/article-featured-video.css";
import "../../../Styles/css/article/tags.css";
import "../../../Styles/css/article/published-drop.css";

// Components (same as your current imports)
import Article from "@/src/components/Pages/Article/Article";
import SeoWidget from "@/src/components/Common/SeoWidget";

// Category-based Dynamic Article Page
const CategoryArticlePage = async ({ params }) => {
  const { category, slug } = await params; // URL will provide category and slug

  // Device detection
  const requestHeaders = await headers();
  const userAgent = requestHeaders.get("user-agent") || "";
  const mobile = isMobile(userAgent);

  let articleData = [];
  let error = false;

  try {
    // Extract article ID from slug
    // Slug format: "kidney-stones-these-foods-might-be-an-enemy-8849753"
    // Extract the last numeric part as article ID
    let articleId = slug;

    // If slug contains hyphens, extract the last part as ID
    if (slug.includes("-")) {
      const parts = slug.split("-");
      const lastPart = parts[parts.length - 1];
      // Check if last part is numeric (article ID)
      if (/^\d+$/.test(lastPart)) {
        articleId = lastPart;
      }
    }

    //console.log("Category:", category);
    //console.log("Slug:", slug);
    //console.log("Extracted Article ID:", articleId);

    // NDTV API URL (same as before)
    const apiUrl = `https://cmsapi.ndtv.net.in/v1/story.php?client_key=ndtv-news-c5d815c6459df03ef7c65742d96498cd&id=${articleId}&site_id=20`;

    //console.log("Fetching from API:", apiUrl);

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "User-Agent": "NDTV-Doctor-Site/1.0",
      },
    });

    if (!response.ok) {
      // If API returns 404, call notFound() immediately
      if (response.status === 404) {
        //console.log(`Article ${articleId} returned 404 from API`);
        notFound();
      }
      throw new Error(`API response not OK: ${response.status}`);
    }

    const apiData = await response.json();

    //console.log("API Response:", apiData); // Debug log

    // API returns direct article data (consistent format)
    if (apiData && apiData.title) {
      // NDTV API consistently returns flat object with article properties
      articleData = apiData;
      console.log("Article loaded successfully:", articleData.title);
    } else {
      // If title is missing, throw error
      throw new Error(
        `Invalid API response - missing title. Available keys: ${Object.keys(
          apiData || {}
        ).join(", ")}`
      );
    }

    // Validate category matches the article's category
    if (articleData.category_slug && articleData.category_slug !== category) {
      console.log(
        `Category mismatch: URL has '${category}' but article is '${articleData.category_slug}'`
      );
      // You can either redirect to correct URL or show 404
      // For now, we'll allow it but log the mismatch
    }
  } catch (e) {
    //console.error("API fetch error:", e);
    //console.error("Article ID:", articleId);
    //console.error("API URL:", apiUrl);
    error = true;

    // Check if it's a 404 from API (article doesn't exist)
    if (e.message?.includes("404") || e.message?.includes("not found")) {
      //console.log(`Article ${articleId} not found in API, calling notFound()`);
      notFound();
    }

    // Check if it's a title missing error
    if (e.message?.includes("Invalid API response")) {
      //console.log("API responded but missing title, calling notFound()...");
      notFound();
    }

    // For any other API errors, show 404 page
    //console.log(`API error occurred for article ${articleId}, calling notFound()`);
    notFound();
  }

  // Final validation - ensure we have article data
  if (!articleData || !articleData.title) {
    //console.log("No valid article data available, calling notFound()");
    notFound();
  }

  // console.log("Final article data:", articleData);

  return (
    <>
      <Article
        articleData={articleData}
        isMobile={mobile}
        error={error}
        category={category}
        slug={slug}
      />
      <SeoWidget />
    </>
  );
};

// SEO Metadata generation (same as before but with category support)
export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  // Helper function to safely handle tags/categories
  const getKeywords = (data) => {
    if (Array.isArray(data?.tags)) {
      return data.tags.join(", ");
    } else if (typeof data?.tags === "string") {
      return data.tags;
    } else if (Array.isArray(data?.topics)) {
      return data.topics.join(", ");
    } else if (typeof data?.topics === "string") {
      return data.topics;
    }
    return "";
  };

  // Helper function to safely handle images
  const getImages = (data) => {
    const images = [];
    if (data?.image_full) images.push({ url: data.image_full });
    if (data?.image_thumbnail) images.push({ url: data.image_thumbnail });
    if (data?.social_full_image) images.push({ url: data.social_full_image });
    return images;
  };

  try {
    // Extract article ID from slug
    let articleId = slug;
    if (slug.includes("-")) {
      const parts = slug.split("-");
      const lastPart = parts[parts.length - 1];
      if (/^\d+$/.test(lastPart)) {
        articleId = lastPart;
      }
    }

    const apiUrl = `https://cmsapi.ndtv.net.in/v1/story.php?client_key=ndtv-news-c5d815c6459df03ef7c65742d96498cd&id=${articleId}&site_id=20`;

    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`API response not OK: ${response.status}`);
    }

    const apiData = await response.json();

    // API से direct data मिलता है
    const data = apiData && apiData.title ? apiData : null;

    if (data) {
      const keywords = getKeywords(data);
      const images = getImages(data);

      return {
        title:
          data.title || data.headline || `Article in ${category} - NDTV Doctor`,
        description:
          data.excerpt ||
          data.description ||
          data.detailexcerpt ||
          `Read this article from ${category} section on NDTV Doctor`,
        keywords: keywords || `${category}, health, medical, ndtv doctor`,
        openGraph: {
          title: data.title || data.headline,
          description: data.excerpt || data.description || data.detailexcerpt,
          images: images,
          type: "article",
          url: `/${category}/${slug}`,
        },
        twitter: {
          card: "summary_large_image",
          title: data.title || data.headline,
          description: data.excerpt || data.description || data.detailexcerpt,
          images: images,
        },
      };
    }
  } catch (error) {
    console.error("Error generating metadata:", error);
  }

  // Fallback metadata
  return {
    title: `${category} Article - NDTV Doctor`,
    description: `Read article from ${category} section on NDTV Doctor`,
    keywords: `${category}, health, medical, ndtv doctor`,
  };
}

export default CategoryArticlePage;
