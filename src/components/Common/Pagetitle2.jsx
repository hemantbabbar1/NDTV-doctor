"use client";
import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import "../../Styles/css/widgets/title-widget-2.css";

const Pagetitle2 = ({ title, webstories, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Handle search input change
  // const handleSearchChange = (e) => {
  //   const query = e.target.value.toLowerCase();
  //   setSearchQuery(query);

  // Handle search button click
  // const handleSearchClick = () => {
  //   const query = searchQuery.toLowerCase();
  //   if (query === "") {
  //     // If the search query is empty, reset the filtered stories
  //     onSearch(webstories);
  //     return;
  //   }

  // Filter webstories based on the search query
  //   const filteredStories = webstories.filter((story) =>
  //     story.title.toLowerCase().includes(query)
  //   );

  //   // Pass filtered results to parent component
  //   onSearch(filteredStories);
  // };

  return (
    <>
      <div className="Dcttl2_wr">
        <div className="Dcttl2_cn">
          <h1 className="Dcttl2_ttl">{title}</h1>

          {/* Search */}
          <div className="Dcttl2_src">
            <input
              type="text"
              placeholder="Looking for something specific?"
              className="Dcttl2_inp"
              value={searchQuery}
              // onChange={handleSearchChange}
              onChange={(e) => setSearchQuery(e.target.value)} // Only update the state
            />
            <span className="Dcttl2_inp-cls">
              <svg className="vj_icn vj_close">
                <use xlinkHref="#vj_close"></use>
              </svg>
            </span>

            <button className="Dcttl2_btn">
              <IoSearchSharp className="vj_icn vj-magnify" />
            </button>
          </div>
          {/* End Search */}
        </div>
      </div>
    </>
  );
};

export default Pagetitle2;
