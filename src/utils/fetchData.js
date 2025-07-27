import axios from "axios";
import { config } from "./config";

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
      if (format === "json") {
        return JSON.parse(fileData); // Parse as JSON
      } else {
        return fileData; // Return as plain text
      }
    } else {
      // Client-side logic
      const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
      console.log("Fetching data from URL:", fullUrl); // Debugging log
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
      error.response?.status,
      error.response?.data
    );
    throw error;
  }
};
