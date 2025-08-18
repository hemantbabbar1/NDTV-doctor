import React from "react";
// import "./FAQ_listing.css";

const FAQ_listing = ({ faqData }) => {
  if (!faqData || faqData.length === 0) {
    return (
      <div className="faq-empty">
        <p>No FAQs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="faq-container">
      <div className="faq-intro">
        <p>Find answers to commonly asked health and medical questions.</p>
      </div>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div
            key={`faq-${index}-${
              item.question?.slice(0, 20).replace(/\s+/g, "-") || index
            }`}
            className="faq-item"
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">+</span>
            </div>

            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>

            <div className="faq-meta">
              <span className="faq-category">Health & Wellness</span>
              <span className="faq-updated">Recently Updated</span>
            </div>
          </div>
        ))}
      </div>

      <div className="faq-footer">
        <p>
          Can't find what you're looking for?{" "}
          <a href="/contact">Contact our medical experts</a>
        </p>
      </div>
    </div>
  );
};

export default FAQ_listing;
