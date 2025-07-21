// src/app/[categorySlug]/[articleSlug]/page.js
// This is a Server Component, meaning it runs on the server side
// and does not have access to browser-specific APIs like window or document directly.

import React from "react";

// API base URL from environment variable for secure and configurable API access.
// Ensure NEXT_PUBLIC_API_BASE_URL is defined in your .env.local file.
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * React Server Component for displaying an article's detailed page.
 * It fetches the specific article data based on the dynamic URL parameters.
 * @param {object} props - Component props.
 * @param {object} props.params - Dynamic route parameters extracted from the URL.
 * Contains 'categorySlug' and 'articleSlug'.
 */
const ArticleDetailPage = async ({ params }) => {
  // Destructure categorySlug and articleSlug from the params object.
  // These values come directly from the URL segments (e.g., /india-news/article-title-here).
  const { categorySlug, articleSlug } = params;

  let articleData = null; // Variable to store the fetched article data. Initialized to null.
  let error = null; // Variable to store any error messages encountered during fetching. Initialized to null.
  let responseText = ""; // Variable to store the raw response text, useful for debugging.

  try {
    // Construct the API URL to fetch the specific article.
    // This URL structure assumes your API provides individual JSON files
    // for each article nested under category and article slugs.
    // Example: `${API_BASE_URL}/data/listing/india-news/puri-minor-who-was-set-on-fire-shifted-to-aiims-delhi-from-bhubaneswar-8911851.json`
    // If your API returns a single JSON with the entire list and expects filtering,
    // this fetch URL would need to be adjusted (e.g., fetch the full list, then find the item).
    const response = await fetch(
      `${API_BASE_URL}/data/listing/${categorySlug}/${articleSlug}.json`,
      {
        cache: "no-store", // Ensure fresh data is fetched for each request
      }
    );

    // Read the response body as text first.
    // This is crucial to prevent "Body has already been read" errors if `json()` parsing fails later.
    responseText = await response.text();

    // Check if the HTTP response status is not OK (i.e., not in the 200-299 range).
    // If not OK, log the error and throw to be caught by the outer catch block.
    if (!response.ok) {
      console.error(
        `HTTP Error fetching article ${articleSlug} (${categorySlug}): Status ${response.status}, Response: ${responseText}`
      );
      throw new Error(
        `Failed to fetch article details. Server responded with status ${response.status}.`
      );
    }

    // Attempt to parse the response text as JSON.
    let apiResponse;
    try {
      apiResponse = JSON.parse(responseText);
    } catch (jsonError) {
      // If parsing fails, it means the content was not valid JSON (e.g., an HTML error page).
      console.error(
        `JSON Parsing Error for article ${articleSlug} (${categorySlug}):`,
        jsonError
      );
      console.error(
        `Received content (first 500 chars):`,
        responseText.substring(0, 500)
      );
      throw new Error("Received invalid data from API. Expected JSON.");
    }

    // Access the actual article data from the 'item' array.
    // Based on your API examples, the article data is inside an 'item' array.
    // We expect the 'item' array to contain at least one element which is our article.
    if (
      apiResponse &&
      Array.isArray(apiResponse.item) &&
      apiResponse.item.length > 0
    ) {
      articleData = apiResponse.item[0]; // Get the first (and presumably only) item from the array.
    } else {
      // If 'item' array is empty or not in the expected format, throw an error.
      throw new Error(
        "Article data not found in API response or 'item' array is empty."
      );
    }
  } catch (e) {
    // Catch any errors that occur during the entire process (fetch, network, JSON parsing, data access).
    console.error(
      `Error fetching article ${articleSlug} in ${categorySlug}:`,
      e.message
    );
    // Log the response text to help debug the actual content received during an error.
    console.error(
      "Full response text during error (first 500 chars):",
      responseText.substring(0, 500) + "..."
    );
    error = `Failed to load article details: ${e.message}.`; // Set a user-friendly error message.
    articleData = null; // Ensure articleData is null on error to trigger error UI.
  }

  // Conditional rendering: If an error occurred or no article data was found, display an error message.
  if (error || !articleData) {
    return (
      <div className="article-detail-container">
        <h1>Error Loading Article</h1>
        <p>{error || "Article not found or could not be loaded."}</p>
        {/* You could add a link back to the homepage or category page here */}
      </div>
    );
  }

  // If article data is successfully fetched, render the article details.
  return (
    <div className="article-detail-container">
      {/* Article main image */}
      {articleData.story_image && (
        <img
          src={articleData.story_image}
          alt={articleData.story_image_caption || articleData.title}
          className="article-main-image"
        />
      )}
      {/* Image caption */}
      {articleData.story_image_caption && (
        <p className="image-caption">{articleData.story_image_caption}</p>
      )}

      {/* Article title */}
      <h1>{articleData.title}</h1>

      {/* Author and publication date */}
      <p className="article-meta">
        By {articleData.by_line} | Published on:{" "}
        {new Date(articleData.pubDate).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>

      {/* Full description (HTML content) */}
      {/* SECURITY WARNING: Use `dangerouslySetInnerHTML` only when you are certain that
          the HTML content is coming from trusted sources and does not contain any malicious scripts (XSS attacks). */}
      <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: articleData.full_description }}
      />

      {/* Other fields you might want to display */}
      {articleData.description && (
        <p className="article-short-description">
          <strong>Summary:</strong> {articleData.description}
        </p>
      )}
      {articleData.category && (
        <p className="article-category">Category: {articleData.category}</p>
      )}

      {/* You can add related tags, topics, etc. here */}
    </div>
  );
};

export default ArticleDetailPage;
