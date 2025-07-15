import axios from "axios";
import Home_section11 from "./Home_section11";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This function fetches the data on the server
async function getWebstory() {
  const res = await axios.get(`${API_BASE_URL}/data/webstories.json`);

  // axios automatically parses JSON and provides it in res.data
  return res.data.results;
}

const Home_section11_server = async () => {
  let homeWebstory = [];
  let error = null;

  try {
    const allWebstory = await getWebstory();
    homeWebstory = allWebstory.slice(0, 5); // Slice the data on the server
  } catch (err) {
    //console.error("Error fetching Webstories:", err.message);
    error = "Failed to load Webstories.";
  }

  // Render the client component and pass the data as a prop
  return <Home_section11 homeWebstory={homeWebstory} error={error} />;
};

export default Home_section11_server;
