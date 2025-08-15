// Importing required modules and configuration
import axios from "axios";
import { config } from "./config.js";
import path from "path";

// Function to fetch data from either a static file or an API endpoint
export const fetchData = async (
  apiEndpoint, // API endpoint to fetch data from
  staticFilePath, // Path to the static file
  format = "json" // Expected format of the data (default is JSON)
) => {
  try {
    // Check if the code is running on the server-side
    if (typeof window === "undefined") {
      console.log("Server-side logic is running...");
      try {
        const fs = require("fs/promises");
        const filePath = path.join(process.cwd(), staticFilePath);

        // Attempt to read the static file from the resolved file path
        const fileData = await fs.readFile(filePath, "utf-8");
        console.log("Static file read successfully:", filePath);

        // Parse the file data if the format is JSON, otherwise return as is
        return format === "json" ? JSON.parse(fileData) : fileData;
      } catch (error) {
        // Log error and fallback to API call if static file reading fails
        console.error("Error reading static file, falling back to API:", error);
        const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
        const response = await axios.get(fullUrl);
        return format === "json" ? response.data : response.data;
      }
    } else {
      // Client-side logic for fetching data from the API
      console.log("Client-side logic is running...");
      const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
      const response = await axios.get(fullUrl);
      return format === "json" ? response.data : response.data;
    }
  } catch (error) {
    // Log detailed error information and throw a new error
    console.error(
      "Error fetching data:",
      error?.response?.status || "No status available",
      error?.response?.data || "No data available"
    );
    throw new Error("Failed to fetch data.");
  }
};
