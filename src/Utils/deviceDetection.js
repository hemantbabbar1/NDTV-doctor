/**
 * Device Detection Utilities
 * Functions for mobile and tablet detection only
 */

/**
 * Detect if the user agent indicates a mobile device (phones only)
 * @param {string} userAgent - The user agent string to check
 * @returns {boolean} - True if mobile device, false otherwise
 */
export const isMobile = (userAgent = "") => {
  return (
    /android|iphone|mobile/i.test(userAgent) && !/ipad|tablet/i.test(userAgent)
  );
};

/**
 * Detect if the user agent indicates a tablet device
 * @param {string} userAgent - The user agent string to check
 * @returns {boolean} - True if tablet device, false otherwise
 */
export const isTablet = (userAgent = "") => {
  return /ipad|tablet|playbook|silk/i.test(userAgent);
};

/**
 * Get device type as string (mobile or tablet only)
 * @param {string} userAgent - The user agent string to check
 * @returns {string} - 'mobile', 'tablet', or 'desktop'
 */
export const getDeviceType = (userAgent = "") => {
  if (isMobile(userAgent)) return "mobile";
  if (isTablet(userAgent)) return "tablet";
  return "desktop"; // fallback for anything else
};
