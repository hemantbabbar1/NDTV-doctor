import { fetchData } from "@/src/Utils/fetchData";
import { isMobile } from "@/src/Utils/deviceDetection";
import { headers } from "next/headers";
import Home_section11 from "./Home_section11";
import Home_section11_wap from "../homeWap/Home_section11_wap";

const Home_section11_server = async () => {
  let homeWebstory = [];
  let error = null;

  try {
    const data = await fetchData(
      "/data/webstories.json", // API endpoint
      "public/data/webstories.json" // Static file path
    );

    // Extract 'results' from the object if it exists
    homeWebstory = Array.isArray(data.results) ? data.results.slice(0, 5) : [];
  } catch (err) {
    console.error("Error fetching Webstories in Home_section11_server:", err);
    error = "Failed to load Webstories.";
  }

  // Device detection
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") || "";
  const mobile = isMobile(userAgent);

  // Conditional render for WAP
  if (mobile) {
    return <Home_section11_wap homeWebstory={homeWebstory} error={error} />;
  }

  // Render the client component and pass the data as a prop
  return <Home_section11 homeWebstory={homeWebstory} error={error} />;
};

export default Home_section11_server;
