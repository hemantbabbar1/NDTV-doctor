"use client";
import React from "react";

const Overlay = () => {
  //Remove Side Nav if its open
  const removeBodyClass = () => {
    document.body.classList.remove("js_sid-nav");
  };

  return (
    <>
      {/* <!--======[ Side nav Overlay ]======--> */}
      <div className="overlay__side-nav" onClick={removeBodyClass}></div>
    </>
  );
};

export default Overlay;
