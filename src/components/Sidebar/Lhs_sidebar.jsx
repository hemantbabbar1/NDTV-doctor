import React from "react";
import AskDoctor_lhs from "../Common/AskDoctor_lhs";
import Recent_news_sever from "../Common/Recent_news_sever";

const Lhs_sidebar = () => {
  return (
    <>
      {/* <div className="s-lf-sepr"></div> */}
      {/* Ask a Doctor */}
      <AskDoctor_lhs />
      {/* Recent News */}
      <Recent_news_sever />
    </>
  );
};

export default Lhs_sidebar;
