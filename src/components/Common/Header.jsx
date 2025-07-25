import React from "react";
import Logo from "./global_elements/Logo";
import Header_Right from "./global_elements/Header_Right";
import Mobile_Subnav_server from "./global_elements/Mobile_Subnav_server";
import Humbernav from "./global_elements/Humbernav";
import Navigation_server from "./global_elements/Navigation_server";

import "../../styles/css/header/ndtv-col.css";
import "../../styles/css/header/doctor/base/base.css";
import "../../styles/css/header/doctor/base/base-ai.css";
import "../../styles/css/base/base-doctor.css";
import "../../styles/css/header/fonts-atf.css";
import "../../styles/css/header/header.css";
import "../../styles/css/header/header-icons.css";
// import "../../styles/css/header/global-nav-ad-top.css";
import "../../styles/css/widgets/dropdown/global-nav.css";
import "../../styles/css/widgets/dropdown/get-app.css";

import "../../styles/css/tooltip.css";
import "../../styles/css/hr-scroll.css";
import "../../styles/css/img-gratio.css";
import "../../styles/css/overlay.css";
import "../../styles/css/helper.css";

// ATF
import "../../styles/css/responsive/responsive-atf.css";
import "../../styles/css/responsive/responsive-desktop-atf.css";
// BTF
import "../../styles/css/responsive/responsive-btf.css";
import "../../styles/css/responsive/responsive-desktop-btf.css";

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
