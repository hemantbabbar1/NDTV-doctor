"use client";

import React, { useState } from "react";
import Title1 from "../Title1";
import "../../../styles/css/elements/tb-tab.css";
import Link from "next/link";
import Image from "next/image";

// This component now receives 'allData' and 'error' as props
const Home_section5 = ({ allData, error }) => {
  // Define categories and state for active tab
  const categories = ["Women", "Men", "Kids"];
  const [activeTab, setActiveTab] = useState(0);

  // If there's an error, display it
  if (error) {
    return (
      <section className="section_two">
        <div className="vjl-cntr text-center text-red-600">
          <p>Error: {error}</p>
        </div>
      </section>
    );
  }

  // If there's no data, display a message
  if (!allData || allData.length === 0) {
    return (
      <section className="section_two">
        <div className="vjl-cntr text-center text-gray-500">
          <p>No content available.</p>
        </div>
      </section>
    );
  }

  const TabContent = ({ data, activeCategory }) => {
    const categoryItems = data.filter(
      (item) => item.category === activeCategory
    );

    const firstResult = categoryItems[0];
    const secondResult = categoryItems[1];
    const remainingItems = categoryItems.slice(2, 6);

    return (
      <>
        <div className="vjl-row">
          <div className="vjl-md-6">
            {firstResult ? (
              <div className="crd-a mb-10 HS_col">
                <div className="crd_img">
                  <div className="img-gr img-gr_a">
                    <Image
                      className=""
                      title={firstResult.title}
                      alt={firstResult.title}
                      src={firstResult.thumb_image}
                      width={685}
                      height={386}
                    />
                  </div>
                </div>
                <div className="crd_txt-wrp">
                  <div className="crd_cat">
                    <Link className="crd_cat-lk" href={firstResult.link || "#"}>
                      {firstResult.category}
                    </Link>
                  </div>
                  <h3 className="crd_D-ttl4 min-h-60">
                    <Link href={firstResult.link || "#"} className="crd_lnk">
                      {firstResult.title}
                    </Link>
                  </h3>
                  {firstResult && <div className="CrdSptr CrdSptr_a"></div>}
                </div>
              </div>
            ) : (
              <p>No content available for {activeCategory}.</p>
            )}
          </div>

          <div className="vjl-md-6">
            {secondResult ? (
              <div className="crd-a mb-10 HS_col">
                <div className="crd_img">
                  <div className="img-gr img-gr_a">
                    <Image
                      className=""
                      title={secondResult.title}
                      alt={secondResult.title}
                      src={secondResult.thumb_image}
                      width={685}
                      height={386}
                    />
                  </div>
                </div>
                <div className="crd_txt-wrp">
                  <div className="crd_cat">
                    <Link
                      className="crd_cat-lk"
                      href={secondResult.link || "#"}
                    >
                      {secondResult.category}
                    </Link>
                  </div>
                  <h3 className="crd_D-ttl4 min-h-60">
                    <Link href={secondResult.link || "#"} className="crd_lnk">
                      {secondResult.title}
                    </Link>
                  </h3>
                  {secondResult && <div className="CrdSptr CrdSptr_a"></div>}
                </div>
              </div>
            ) : (
              <p>No content available for {activeCategory}.</p>
            )}
          </div>
        </div>

        <div className="vjl-row">
          <div className="vjl-md-12">
            <div className="ls-ns ">
              <ul className="ls-ns_ul ls-ns-2 ls-ns_br">
                {remainingItems.map((item) => (
                  <li className="ls-ns_li" key={item.id}>
                    <div className="crd-c_v1">
                      <Link href={item.link || "#"} className="crd_img">
                        <div className="img-gr img-gr_a">
                          <Image
                            className=""
                            title={item.title}
                            alt={item.title}
                            src={item.thumb_image}
                            width={120}
                            height={80}
                          />
                        </div>
                      </Link>
                      <div className="crd_txt-wrp">
                        <div className="crd_cat">
                          <Link className="crd_cat-lk" href={item.link || "#"}>
                            {item.category}
                          </Link>
                        </div>
                        <h3 className="crd_D-ttl3">
                          <Link className="crd_lnk" href={item.link || "#"}>
                            {item.title}
                          </Link>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
                {remainingItems.length === 0 && firstResult && (
                  <p>No additional items for {activeCategory}.</p>
                )}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <section className="section_two">
        <div className="Bg-cl1">
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
            </div>
            <TabContent data={allData} activeCategory={categories[activeTab]} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section5;