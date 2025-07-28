// Determines whether to use static files or API for data fetching
const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";

// Base URL for API calls; defaults to the deployed domain if not set
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "https://ndtv-health.vercel.app";

export const config = {
  // Flag to toggle between static data and API calls
  useStaticData: USE_STATIC_DATA,

  // Base URL for API endpoints
  apiBaseUrl: API_BASE_URL,
};
