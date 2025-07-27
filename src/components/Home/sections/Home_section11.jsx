"use client";
import React from "react";
import Title1 from "../Title1";
import "../../../Styles/css/widgets/hr-list1.css";
import Webstories_card from "../../Common/gallery/Webstories_card";

const Home_section11 = ({ homeWebstory }) => {
  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="Web Stories" link="/webstories" />
            </div>
          </div>

          <div className="vjl-row">
            <div className="vjl-md-12">
              <ul className="Hrlst5_ul Hrlst5_ul-5 mb-15 WsNsLst_wr">
                {homeWebstory &&
                  homeWebstory.map((webstory) => (
                    <li className="Hrlst5_li" key={webstory.id}>
                      <Webstories_card webstory={webstory} />
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section11;
