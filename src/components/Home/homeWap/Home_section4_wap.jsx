"use client";

import React, { useState } from "react";
import Title1 from "../Title1";
import "../../../Styles/css/elements/tb-tab.css";

import Link from "next/link";
import Image from "next/image";

// This component now receives 'allData' and 'error' as props
const Home_section4_wap = ({ allData, error }) => {
  const categories = ["Women", "Men", "Kids"];
  const [activeTab, setActiveTab] = useState(0);

  if (error) {
    return (
      <section className="section_two">
        <div className="vjl-cntr text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  if (!allData || allData.length === 0) {
    return (
      <section className="section_two">
        <div className="vjl-cntr text-center text-gray-500">
          <p>No content available1.</p>
        </div>
      </section>
    );
  }

  const TabContent = ({ data, categories }) => {
    const activeCategory = categories[activeTab];
    const firstResult = data.find((item) => item.category === activeCategory);
    const filtered = data
      .filter((item) => item.category === activeCategory)
      .slice(0, 4);

    return (
      <>
        <div className="vjl-md-12">
          {firstResult ? (
            <div className="crd-b mb-0" key={firstResult.id}>
              <div className="crd_img">
                <Link className="img-gr img-gr_a" href={firstResult.link}>
                  <Image
                    className=""
                    title={firstResult.title}
                    alt={firstResult.title}
                    src={firstResult.thumb_image}
                    width={685}
                    height={386}
                  />
                </Link>
              </div>
              <div className="crd_txt-wrp">
                <div className="crd_cat">
                  <Link className="crd_cat-lk" href={firstResult.link}>
                    {firstResult.category}
                  </Link>
                </div>
                <h3 className="crd_D-ttl4">
                  <Link href={firstResult.link} className="crd_lnk">
                    {firstResult.title}
                  </Link>
                </h3>
              </div>
            </div>
          ) : (
            <div style={{ color: "#888", padding: "1rem" }}>
              No data found for this category.
            </div>
          )}

          <div className="CrdSptr CrdSptr_ a"></div>
        </div>
        <div className="vjl-md-12">
          <div className="ls-ns">
            <ul className="ls-ns_ul ls-ns_br">
              {filtered.slice(1, 4).map((item) => (
                <li className="ls-ns_li" key={item.id}>
                  <div className="crd-c_v1">
                    <Link href={item.link} className="crd_img">
                      <div className="img-gr img-gr_a">
                        <Image
                          className=""
                          title={item.title}
                          alt={item.title}
                          src={item.thumb_image}
                          width={190}
                          height={107}
                        />
                      </div>
                    </Link>
                    <div className="crd_txt-wrp">
                      <div className="crd_cat">
                        <Link className="crd_cat-lk" href={item.link}>
                          {item.category}
                        </Link>
                      </div>
                      <h3 className="crd_D-ttl2">
                        <Link className="crd_lnk" href={item.link}>
                          {item.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="Health Solution" link="/health-solution" />
              <div className="TlTbs hr-scroll">
                <ul className="TlTbs-ul hr-scroll__content">
                  {categories.map((cat, idx) => (
                    <li className="TlTbs-li" key={idx}>
                      <div
                        onClick={() => setActiveTab(idx)}
                        className={`TlTbs-lnk${
                          activeTab === idx ? " TlTbs-act" : ""
                        }`}
                      >
                        {cat}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <TabContent data={allData} categories={categories} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section4_wap;
