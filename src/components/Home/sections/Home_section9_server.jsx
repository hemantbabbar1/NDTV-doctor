import { fetchData } from "utils/fetchData";
import Home_section9 from "./Home_section9";

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

  // Render the client component and pass the data as a prop
  return <Home_section9 homePhotos={homePhotos} error={error} />;
};

export default Home_section9_server;
