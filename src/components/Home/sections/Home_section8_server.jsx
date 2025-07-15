import axios from "axios";
import Home_section8 from "./Home_section8";

// API base URL to environment variable 
const API_BASE_URL = process.env.API_BASE_URL;

// This function fetches the data on the server
async function getVideos() {
  const res = await axios.get(`${API_BASE_URL}/data/Video-content.json`);
  
  // axios automatically parses JSON and provides it in res.data
  return res.data.results;
}

const Home_section8_server = async () => {
  let videos = [];
  let error = null;
  
  try {
    const allVideos = await getVideos();
    videos = allVideos.slice(0, 4); // Slice the data on the server
  } catch (err) {
    // axios throws an error on non-2xx status codes, so we can catch it here
    console.error("Error fetching videos:", err.message);
    error = err.message;
  }
  
  // Render the client component and pass the data as a prop
  return <Home_section8 videos={videos} error={error} />;
};

export default Home_section8_server;