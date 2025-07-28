import axios from "axios";
import { config } from "./config.js";
import path from "path";

//console.log("Current Directory:", process.cwd());
//console.log("Config Path:", "./config.js"); // क्लाइंट-साइड में डायरेक्ट पाथ का उपयोग करें

export const fetchData = async (
  apiEndpoint,
  staticFilePath,
  format = "json"
) => {
  try {
    if (typeof window === "undefined") {
      // Server-side logic
      const fs = require("fs/promises");
      const path = require("path");
      const filePath = path.join(process.cwd(), staticFilePath);
      const fileData = await fs.readFile(filePath, "utf-8");
      console.log("SSR Debugging:", process.cwd());
      console.log(
        "Current SSR Directory:",
        path.join(process.cwd(), staticFilePath)
      );
      if (format === "json") {
        return JSON.parse(fileData); // Parse as JSON
      } else {
        return fileData; // Return as plain text
      }
    } else {
      console.log("Current CSR Directory:", path.resolve(staticFilePath));
      // Client-side logic
      console.log("API Base URL:", config.apiBaseUrl); // Debugging log
      console.log("API Endpoint:", apiEndpoint); // Debugging log
      const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
      console.log("Constructed URL:", fullUrl); // Debugging log

      // Validate URL
      try {
        new URL(fullUrl); // Throws if URL is invalid
      } catch (urlError) {
        throw new Error(`Invalid URL: ${fullUrl}`);
      }

      const response = await axios.get(fullUrl);
      if (format === "json") {
        return response.data; // Assume JSON response
      } else {
        return response.data; // Return as plain text
      }
    }
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.status || "No status available",
      error.response?.data || "No data available",
      error.message // Log the error message for additional context
    );
    throw new Error("Failed to fetch data.");
  }
};
