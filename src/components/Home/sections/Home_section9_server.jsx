import { fetchData } from "@/src/Utils/fetchData";
import { isMobile } from "@/src/Utils/deviceDetection";
import { headers } from "next/headers";
import Home_section9 from "./Home_section9";
import Home_section9_wap from "../homeWap/Home_section9_wap";

const Home_section9_server = async () => {
  let homePhotos = [];
  let error = null;

  try {
    const data = await fetchData(
      "/data/photo-gallery.json", // API endpoint
      "public/data/photo-gallery.json" // Static file path
    );

    // Extract 'results' from the object if it exists
    homePhotos = Array.isArray(data.results) ? data.results.slice(0, 8) : [];
  } catch (err) {
    console.error("Error fetching photos in Home_section9_server:", err);
    error = "Failed to load photos.";
  }

  // Device detection
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const mobile = isMobile(userAgent);

  // Conditional render for WAP
  if (mobile) {
    return <Home_section9_wap homePhotos={homePhotos} error={error} />;
  }

  // Render the client component and pass the data as a prop
  return <Home_section9 homePhotos={homePhotos} error={error} />;
};

export default Home_section9_server;
