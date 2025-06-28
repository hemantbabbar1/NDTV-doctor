import React from "react";
import Trending_news from "../../Common/Trending_news";
import Faq_block from "../Faq_block";
import "../../../styles/css/elements/doctor-faq.css";

<link rel="stylesheet" href="css/elements/doctor-faq.css"></link>;

const Home_faq = () => {
  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-9">
              <Faq_block />
            </div>

            <aside className="vjl-md-3">
              <Trending_news />
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_faq;
