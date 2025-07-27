import React from "react";
import "../../Styles/css/widgets/title-widget-2.css";

const Pagetitle2 = ({ title }) => {
  return (
    <>
      <div className="Dcttl2_wr">
        <div className="Dcttl2_cn">
          <h1 className="Dcttl2_ttl">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default Pagetitle2;
