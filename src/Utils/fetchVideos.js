import { fetchData } from "@/src/Utils/fetchData";

export const fetchVideos = async () => {
  try {
    const data = await fetchData(
      "/data/Video-content.json", // API endpoint
      "public/data/Video-content.json" // Static file path
    );

    // Log the raw data fetched by fetchData to debug its value
    //console.log("Raw data fetched by fetchData:", data);

    // Log the results array to ensure it is being returned correctly
    //console.log("Returning results from fetchLiveArticles:", data.results);

    return data.results; // Provide the complete array
  } catch (error) {
    console.error("Error fetching trending articles:", error);
    throw new Error("Failed to load trending articles.");
  }
};

export default fetchVideos;
