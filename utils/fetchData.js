import path from "path";
import fs from "fs/promises";
import axios from "axios";
import { config } from "./config";

export const fetchData = async (endpoint, staticFilePath, format = "json") => {
  if (config.useStaticData) {
    const filePath = path.join(process.cwd(), staticFilePath);
    try {
      const fileContents = await fs.readFile(filePath, "utf8");
      if (format === "json") {
        return JSON.parse(fileContents);
      } else if (format === "text") {
        return fileContents; // Return plain text
      } else {
        throw new Error(`Unsupported format: ${format}`);
      }
    } catch (error) {
      throw new Error(`Static data file not found at: ${filePath}`);
    }
  } else {
    const res = await axios.get(`${config.apiBaseUrl}${endpoint}`);
    if (format === "json") {
      return res.data;
    } else if (format === "text") {
      return res.data; // Assuming API returns plain text
    } else {
      throw new Error(`Unsupported format: ${format}`);
    }
  }
};
