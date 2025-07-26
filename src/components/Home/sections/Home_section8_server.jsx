import { fetchData } from "utils/fetchData";
import Home_section8 from "./Home_section8";

const Home_section8_server = async () => {
  let videos = [];
  let error = null;

  try {
    videos = await fetchData(
      "/data/Video-content.json", // API endpoint
      "public/data/Video-content.json" // Static file path
    );

    // Slice the data on the server
    videos = Array.isArray(videos.results) ? videos.results.slice(0, 4) : [];
  } catch (err) {
    console.error("Error fetching videos in Home_section8_server:", err);
    error = "Failed to load videos.";
  }

  // Render the client component and pass the data as a prop
  return <Home_section8 videos={videos} error={error} />;
};

export default Home_section8_server;
