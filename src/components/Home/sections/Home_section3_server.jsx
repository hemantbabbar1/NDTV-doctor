// src/components/Home/sections/Home_section3_server.jsx
// This is a Server Component.

import React from "react";
import Home_section3 from "./Home_section3"; // Assuming Home_section3 might be a Client Component or just renders content

// If Home_section3_server needs to fetch its OWN specific data, do it here
// async function getSection3SpecificData() {
//   // ... fetch data for this section ...
// }

const Home_section3_server = async () => {
  // If you need to fetch specific data for THIS section (Home_section3)
  // const section3Data = await getSection3SpecificData();

  // Do NOT render ArticlesProvider here, as it's already provided higher up in layout.jsx
  return (
    <>
      {/* If Home_section3 needs section-specific data, pass it as props */}
      <Home_section3 /* sectionData={section3Data} */ />
    </>
  );
};

export default Home_section3_server;
