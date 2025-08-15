import React from "react";
import Ad_300X250_wap from "../../Common/Advertisement/Ad_300X250_wap";
import Home_atf_story_wap from "./Home_atf_story_wap";
import CalcSmall from "../CalcSmall";
import ListNewsWap from "./ListNewsWap";

const Atf_section_wap = ({ articles, error }) => {
  if (error) {
    return (
      <section className="section mt-5">
        <div className="vjl-cntr text-center">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="section pt-15 mob">
        <div className="vjl-cntr2">
          {/*====== Row ======*/}
          <div className="vjl-row">
            {/*--- Spacing Top Home page ---*/}
            <Home_atf_story_wap articles={articles} error={error} />

            <div className="vjl-sm-12">
              {/* Advertisement */}
              <Ad_300X250_wap />

              <ListNewsWap articles={articles} error={error} />

              {/* Advertisement */}
              <Ad_300X250_wap />

              {/* Calculate Matrics */}
              <CalcSmall />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Atf_section_wap;
