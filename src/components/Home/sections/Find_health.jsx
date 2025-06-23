"use client";

import React from "react";
import "@/src/styles/css/elements/find-health-solution.css";
import Title1 from "@/src/components/Home/Title1";

// Importing card data from JSON file
import { useEffect, useState } from "react";
import axios from "axios";

const Find_Health = () => {
  const alphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  const [cardData, setCardData] = useState([]);
  useEffect(() => {
    axios
      .get("/data/healthCards.json")
      .then((res) => setCardData(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <section className="section_two">
        <div className="FdHhSl_wr">
          <div className="vjl-cntr">
            <Title1 title="Find Health Solutions" link="#" />
            <div className="vjl-row">
              <div className="vjl-md-12">
                <div className="FdHhSl_bg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="346.617"
                    height="406.014"
                    viewBox="0 0 346.617 406.014"
                  >
                    <g
                      id="Group_8866"
                      data-name="Group 8866"
                      transform="translate(-1426.591 -1167.512)"
                      opacity="0.4"
                    >
                      <g
                        id="health-healthcare-medical-medicine-secure-security-svgrepo-com"
                        transform="translate(1426.591 1167.512)"
                      >
                        <g
                          id="Group_8655"
                          data-name="Group 8655"
                          transform="translate(0 0)"
                        >
                          <g
                            id="Group_8654"
                            data-name="Group 8654"
                            transform="translate(0 0)"
                          >
                            <path
                              id="Path_5447"
                              data-name="Path 5447"
                              d="M805.731,991.214c-4.375-1.856-9.811-4.419-15.954-7.778-22.1-12.065-42.736-28.549-61.386-48.967-26.34-28.9-47.73-64.922-63.552-107.127-18.385-49.056-29.3-106.6-32.439-171.254,9.458-5.524,26.517-14.363,56.569-27.533,34.693-15.2,73.142-30.185,99.261-40.084a49.852,49.852,0,0,1,35.4-.044c26.119,9.855,64.524,24.749,99.216,39.908,29.61,12.949,46.625,21.744,56.171,27.224-4.552,64.922-16.308,122.64-35,171.872C927.84,869.857,906.494,906.052,880.552,935c-18.252,20.374-38.361,36.77-59.707,48.7C815.056,986.928,809.929,989.4,805.731,991.214Z"
                              transform="translate(-632.4 -585.201)"
                              fill="var(--vj-cl-fnd6)"
                              opacity="1"
                            />
                            <path
                              id="Path_5448"
                              data-name="Path 5448"
                              d="M995.206,813.759a6.629,6.629,0,0,1,6.629,6.629v54.359a6.629,6.629,0,0,1-6.629,6.629h-47.73v47.73a6.629,6.629,0,0,1-6.629,6.629H886.488a6.629,6.629,0,0,1-6.629-6.629v-47.73h-47.73a6.629,6.629,0,0,1-6.629-6.629V820.388a6.629,6.629,0,0,1,6.629-6.629h47.73v-47.73a6.629,6.629,0,0,1,6.629-6.629h54.359a6.629,6.629,0,0,1,6.629,6.629v47.73"
                              transform="translate(-740.161 -682.414)"
                              fill="var(--vj-cl-fnd5)"
                              opacity="1"
                            />
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                </div>

                <div className="FdHhSl_ltr">
                  <ul className="FdHhSl_ltr-ul">
                    {/* Every Letter Will Come with Map Filter */}
                    {alphabet.map((letter) => (
                      <li key={letter} className="FdHhSl_ltr-li">
                        <a href="#" className="FdHhSl_ltr-lk">
                          {letter}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="FdHhCrd_ul">
                  {cardData.map((card) => (
                    <div className="FdHhCrd_li" key={card.title}>
                      <a className="FdHhSl_crd" href={card.link}>
                        <div className="FdHhSl_crd-icn">
                          <svg
                            className={`vj_icn ${card.icon.replace("#", "")}`}
                          >
                            <use href={card.icon}></use>
                          </svg>
                        </div>
                        <div className="FdHhSl_crd-ttl">{card.title}</div>
                      </a>
                    </div>
                  ))}

                  <div className="FdHhCrd_li">
                    <a className="FdHhSl_crd FdHhSl_crd-all" href="#">
                      See All{" "}
                      <svg className="vj_icn vj-icn-arrow-left">
                        <use xlinkHref="#vj-icn-arrow-left"></use>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Find_Health;
