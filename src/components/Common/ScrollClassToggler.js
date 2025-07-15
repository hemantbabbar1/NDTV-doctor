"use client"; // This directive marks the component as a Client Component

import React, { useEffect, useRef } from "react";

// This component will manage the scroll-based class toggling on the body.
// It requires a child element with the class 'Js-Tbl_ad-ftr' to track.
const ScrollClassToggler = ({ children }) => {
  // Create a ref to directly access the DOM element with class 'Js-Tbl_ad-ftr'
  const targetDivRef = useRef(null);

  useEffect(() => {
    // Ensure the target div exists before attaching listeners
    if (!targetDivRef.current) {
      console.warn(
        "Target div with class 'Js-Tbl_ad-ftr' not found. Make sure it's a child of ScrollClassToggler."
      );
      return; // Exit if the target div is not found
    }

    const jsTblAdFtr = targetDivRef.current;

    // Define the function to check and add/remove class
    const checkAndToggleClass = () => {
      // Get the dimensions of the viewport
      const viewportHeight = window.innerHeight;

      // Get the distance of the .Js-Tbl_ad-ftr div from the top of the viewport
      const divOffset = jsTblAdFtr.getBoundingClientRect().top;

      // Check if the div is 400px or less below the viewport top
      // This means the bottom of the viewport has scrolled past a certain point relative to the div
      if (divOffset <= viewportHeight - 400) {
        // If it is, add a class to the body
        document.body.classList.add("Js-Tbl_ftr-stk");
      } else {
        // If not, remove the class from the body
        document.body.classList.remove("Js-Tbl_ftr-stk");
      }
    };

    // Add a scroll event listener to the window
    window.addEventListener("scroll", checkAndToggleClass);

    // Call the function initially to set the class based on the initial position
    // We add a small delay to ensure all elements have rendered and taken up space
    const initialCheckTimeout = setTimeout(checkAndToggleClass, 0);

    // Cleanup function: This runs when the component unmounts
    // It's crucial to remove event listeners to prevent memory leaks
    return () => {
      window.removeEventListener("scroll", checkAndToggleClass);
      clearTimeout(initialCheckTimeout); // Clear the timeout if component unmounts quickly
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  // Render the children, and assume one of them will have the 'Js-Tbl_ad-ftr' class
  // You would pass the div you want to track as a child to this component
  return React.Children.map(children, (child) => {
    if (
      React.isValidElement(child) &&
      child.props.className?.includes("Js-Tbl_ad-ftr")
    ) {
      return React.cloneElement(child, { ref: targetDivRef });
    }
    return child;
  });
};

export default ScrollClassToggler;
