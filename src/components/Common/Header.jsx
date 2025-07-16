import React from "react";
import Logo from "./global_elements/Logo";
import Header_Right from "./global_elements/Header_Right";
import Mobile_Subnav from "./global_elements/Mobile_Subnav";
import Humbernav from "./global_elements/Humbernav";
import Navigation_server from "./global_elements/Navigation_server";

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
                <Navigation_server />
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
