"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Breadcrumbs from "./Breadcrumbs";

const DynamicBreadcrumbs = ({ category }) => {
  // Get current URL path
  const pathname = usePathname();

  // Store breadcrumb items array
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  // Manage loading state
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const generateBreadcrumbs = async () => {
      setIsLoading(true);

      // Convert category name to readable format
      // Example: "living-healthy" -> "Living Healthy"
      const categoryName = category
        .replace(/-/g, " ") // Replace dashes with spaces
        .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word

      // Basic breadcrumb items (Home and Category)
      const items = [
        { label: "Home", href: "/" },
        { label: categoryName, href: `/${category}` },
      ];

      // Check if this is an article page or category page based on URL
      const pathParts = pathname.split("/").filter(Boolean);
      const isArticlePage = pathParts.length > 1; // If more than 1 part, it's an article page

      if (isArticlePage) {
        // Extract slug from URL (last part)
        const slug = pathParts[pathParts.length - 1];
        let articleTitle = "Article";

        try {
          // Try to extract article ID from slug
          let articleId = slug;
          if (slug.includes("-")) {
            const parts = slug.split("-");
            const lastPart = parts[parts.length - 1];
            // Check if last part contains only numbers
            if (/^\d+$/.test(lastPart)) {
              articleId = lastPart;
            }
          }

          console.log("Fetching article title for ID:", articleId);

          // NDTV API to fetch article title
          const apiUrl = `https://cmsapi.ndtv.net.in/v1/story.php?client_key=ndtv-news-c5d815c6459df03ef7c65742d96498cd&id=${articleId}&site_id=20`;
          const response = await fetch(apiUrl);

          // If API call is successful
          if (response.ok) {
            const apiData = await response.json();

            // API response might have title in different places, so check all possibilities
            if (apiData?.title) {
              articleTitle = apiData.title;
            } else if (apiData?.data?.title) {
              articleTitle = apiData.data.title;
            } else if (apiData?.article?.title) {
              articleTitle = apiData.article.title;
            } else if (apiData?.story?.title) {
              articleTitle = apiData.story.title;
            } else {
              // If no title found in API, create title from slug
              articleTitle = slug
                .replace(/-/g, " ") // Replace dash with space
                .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize first letter of each word
                .replace(/\d+$/, "") // Remove numbers at the end
                .trim(); // Remove extra spaces
            }
          } else {
            // If API fails, create title from slug
            articleTitle = slug
              .replace(/-/g, " ") // Replace dash with space
              .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize first letter of each word
              .replace(/\d+$/, "") // Remove numbers at the end
              .trim(); // Remove extra spaces
          }
        } catch (error) {
          console.log("Error in API call:", error);
          // If any error occurs, create title from slug
          articleTitle = slug
            .replace(/-/g, " ") // Replace dash with space
            .replace(/\b\w/g, (l) => l.toUpperCase()) // Capitalize first letter of each word
            .replace(/\d+$/, "") // Remove numbers at the end
            .trim(); // Remove extra spaces
        }

        // Add article breadcrumb item
        items.push({
          label: articleTitle, // Article title
          href: "#", // Current page, so no link needed
        });
      }

      // Set final breadcrumb items
      setBreadcrumbItems(items);
      setIsLoading(false);
    };

    // Call the function
    generateBreadcrumbs();
  }, [pathname, category]); // Re-run when URL or category changes

  // Show basic breadcrumbs during loading state
  if (isLoading) {
    // Convert category name for display
    const categoryName = category
      .replace(/-/g, " ") // Replace dash with space
      .replace(/\b\w/g, (l) => l.toUpperCase()); // Capitalize first letter of each word

    // Show only Home and Category during loading
    const basicItems = [
      { label: "Home", href: "/" },
      { label: categoryName, href: `/${category}` },
    ];

    return <Breadcrumbs customItems={basicItems} />;
  }

  // Render final breadcrumbs
  return <Breadcrumbs customItems={breadcrumbItems} />;
};

export default DynamicBreadcrumbs;
