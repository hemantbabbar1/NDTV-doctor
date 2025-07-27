// "use client";
import React from "react";
import Home_rhs from "@/src/components/Sidebar/Home_rhs";
import Home_atf_story from "@/src/components/Home/Home_atf_story";

const Atf_Sections = ({ articles, error }) => {
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
      <section className="section mt-5">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-sm-12">
              <div className="vjl2_cn">
                <Home_atf_story articles={articles} />
                <Home_rhs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Atf_Sections;
