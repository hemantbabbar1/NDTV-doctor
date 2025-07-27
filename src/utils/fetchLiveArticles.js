import { fetchData } from "@/src/Utils/fetchData";

export const fetchLiveArticles = async () => {
  try {
    const data = await fetchData(
      "/data/live-feed.json", // API endpoint
      "public/data/live-feed.json" // Static file path
    );
    return data.results; // Provide the complete array
  } catch (error) {
    console.error("Error fetching trending articles:", error);
    throw new Error("Failed to load trending articles.");
  }
};
