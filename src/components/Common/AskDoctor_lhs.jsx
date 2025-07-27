import React from "react";
import "../../Styles/css/elements/ask-doctor-widget.css";
import Link from "next/link";
import Image from "next/image";

const AskDoctor_lhs = () => {
  return (
    <>
      <div className="AskDcWdg_wr">
        <Link className="AskDcWdg_cn" href="#">
          <div className="AskDcWdg_tp">
            <Image
              width={195}
              height={196}
              fetchPriority="high"
              src="/assets/images/doctor/female-doctor.png"
              alt="Ask a dcotor"
            />
          </div>

          <div className="AskDcWdg_txt-wr">
            <div className="AskDcWdg_ttl">
              if you have any query about any medical problem
            </div>

            <div className="AskDcWdg_btn">Ask a Doctor</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default AskDoctor_lhs;
