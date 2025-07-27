import React from "react";
import Atf_sections_server from "./Atf_sections_server";

const Atf_section_mobile = async () => {
  // Fetch data using Atf_sections_server
  const { articles, error } = await Atf_sections_server();

  return (
    <div className="mobile-section">
      {/* Render mobile-specific HTML */}
      {error ? (
        <p>Error loading data: {error}</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index}>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Atf_section_mobile;
