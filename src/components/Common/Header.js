import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Header_Right from "./Header_Right";
import Mobile_Subnav from "./Mobile_Subnav";
import Humbernav from "./Humbernav";

const Header = () => {
  return (
    <>
      <div className="nav-stk_wr sticky">
        <nav className="m-nv m-nv_clr m-nv_clr1 m-nv_out">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12">
                <Humbernav />
                <Logo />
                <Navigation />
                <Header_Right />
              </div>
            </div>
          </div>
        </nav>

        {/* For Mobile Subnav */}
        <Mobile_Subnav />
      </div>
    </>
  );
};

export default Header;
