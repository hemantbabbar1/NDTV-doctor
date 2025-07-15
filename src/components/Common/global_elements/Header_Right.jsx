import React from "react";
import Login_Btn from "./Login_Btn";
import Global_Nav_server from "./Global_Nav_server";

export const Header_Right = () => {
  return (
    <>
      <div className="mRgt_wr">
        <Global_Nav_server />
        <Login_Btn />
      </div>
    </>
  );
};

export default Header_Right;
