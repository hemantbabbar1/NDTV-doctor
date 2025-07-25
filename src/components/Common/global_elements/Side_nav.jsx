"use client";

import React from "react";
import Link from "next/link";
import Side_nav_social from "./Side_nav_social";
import "../../../styles/css/common/slide-nav.css";

const Side_nav = ({ allData, error, loopNav1, loopNav2, loopNav3 }) => {
  //Remove Side Nav if its open
  const removeBodyClass = () => {
    document.body.classList.remove("js_sid-nav");
  };

  if (error) {
    return (
      <section className="section_two">
        <div className="vjl-cntr err">Error: {error}</div>
      </section>
    );
  }

  return (
    <>
      <div className="sid-nav">
        <div className="sid-nav-wrp">
          <div className="snv_cn-hed">
            {/* Logo */}
            <Link className="ndtv-lgo" href="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="136.892"
                height="35.379"
                viewBox="0 0 136.892 35.379"
                className="vj_icn vj_logo-ndtv"
              >
                <g
                  id="Group_8903"
                  data-name="Group 8903"
                  transform="translate(-98.503 -15.82)"
                >
                  <g id="Group-2" transform="translate(93.398 15.815)">
                    <g id="Group" transform="translate(20.541 5.614)">
                      <g id="Group-27">
                        <path
                          id="Fill-13"
                          d="M11.958,10.521c-.451.014-.55-.18-.59-.374C11.807,10.076,11.763,10.346,11.958,10.521Z"
                          transform="translate(-11.368 -10.135)"
                          fill="#1558a1"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-23"
                          d="M14.113,94.626a1.165,1.165,0,0,1,.548,1.035c0,.7-.906,1.348-1.044,1.443s-.185-.028-.077-.126a2.73,2.73,0,0,0,.551-1.51Z"
                          transform="translate(-12.896 -71.248)"
                          fill="#fff"
                          stroke="#fff"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2.127"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                    <g
                      id="Group_8793"
                      data-name="Group 8793"
                      transform="translate(5.104 0.005)"
                    >
                      <g
                        id="final_doctor_ndtv_logo"
                        transform="translate(38.308 1.891)"
                      >
                        <path
                          id="Fill-17"
                          d="M.167.567V16.091H6.718c5.013,0,8.444-3.171,8.444-7.762,0-4.613-3.387-7.762-8.289-7.762ZM4.133,3.716H6.785a4.313,4.313,0,0,1,4.345,4.635c0,2.728-1.738,4.591-4.166,4.591H4.133Z"
                          transform="translate(-0.167 -0.434)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-18"
                          d="M68.542.086c-4.813,0-8.422,3.349-8.422,7.873,0,4.546,3.609,7.961,8.422,7.961,4.835,0,8.445-3.437,8.445-7.961C76.986,3.457,73.377.086,68.542.086Zm.045,3.3a4.4,4.4,0,0,1,4.323,4.591,4.439,4.439,0,0,1-4.323,4.635,4.525,4.525,0,0,1-4.411-4.635A4.471,4.471,0,0,1,68.587,3.39Z"
                          transform="translate(-43.532 -0.086)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-19"
                          d="M135.171.086c-4.746,0-8.333,3.371-8.333,7.851a7.9,7.9,0,0,0,8.2,7.984,9.438,9.438,0,0,0,6.439-2.839l-2.317-2.439a5.858,5.858,0,0,1-3.921,1.819,4.371,4.371,0,0,1-4.345-4.568,4.34,4.34,0,0,1,4.345-4.5,5.345,5.345,0,0,1,3.921,2.018L141.454,2.7A9.078,9.078,0,0,0,135.171.086"
                          transform="translate(-91.789 -0.086)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-20"
                          d="M197.458,3.68V.487H184.134V3.68h4.657V16.033h3.966V3.68Z"
                          transform="translate(-133.232 -0.376)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-21"
                          d="M243.168.086c-4.813,0-8.422,3.349-8.422,7.873,0,4.546,3.609,7.961,8.422,7.961,4.835,0,8.445-3.437,8.445-7.961C251.613,3.457,248,.086,243.168.086Zm.045,3.3a4.4,4.4,0,0,1,4.323,4.591,4.439,4.439,0,0,1-4.323,4.635A4.525,4.525,0,0,1,238.8,7.981a4.472,4.472,0,0,1,4.412-4.591Z"
                          transform="translate(-169.84 -0.086)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-22"
                          d="M315.617,16.091h4.5l-3.275-5.123a5.169,5.169,0,0,0,2.83-4.99c0-3.46-2.362-5.411-6.484-5.411h-6.974V16.091h3.966V11.722H313.3Zm-5.436-7.474V3.672h3.008c1.716,0,2.718.821,2.718,2.439,0,1.641-1,2.506-2.718,2.506Z"
                          transform="translate(-221.534 -0.434)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-23-2"
                          data-name="Fill-23"
                          d="M62.636,66.878l-4.865,9.268-5.19-9.268H18.694V79.354H29.567c3.727,0,5.566-2.146,5.566-5.755V72.262a8.494,8.494,0,0,0-.306-2.439h5.952v9.53h3.873v-9.53h5.333l5.385,9.53H60.2l6.585-12.476ZM13.46,75.76h-.086a1.882,1.882,0,0,1-1.564-1.205L9.583,70.161a5.47,5.47,0,0,0-4.872-3.28l-4.142,0V79.354H4.551V70.474h.161c.917,0,1.432.93,1.568,1.215L8.5,76.062a5.379,5.379,0,0,0,4.877,3.29l4.069,0V66.878H13.46Zm17.769-1.314c0,1.289-.694,1.978-2.189,1.978H22.583l.016-6.6h6.41c1.508,0,2.22.737,2.22,1.95Z"
                          transform="translate(-0.458 -48.397)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                        <path
                          id="Fill-24"
                          d="M60.057,83.378A2.353,2.353,0,1,1,57.7,81.025a2.353,2.353,0,0,1,2.353,2.353"
                          transform="translate(-40.082 -58.63)"
                          fill="red"
                          fillRule="evenodd"
                        />
                      </g>
                      <g id="Group_8795" data-name="Group 8795">
                        <path
                          id="Fill-4"
                          d="M20.478,0a3.846,3.846,0,0,0-3.849,3.847V5.717c0,2.124-1.494,2.986-3.334,1.925L11.662,6.7A3.858,3.858,0,0,0,6.4,8.112L5.622,9.455a3.84,3.84,0,0,0,1.407,5.252l1.632.94c1.842,1.061,1.841,2.781,0,3.84l-1.632.939a3.836,3.836,0,0,0-1.407,5.25L6.4,27.019a3.858,3.858,0,0,0,5.262,1.41l1.632-.94c1.842-1.061,3.334-.2,3.334,1.928v1.867a3.848,3.848,0,0,0,3.849,3.849h1.568a3.846,3.846,0,0,0,3.849-3.847V29.42c0-2.124,1.492-2.987,3.332-1.928l1.631.939a3.857,3.857,0,0,0,5.26-1.413l.777-1.343a3.837,3.837,0,0,0-1.406-5.25l-1.632-.939c-1.842-1.06-1.841-2.779,0-3.84l1.632-.94a3.84,3.84,0,0,0,1.406-5.252l-.777-1.343A3.858,3.858,0,0,0,30.857,6.7l-1.631.939c-1.84,1.06-3.332.194-3.332-1.925V3.849A3.845,3.845,0,0,0,22.045,0Z"
                          transform="translate(-5.104 -0.005)"
                          fill="#fff"
                          fillRule="evenodd"
                        />
                      </g>
                    </g>
                  </g>
                  <g
                    id="Group_8899"
                    data-name="Group 8899"
                    transform="translate(61.256 10.07)"
                  >
                    <path
                      id="Fill-5"
                      d="M11.238.2a1.426,1.426,0,0,1,1.2,1.267c-.176,7.28-.682,21.793-.859,29.142-.006.222-.3.124-.313-.1-.344-7.289-1.053-21.557-1.313-28.933A1.369,1.369,0,0,1,11.238.2Z"
                      transform="translate(42.437 10.144)"
                      fill="#03c1de"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Fill-9"
                      d="M4.12,8.643c.322.273.574.522.574.79s-.211.2-.435.3c-.118.055-.107.172-.3.172-.463,0-.669-.262-1.3-.262-.521,0-1.174.637-1.182,1.758a3.524,3.524,0,0,0,1.463,2.849l.082,2.4A6.658,6.658,0,0,1,0,11.426,3.067,3.067,0,0,1,3.007,8.04C3.545,8.04,3.787,8.361,4.12,8.643Z"
                      transform="translate(49.527 4.555)"
                      fill="#03c1de"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Fill-15"
                      d="M8.935,35.531c-.854,2.338-3.251,3.2-3.251,5.318a3.735,3.735,0,0,0,2,2.961L7.624,42.1a1.943,1.943,0,0,1-.641-1.24c0-.957,3.31-2.014,3.411-5.037a1.975,1.975,0,0,0-1.165-2.145Z"
                      transform="translate(45.475 -13.719)"
                      fill="#03c1de"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.5"
                      fillRule="evenodd"
                    />
                    <path
                      id="Fill-19-2"
                      data-name="Fill-19"
                      d="M11.909,65.328a2.225,2.225,0,0,1,1.071,1.819,4.014,4.014,0,0,1-1.459,2.515,2.95,2.95,0,0,0-.444,3.46l.048,1.037a3.968,3.968,0,0,1-1.179-3.03c0-2.026,1.812-2.6,1.882-4.477Z"
                      transform="translate(42.437 -36.276)"
                      fill="#03c1de"
                      stroke="#fff"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="0.5"
                      fillRule="evenodd"
                    />
                  </g>
                </g>
              </svg>
            </Link>
            {/* Close button with close side nav fucntion */}
            <span className="sid-nav-cls" onClick={removeBodyClass}>
              <svg className="snv_cn-icn vj_icn vj_close">
                <use xlinkHref="#vj_close" />
              </svg>
            </span>
          </div>

          <div className="sid-nav_wrp">
            {/* Search Field */}
            <form
              action="https://www.ndtv.com/search"
              className="srh_inp-wrp search-nav__form"
              name="search"
              method="get"
              id="topic_search_forms"
            >
              <span className="srh_inp-icn">
                <svg className="vj_icn vj_search">
                  <use xlinkHref="#vj_search" />
                </svg>
              </span>
              <input
                className="srh_inp"
                type="text"
                name="q"
                id="z"
                placeholder="Search for News, Car & Bike"
              />
              <label htmlFor="search_q">Search here</label>
            </form>
            {/* <div className="DwnLdApp2_wr">
              <div className="DwnLdApp2_cnt">
                <div className="DwnLdApp2_ttl">
                  Get App for Better Experience
                </div>
                <div className="DwnLdApp2_btns">
                  <Link className="DwnLdApp2_andr" href="#">
                    <div className="DwnLdApp2_andr-cnt">
                      <div className="DwnLdApp2_andr-ttl2">Install Now</div>
                    </div>
                    <span className="DwnLdApp2_icn1">
                      <svg
                        id="Layer_1"
                        data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 9.51 13"
                      >
                        <path
                          className="cls-1"
                          d="M9.51,12.25c0,.41-.34.75-.75.75H.76c-.41,0-.75-.34-.75-.75s.34-.75.75-.75h8c.41,0,.75.34.75.75ZM4.25,10.63c.14.13.32.2.51.2s.38-.07.52-.2l4-3.76c.3-.29.31-.76.03-1.06-.14-.15-.32-.23-.52-.24-.2,0-.4.07-.54.21l-2.74,2.57V.75c0-.41-.34-.75-.75-.75s-.75.34-.75.75v7.6l-2.73-2.57c-.19-.19-.48-.26-.74-.19-.26.08-.46.29-.52.56-.06.26.03.54.23.72l4,3.76Z"
                        ></path>
                      </svg>
                    </span>
                  </Link>
                </div>
              </div>
            </div> */}
            {/* Main Nav */}
            <ul className="sid-nav_ul">
              <li className="snv-two">
                <div className="sid-nav_li sid-nav_li-ttl">News Updates </div>
                <ul className="snv_cn-ul">
                  {loopNav1 &&
                    loopNav1.length > 0 &&
                    loopNav1.map((data, index) => (
                      <li className="snv_cn-li" key={index}>
                        {/* Added key prop */}
                        <Link className="snv_cn-lnk ripple" href={data.Link}>
                          <div className="snv_ic-wrp">
                            <svg className={`vj_icn vj_${data.EmbedCode}`}>
                              <use xlinkHref={`#vj_${data.EmbedCode}`} />
                            </svg>
                          </div>
                          {data.Title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </li>
              <li className="snv-two">
                <div className="sid-nav_li sid-nav_li-ttl">Featured</div>
                {/* Sub Nav */}
                <div className="sid-nav_div">
                  <ul className="sid-nav_sub">
                    {loopNav2 &&
                      loopNav2.length > 0 &&
                      loopNav2.map((data, index) => (
                        <li className="snv_cn-li" key={index}>
                          {/* Added key prop */}
                          <Link className="snv_cn-lnk ripple" href={data.Link}>
                            <div className="snv_ic-wrp">
                              <svg className={`vj_icn vj_${data.EmbedCode}`}>
                                <use xlinkHref={`#vj_${data.EmbedCode}`} />
                              </svg>
                            </div>
                            {data.Title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>

              <li className="snv-two">
                <div className="sid-nav_li sid-nav_li-ttl">More Links</div>
                {/* Sub Nav */}
                <div className="sid-nav_div">
                  <ul className="sid-nav_sub">
                    {loopNav3 &&
                      loopNav3.length > 0 &&
                      loopNav3.map((data, index) => (
                        <li className="snv_cn-li" key={index}>
                          {/* Added key prop */}
                          <Link className="snv_cn-lnk ripple" href={data.Link}>
                            <div className="snv_ic-wrp">
                              <svg className={`vj_icn vj_${data.EmbedCode}`}>
                                <use xlinkHref={`#vj_${data.EmbedCode}`} />
                              </svg>
                            </div>
                            {data.Title}
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>
              </li>

              {/* For Social Icons */}
              <Side_nav_social />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Side_nav;
