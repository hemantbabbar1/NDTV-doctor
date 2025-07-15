import Home_section6 from "./Home_section6";
import axios from "axios";

// API base URL to environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

async function getArticles() {
  // Use the full URL for your local server
  const res = await axios.get(
    `${API_BASE_URL}/data/Fitness-excericise-top-stories.json`
  );
  return res.data.results;
}

const Home_section6_server = async () => {
  let articles = [];
  let error = null;

  try {
    const allArticles = await getArticles();
    articles = allArticles.slice(0, 3);
  } catch (err) {
    console.error("Error in Home_section6_server:", err.message);
    error = "Failed to load articles.";
  }

  return <Home_section6 articles={articles} error={error} />;
};

export default Home_section6_server;
