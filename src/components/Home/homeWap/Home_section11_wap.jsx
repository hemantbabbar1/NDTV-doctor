"use client";
import React from "react";
import Title1 from "../Title1";
import "../../../Styles/css/widgets/hr-list1.css";
import Webstories_card from "../../Common/gallery/Webstories_card";
import "../../../Styles/css/wap-elements/full-rgt-hrscroll.css";

const Home_section11_wap = ({ homeWebstory }) => {
  return (
    <>
      <section className="section_two mt-20">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="Web Stories" link="/webstories" />
            </div>

            <div className="VDRes_HrSrl-cnt">
              <ul className="HrSrl-RtFl_ul HrSrl-RtFl_ul5">
                {homeWebstory &&
                  homeWebstory.map((Hmwebstory) => (
                    <li className="HrSrl-RtFl_li" key={Hmwebstory.id}>
                      {/* Use the Webstories_card component */}
                      <Webstories_card
                        webstory={Hmwebstory}
                        dropDirection="top"
                      />
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

export default Home_section11_wap;
