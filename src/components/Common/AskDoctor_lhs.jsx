import React from "react";
import "../../styles/css/elements/ask-doctor-widget.css";

const AskDoctor_lhs = () => {
  return (
    <>
      <div className="AskDcWdg_wr">
        <s className="AskDcWdg_cn">
          <div className="AskDcWdg_tp">
            <img src="/assets/images/doctor/female-doctor.png" alt="Doctor" />
          </div>

          <div className="AskDcWdg_txt-wr">
            <div className="AskDcWdg_ttl">
              if you have any query about any medical problem
            </div>

            <div className="AskDcWdg_btn">Ask a Doctor</div>
          </div>
        </s>
      </div>
    </>
  );
};

export default AskDoctor_lhs;
