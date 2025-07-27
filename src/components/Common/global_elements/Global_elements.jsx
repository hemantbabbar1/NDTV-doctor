import React from "react";
import Overlay from "./Overlay";
import Btf_Symbol from "../Btf_Symbol";
import Side_nav_server from "./Side_nav_server";
import BackToTop from "./BackToTop";

const Global_elements = () => {
  return (
    <>
      <Side_nav_server />
      <Overlay />
      <BackToTop />
      <Btf_Symbol />
    </>
  );
};

export default Global_elements;
