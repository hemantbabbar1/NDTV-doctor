import axios from "axios";
import Home_section9 from "./Home_section9";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This function fetches the data on the server
async function getPhotosHome() {
  const res = await axios.get(`${API_BASE_URL}/data/photo-gallery.json`);

  // axios automatically parses JSON and provides it in res.data
  return res.data.results;
}

const Home_section9_server = async () => {
  let homePhotos = [];
  let error = null;

  try {
    const allPhotos = await getPhotosHome();
    homePhotos = allPhotos.slice(0, 8); // Slice the data on the server
  } catch (err) {
    // axios throws an error on non-2xx status codes, so we can catch it here
    //console.error("Error fetching photos:", err.message);
    error = "Failed to load photos.";
  }

  // Render the client component and pass the data as a prop
  return <Home_section9 homePhotos={homePhotos} error={error} />;
};

export default Home_section9_server;
