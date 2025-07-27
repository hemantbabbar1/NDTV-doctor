import React from "react";
import "../../../../src/Styles/css/footer/footer1.css";

import Footer_left from "./Footer_left";
import Footer_right from "./Footer_right";

const Footer = () => {
  return (
    <>
      <footer className="FtrWdg ftr ftr-stk">
        <div className="Ftr_wr">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-sm-12 vjl-md-12 FtrMain">
                <Footer_left />
                <Footer_right />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
