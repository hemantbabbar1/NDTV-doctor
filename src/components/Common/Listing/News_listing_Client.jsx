"use client";
import React, { useState, useEffect, useRef } from "react";
import News_listing from "./News_listing";
import { SlArrowDown } from "react-icons/sl";
import Link from "next/link";

import "../../../Styles/css/elements.css";
import "../../../Styles/css/loader-list.css";

const News_listing_Client = ({ listingnews }) => {
  // State to manage visible news count and loading state
  const [visibleCount, setVisibleCount] = useState(5);
  const [loading, setLoading] = useState(false);
  const [fadeInRange, setFadeInRange] = useState([0, 5]);
  const timeoutRef = useRef();

  // Handle loading more news
  const handleMoreNews = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setVisibleCount((prev) => {
        const newCount = prev + 5;
        setFadeInRange([prev, newCount]);
        return newCount;
      });
      setLoading(false);
    }, 150);
  };

  // Remove fade-in class after a delay
  useEffect(() => {
    if (fadeInRange[0] !== fadeInRange[1]) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setFadeInRange([0, 0]), 1000);
      return () => clearTimeout(timeoutRef.current);
    }
  }, [fadeInRange]);

  return (
    <>
      <News_listing
        listingnews={listingnews}
        visibleCount={visibleCount}
        fadeInRange={fadeInRange}
      />
      {visibleCount < listingnews.length && (
        <div className="btn_bm-cntr mb-20">
          <Link
            className="btn_bm"
            href="#"
            onClick={handleMoreNews}
            disabled={loading}
          >
            More News
            <SlArrowDown className="vj_icn vj_arrow-down" />
          </Link>
          {loading && (
            <div className="lodr_wrp">
              <div className="lodr_dot" />
              <div className="lodr_dot" />
              <div className="lodr_dot" />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default News_listing_Client;
