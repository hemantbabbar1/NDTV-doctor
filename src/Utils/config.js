const USE_STATIC_DATA = process.env.NEXT_PUBLIC_USE_STATIC_DATA === "true";
const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000";

export const config = {
  useStaticData: USE_STATIC_DATA,
  apiBaseUrl: API_BASE_URL,
};
