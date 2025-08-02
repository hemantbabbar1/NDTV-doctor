import React from "react";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";
import "../../Styles/css/elements.css";
import "../../Styles/css/loader-list.css";

const LoadMoreButton = ({ onClick, loading, label = "More News" }) => {
  return (
    <div className="btn_bm-cntr mb-20">
      <Link className="btn_bm" href="#" onClick={onClick} disabled={loading}>
        {label}
        <SlArrowDown className="vj_icn vj_arrow-down" />
      </Link>
      {loading && (
        <div className="lodr_wrp">
          <div className="lodr_dot" />
          <div className="lodr_dot" />
          <div className="lodr_dot" />
        </div>
      )}
    </div>
  );
};

export default LoadMoreButton;
