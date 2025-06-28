import React from "react";

const Footer_copyright = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="FtrCpy_wr">
        <a
          className="FtrCpy_lk"
          href="https://www.ndtv.com/convergence/ndtv/new/codeofethics.aspx"
        >
          This website follows the DNPA Code of Ethics{" "}
        </a>
        <div className="FtrCpy_txt">
          © Copyright NDTV Convergence Limited {year}. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer_copyright;
