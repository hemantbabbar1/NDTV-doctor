import React from "react";

import "../../Styles/css/widgets/catgory-tab-widget.css";

const Tabbing_element = () => {
  return (
    <>
      <div class="DcCatTb_wr">
        <div class="DcCatTb_cn">
          <div class="DcCatTb_ul">
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk DcCatTb_lk-act">
                ALL
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                AIDS
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                BONES &amp; JOINTS
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                CANCER
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                Diabetes
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                EYE
              </a>
            </div>
            <div class="DcCatTb_li">
              <a href="#" class="DcCatTb_lk">
                Endocronicolgy
              </a>
            </div>
          </div>
          <div class="DcCatTb_btn">
            {" "}
            <span
              class="DcCatTb_all DcCatTb_trigger"
              data-trigger=".nav-trigger"
              data-class="Js_Pup"
            >
              View All
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tabbing_element;
