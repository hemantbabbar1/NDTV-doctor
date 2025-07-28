import React from "react";
import { headers } from "next/headers"; // Import headers function
import DesktopHomeSections from "../components/Home/DesktopHomeSections";
import MobileHomeSections from "../components/Home/MobileHomeSections";

const Page = async () => {
  const requestHeaders = await headers(); // Await headers
  const userAgent = requestHeaders.get("user-agent") || ""; // Access user-agent

  // Check if the user is on a mobile device
  const isMobile = /mobile|android|iphone|ipad|tablet/i.test(userAgent);

  return <>{isMobile ? <MobileHomeSections /> : <DesktopHomeSections />}</>; // Render based on user-agent
};

export default Page;
