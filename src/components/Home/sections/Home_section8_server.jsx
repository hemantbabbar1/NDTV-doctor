import { fetchData } from "@/src/Utils/fetchData";
import { isMobile } from "@/src/Utils/deviceDetection";
import Home_section8 from "./Home_section8";
import Home_section8_wap from "../homeWap/Home_section8_wap";
import { headers } from "next/headers";

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
    //console.error("Error fetching videos in Home_section8_server:", err);
    error = "Failed to load videos.";
  }

  // Device detection
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const mobile = isMobile(userAgent);

  // Conditional render for WAP
  if (mobile) {
    return <Home_section8_wap videos={videos} error={error} />;
  }

  // Render the client component and pass the data as a prop
  return <Home_section8 videos={videos} error={error} />;
};

export default Home_section8_server;
