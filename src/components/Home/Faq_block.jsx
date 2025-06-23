"use client";

import React, { useEffect, useState } from "react";
import Title1 from "./Title1";
import Ask_doctor from "./Ask_doctor";

const Home_faq_block = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/data/faqs.json") // API endpoint for FAQs
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        return res.json();
      })
      .then((data) => {
        setFaqs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <>
      <Title1 title="FAQs - The Answers You Need" link="/faq" />
      <div className="vjl-row">
        <div className="vjl-md-6">
          <div className="DcFaq_wr">
            <div className="DcFaq_cn">
              <div className="DcFaq_ul">
                {faqs.slice(0, 4).map((faq, idx) => (
                  <div className="DcFaq_li" key={faq.question || idx}>
                    <a className="DcFaq_crd" href="#">
                      <h3 className="DcFaq_ttl">{faq.question}</h3>
                      <div className="DcFaq_icn">
                        <svg className="vj_icn vj-icn-arrow-left">
                          <use xlinkHref="#vj-icn-arrow-left"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="vjl-md-6">
          <div className="DcFaq_wr">
            <div className="DcFaq_cn">
              <div className="DcFaq_ul">
                {faqs.slice(4, 6).map((faq, idx) => (
                  <div className="DcFaq_li" key={faq.question || idx}>
                    <a className="DcFaq_crd" href="#">
                      <h3 className="DcFaq_ttl">{faq.question}</h3>
                      <div className="DcFaq_icn">
                        <svg className="vj_icn vj-icn-arrow-left">
                          <use xlinkHref="#vj-icn-arrow-left"></use>
                        </svg>
                      </div>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Ask_doctor />
        </div>
      </div>
    </>
  );
};

export default Home_faq_block;
