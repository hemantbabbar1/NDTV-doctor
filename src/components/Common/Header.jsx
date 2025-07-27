import React from "react";
import Logo from "./global_elements/Logo";
import Header_Right from "./global_elements/Header_Right";
import Mobile_Subnav_server from "./global_elements/Mobile_Subnav_server";
import Humbernav from "./global_elements/Humbernav";
import Navigation_server from "./global_elements/Navigation_server";

import "../../Styles/css/header/ndtv-col.css";
import "../../Styles/css/header/doctor/base/base.css";
import "../../Styles/css/header/doctor/base/base-ai.css";
import "../../Styles/css/base/base-doctor.css";
import "../../Styles/css/header/fonts-atf.css";
import "../../Styles/css/header/header.css";
import "../../Styles/css/header/header-icons.css";
// import "../../Styles/css/header/global-nav-ad-top.css";
import "../../Styles/css/widgets/dropdown/global-nav.css";
import "../../Styles/css/widgets/dropdown/get-app.css";

import "../../Styles/css/tooltip.css";
import "../../Styles/css/hr-scroll.css";
import "../../Styles/css/img-gratio.css";
import "../../Styles/css/overlay.css";
import "../../Styles/css/helper.css";

// ATF
import "../../Styles/css/responsive/responsive-atf.css";
import "../../Styles/css/responsive/responsive-desktop-atf.css";
// BTF
import "../../Styles/css/responsive/responsive-btf.css";
import "../../Styles/css/responsive/responsive-desktop-btf.css";

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
        <Mobile_Subnav_server />
      </div>
    </>
  );
};

export default Header;
