// Importing required modules and configuration
import { config } from "./config";
import path from "path";

// Function to fetch data from either a static file or an API endpoint
export const fetchData = async (
  apiEndpoint, // API endpoint to fetch data from
  staticFilePath, // Path to the static file
  format = "json" // Expected format of the data (default is JSON)
) => {
  try {
    // Check if static data is preferred or if we're on server-side
    if (config.useStaticData || typeof window === "undefined") {
      //console.log("Using static data or server-side logic...");

      // Only use fs on server-side
      if (typeof window === "undefined") {
        try {
          const fs = require("fs/promises");
          const filePath = path.join(process.cwd(), staticFilePath);

          // Attempt to read the static file from the resolved file path
          const fileData = await fs.readFile(filePath, "utf-8");
          //console.log("Static file read successfully:", filePath);

          // Parse the file data if the format is JSON, otherwise return as is
          return format === "json" ? JSON.parse(fileData) : fileData;
        } catch (error) {
          // Log error and fallback to API call if static file reading fails
          //console.error("Error reading static file, falling back to API:", error);

          // Only fallback to API if not using static data preference
          if (!config.useStaticData) {
            const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
            const response = await fetch(fullUrl);

            // Check if the response is ok (status in the range 200-299)
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return format === "json" ? data : data;
          } else {
            throw error; // Re-throw if we're supposed to use static data only
          }
        }
      } else {
        // Client-side static data fetch
        try {
          // Construct the static file URL for client-side access
          const staticUrl = staticFilePath.replace("public/", "/");
          const response = await fetch(staticUrl);

          if (!response.ok) {
            throw new Error(`Static file not found: ${response.status}`);
          }

          const data = await response.json();
          return format === "json" ? data : data;
        } catch (error) {
          console.error("Client-side static file fetch failed:", error);
          throw error;
        }
      }
    } else {
      // Client-side logic for fetching data from the API
      //console.log("Client-side logic is running...");

      // Try API first, then fallback to static files
      try {
        const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
        const response = await fetch(fullUrl);

        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return format === "json" ? data : data;
      } catch (apiError) {
        // If API fails, try to fetch from static files on client-side
        console.warn("API fetch failed, trying static file:", apiError.message);

        try {
          // Construct the static file URL for client-side access
          const staticUrl = staticFilePath.replace("public/", "/");
          const response = await fetch(staticUrl);

          if (!response.ok) {
            throw new Error(`Static file not found: ${response.status}`);
          }

          const data = await response.json();
          return format === "json" ? data : data;
        } catch (staticError) {
          console.error(
            "Both API and static file failed:",
            staticError.message
          );
          throw staticError;
        }
      }
    }
  } catch (error) {
    // Log detailed error information and throw a new error
    console.error(
      "Error fetching data:",
      error?.status || "No status available",
      error?.message || "No error message available",
      "Endpoint:",
      apiEndpoint,
      "Static path:",
      staticFilePath
    );

    // Return empty data structure instead of throwing error to prevent app crash
    console.warn("Returning empty data structure to prevent app crash");
    return format === "json" ? { results: [] } : "";
  }
};
