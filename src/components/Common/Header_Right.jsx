import React from "react";
import Global_Nav from "./Global_Nav";
import Login_Btn from "./Login_Btn";

export const Header_Right = () => {
  return (
    <>
      <div className="mRgt_wr">
        <Global_Nav />
        <Login_Btn />
      </div>
    </>
  );
};

export default Header_Right;
