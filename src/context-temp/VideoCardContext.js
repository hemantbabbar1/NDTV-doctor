"use client";

import React, { createContext, useContext } from "react";

const VideoCardContext = createContext(undefined);

export const VideoCardProvider = ({ children }) => {
  // Now this provider can be used for other global state if needed
  return (
    <VideoCardContext.Provider value={{}}>
      {children}
    </VideoCardContext.Provider>
  );
};

export const useVideos = () => {
  const context = useContext(VideoCardContext);
  if (context === undefined) {
    throw new Error("useVideos must be used within an VideoCardProvider");
  }
  return context; 
};