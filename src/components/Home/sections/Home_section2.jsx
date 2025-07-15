import React from "react";
import Trending_news from "../../Common/Trending_news";
import "../../../styles/css/elements/doctor-faq.css";
import Home_faq_block_server from "../Faq_block_server";

<link rel="stylesheet" href="css/elements/doctor-faq.css"></link>;

const Home_faq = () => {
  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-9">
              <Home_faq_block_server />
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
