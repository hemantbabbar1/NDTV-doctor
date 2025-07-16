import React from "react";
// Import the client-side Context Provider
import { FooterLinksProvider } from "./FooterLinksContext"; // Ensure this path is correct

// API base URL from environment variable
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// This function will fetch footer links data on the server.
async function getFooterLinksData() {
  let mainLinks = [];
  let extraLinks = [];
  let error = null;

  try {
    // Fetch Main footer links
    const url1 = `${API_BASE_URL}/data/Footer2016Bottom.json`;
    const response1 = await fetch(url1, {
      next: { revalidate: 1800 }, // Revalidate every hour (adjust as needed)
    });
    if (!response1.ok) {
      throw new Error(`HTTP error! status: ${response1.status} for ${url1}`);
    }
    mainLinks = await response1.json();

    // Fetch Extra/footer ke selected area ke links
    const url2 = `${API_BASE_URL}/data/footernewhp_hp2023_footer.json`;
    const response2 = await fetch(url2, {
      next: { revalidate: 1800 }, // Revalidate every hour (adjust as needed)
    });
    if (!response2.ok) {
      throw new Error(`HTTP error! status: ${response2.status} for ${url2}`);
    }
    extraLinks = await response2.json();
  } catch (e) {
    console.error("Error fetching footer links data (server-side):", e);
    error = `Failed to load footer links: ${e.message}`;
    // Return empty arrays on error to prevent crashes
    mainLinks = [];
    extraLinks = [];
  }

  return { mainLinks, extraLinks, error };
}

// This Server Component fetches the data and passes it to the Client Provider
const FooterLinksContext_server = async ({ children }) => {
  const { mainLinks, extraLinks, error } = await getFooterLinksData();

  return (
    // FooterLinksProvider is a Client Component.
    // It will be initialized with the server-fetched data.
    <FooterLinksProvider
      initialMainLinks={mainLinks}
      initialExtraLinks={extraLinks}
      initialError={error}
    >
      {children}
    </FooterLinksProvider>
  );
};

export default FooterLinksContext_server;
