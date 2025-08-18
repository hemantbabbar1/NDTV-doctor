import React from "react";

const PostBy = ({ articleData, error }) => {
  // Safely destructure relevant data from the articleData prop with fallbacks
  const {
    byline,
    published,
    modified,
    primary_category,
    // Add other fields you want to display
  } = articleData || {};

  // Function to format the date string
  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return "N/A";
    try {
      // Parse the date string and format it
      const date = new Date(dateTimeString);
      return date.toLocaleString("en-US", {
        //weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata", // Set the timezone specifically to Asia/Kolkata (IST)
        //timeZoneName: "short", // To display "IST"
      });
    } catch (e) {
      console.error("Error formatting date:", e);
      return dateTimeString; // Return original if formatting fails
    }
  };

  return (
    <div>
      {/* Post By */}
      <nav className="pst-by">
        <ul className="pst-by_ul">
          <li className="pst-by_li">
            <span className="pst-by_txt">By</span>
            <span className="pst-by_lnk">{byline || "NDTV Staff"}</span>
            {/* Display author */}
          </li>
          <li className="pst-by_li">{primary_category}</li>
          <li className="pst-by_li">
            <span className="pst-by_lnk">{formatDateTime(published)} IST</span>
            {/* Display published date */}
            <div className="PbdDt_wr dd-nav_one dd-nav_hvr">
              <svg className="vj_icn PbdDt_i-icn vj_info">
                <use xlinkHref="#vj_info" />
              </svg>
              <div className="dd-nav">
                {/* Inner Link 1 */}
                <div className="dd-nav_in">
                  <ul className="dd-nav_ul">
                    <li className="dd-nav_li">
                      <div className="PbdDt_txt-rw">
                        <svg className="PbdDt_icn vj_icn vj_pencil">
                          <use xlinkHref="#vj_pencil" />
                        </svg>
                        <div className="PbdDt_txt-wr">
                          <span className="PbdDt_txt1">Published On</span>
                          <span className="PbdDt_txt2">
                            {formatDateTime(published)} IST
                          </span>
                        </div>
                      </div>
                    </li>
                    <li className="dd-nav_li">
                      <div className="PbdDt_txt-rw">
                        <svg className="PbdDt_icn vj_icn vj_clock">
                          <use xlinkHref="#vj_clock" />
                        </svg>
                        <div className="PbdDt_txt-wr">
                          <span className="PbdDt_txt1">Last Updated On</span>
                          <span className="PbdDt_txt2">
                            {formatDateTime(modified)} IST
                            {/* Display last modified date */}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default PostBy;
