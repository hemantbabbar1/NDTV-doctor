// src/components/Common/ScrollClassToggler.jsx
"use client";

import React, { useEffect, useRef } from "react";

const ScrollClassToggler = ({ children }) => {
  const targetDivRef = useRef(null);

  useEffect(() => {
    if (!targetDivRef.current) {
      console.warn(
        "Target div ref is null. Ensure the child component properly forwards the ref."
      );
      return;
    }

    const jsTblAdFtr = targetDivRef.current;

    const checkAndToggleClass = () => {
      const viewportHeight = window.innerHeight;
      const divOffset = jsTblAdFtr.getBoundingClientRect().top;

      if (divOffset <= viewportHeight - 400) {
        document.body.classList.add("Js-Tbl_ftr-stk");
      } else {
        document.body.classList.remove("Js-Tbl_ftr-stk");
      }
    };

    window.addEventListener("scroll", checkAndToggleClass);
    const initialCheckTimeout = setTimeout(checkAndToggleClass, 0);

    return () => {
      window.removeEventListener("scroll", checkAndToggleClass);
      clearTimeout(initialCheckTimeout);
    };
  }, []);

  // Simply clone the child and pass the ref to it
  // Assumes 'children' is a single element
  return React.cloneElement(children, { ref: targetDivRef });
};

export default ScrollClassToggler;
