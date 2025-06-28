"use client";

import React from "react";
import Title1 from "../Title1";
import "../../../styles/css/elements/tb-tab.css";

import { useState } from "react";

// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";

const Home_section4 = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { label: "Women", content: "Tab 1 Content" },
    { label: "Men", content: "Tab 2 Content" },
    { label: "Kids", content: "Tab 3 Content" },
  ];

  return (
    <>
      <div>
        <div style={{ display: "flex", gap: 10 }}>
          {tabs.map((tab, idx) => (
            <button
              key={tab.label}
              onClick={() => setActiveTab(idx)}
              style={{
                fontWeight: activeTab === idx ? "bold" : "normal",
                borderBottom: activeTab === idx ? "2px solid blue" : "none",
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div style={{ marginTop: 20 }}>{tabs[activeTab].content}</div>
      </div>

      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="Health Solution" link="/health-solution" />
              <div className="TlTbs hr-scroll">
                <ul className="TlTbs-ul hr-scroll__content" id="ulwebfeattab">
                  <li id="webfeattab-1" className="TlTbs-li">
                    <a
                      href="javascript:void(0)"
                      className="TlTbs-lnk TlTbs-act"
                    >
                      Women
                    </a>
                  </li>
                  <li id="webfeattab-2" className="TlTbs-li">
                    <a href="javascript:void(0)" className="TlTbs-lnk">
                      Men
                    </a>
                  </li>
                  <li id="webfeattab-6" className="TlTbs-li">
                    {" "}
                    <a href="javascript:void(0)" className="TlTbs-lnk">
                      kids
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="vjl-md-12">
              <div className="crd-c_v2 mb-30">
                <div className="crd_img">
                  <div className="img-gr img-gr_a">
                    <img
                      className=""
                      title=""
                      alt=""
                      src="images/doctor/injection.png"
                      data-src="images/doctor/injection.png"
                    />
                  </div>
                </div>

                <div className="crd_txt-wrp">
                  <div className="crd_cat">
                    <a className="crd_cat-lk" href="#">
                      Health Care
                    </a>
                  </div>
                  <h3 className="crd_D-ttl4">
                    <a href="#" className="crd_lnk">
                      Second Trimester Of Pregnancy: Expert Explains Symptoms,
                      Diet, and Exercise Second Trimester
                    </a>
                  </h3>
                </div>
              </div>
            </div>

            <div className="vjl-md-12">
              <div className="ls-ns ls-ns-3">
                <ul className="ls-ns_ul ls-ns_br">
                  <li className="ls-ns_li">
                    <div className="crd-c_v1">
                      <a href="#" className="crd_img">
                        <div className="img-gr img-gr_a">
                          <img
                            className=""
                            title=""
                            alt=""
                            src="images/doctor/hlth3.png"
                            data-src="images/doctor/hlth3.png"
                          />
                        </div>
                      </a>

                      <div className="crd_txt-wrp">
                        <div className="crd_cat">
                          <a className="crd_cat-lk" href="#">
                            Health Care
                          </a>
                        </div>
                        <h3 className="crd_D-ttl2">
                          <a className="crd_lnk" href="#">
                            Second Trimester Of Pregnancy: Expert Explains
                            Symptoms, Diet,
                          </a>
                        </h3>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section4;
