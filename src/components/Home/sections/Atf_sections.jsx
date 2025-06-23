"use client";
import React from "react";
import Home_rhs from "@/src/components/Sidebar/Home_rhs";
import Home_atf_story from "@/src/components/Home/Home_atf_story";

// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";

const Atf_Sections = () => {
  const { articles, loading, error } = useArticles();

  if (loading) {
    return (
      <section className="section mt-5">
        <div className="vjl-cntr text-center text-gray-500">
          <p>Loading articles...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section mt-5">
        <div className="vjl-cntr text-center text-red-600">
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
