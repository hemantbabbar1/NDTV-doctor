import React from "react";
import { FaUser } from "react-icons/fa6";

import "../../../Styles/css/header/doctor/base/login-signup.css";

const Login_Btn = () => {
  return (
    <>
      <div className="log_btn log_btn-ac t side-nav-trigger">
        <div className="log_btn-dt"></div>
        <FaUser className="vj_user" />
      </div>
    </>
  );
};

export default Login_Btn;
