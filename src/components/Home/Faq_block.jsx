"use client";

import React, { useEffect, useState } from "react";
import Title1 from "./Title1";
import Ask_doctor from "./Ask_doctor";

const Home_faq_block = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const res = await fetch("/data/faqs.json"); // API endpoint for FAQs
        if (!res.ok) throw new Error("Failed to fetch FAQs");
        const data = await res.json();
        setFaqs(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchFaqs();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <>
      <div className="vjl-row">
        <div className="vjl-md-12">
          <Title1 title="FAQs - The Answers You Need1" link="/faq" />
          <a className="tp_arrBx" href="/faq">
            <svg className="vj_icn vj-icn-arrow-left">
              <use xlinkHref="#vj-icn-arrow-left"></use>
            </svg>
          </a>
        </div>
      </div>

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
