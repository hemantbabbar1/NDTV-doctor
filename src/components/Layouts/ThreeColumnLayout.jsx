import React from "react";
import Taboola_Article from "../Taboola/Taboola_article.jsx";
import ScrollClassToggler from "../Common/ScrollClassToggler";

import "../../styles/css/base/ndtv-col2.css";

const ThreeColumnLayout = ({ children, leftSidebar, rightSidebar }) => {
  // checked That leftside bar is here or not.
  const hasLeftSidebar = !!leftSidebar;

  // if Lhs is not coming with props then this class will be removed
  const articleClassName = `vjl-md-12 ${
    hasLeftSidebar ? "vjl-Mid-2 order-2" : ""
  }`.trim();

  return (
    <>
      {/* <!--====== Content ( LHS, Main Content and RHS ) ======--> */}
      <div className="vjl-cnt">
        <div className="vjl-cntr">
          <div className="stk_wrp vjl-row s-lmr js-pro_in d-flex">
            {/* <!--=== Main Content and LHS ===--> */}
            <div className="vjl-Mid-1">
              {/* <!-- Mid two col LHS and MID --> */}
              <div className="vjl-row">
                {/* LHS */}
                {hasLeftSidebar && (
                  <aside id="stk_cnt" className="vjl-Lhs-2 order-1 m_non">
                    {leftSidebar}
                  </aside>
                )}

                {/* <!--=== Main Content ===--> */}
                <article className={articleClassName}>{children}</article>
              </div>
              <ScrollClassToggler>
                <Taboola_Article />
              </ScrollClassToggler>
            </div>

            {/* RHS */}
            <aside className="vjl-Rhs-1 m_non">{rightSidebar}</aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThreeColumnLayout;
