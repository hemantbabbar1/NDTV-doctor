import axios from "axios";
import { config } from "./config.js";
import path from "path";

export const fetchData = async (
  apiEndpoint,
  staticFilePath,
  format = "json"
) => {
  try {
    if (typeof window === "undefined") {
      console.log("Server-side logic is running...");
      try {
        const fs = require("fs/promises");
        const filePath = path.join(process.cwd(), staticFilePath);
        const fileData = await fs.readFile(filePath, "utf-8");
        console.log("Static file read successfully:", filePath);
        return format === "json" ? JSON.parse(fileData) : fileData;
      } catch (error) {
        console.error("Error reading static file, falling back to API:", error);
        const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
        const response = await axios.get(fullUrl);
        return format === "json" ? response.data : response.data;
      }
    } else {
      console.log("Client-side logic is running...");
      const fullUrl = `${config.apiBaseUrl}${apiEndpoint}`;
      const response = await axios.get(fullUrl);
      return format === "json" ? response.data : response.data;
    }
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response?.status || "No status available",
      error.response?.data || "No data available",
      error.message
    );
    throw new Error("Failed to fetch data.");
  }
};
