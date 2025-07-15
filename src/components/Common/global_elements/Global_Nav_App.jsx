import React from "react";
import Link from "next/link";

const Global_Nav_App = () => {
  return (
    <>
      <div className="GlbNv_DwnLdApp mb-20">
        <div className="dd-nav_in-tl GlbNvDrp_ttl">
          <Link
            className="dd-nav_in-tl-lk GlbNvDrp_ttl-lk"
            href="#app-download-section"
          >
            Get App for Better Experience
          </Link>
        </div>

        <div className="DwnLdApp1_cnt">
          <div className="DwnLdApp1_btns">
            <Link
              className="DwnLdApp1_andr"
              href="https://play.google.com/store/apps/details?id=com.july.ndtv&hl=en_IN&pli=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get NDTV app on Google Play"
            >
              <span className="DwnLdApp1_icn1">
                <svg
                  id="Layer_1_GooglePlay"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16.45 18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    id="Page-1_GooglePlay"
                    className="cls-1"
                    d="M2.73.28C2.33.02,1.83-.06,1.37.05l8.12,8.12,2.63-2.63L2.73.28ZM.36.71C.13,1.01,0,1.39,0,1.77v14.46c0,.38.13.76.36,1.06l8.29-8.29L.36.71ZM15.55,7.46l-2.36-1.32-2.87,2.87,2.87,2.87,2.36-1.32c.56-.31.9-.9.9-1.54s-.35-1.23-.9-1.54h0ZM9.48,9.83L1.37,17.95c.47.11.96.03,1.36-.24l9.39-5.25-2.63-2.63Z"
                  ></path>
                </svg>
              </span>
              <div className="DwnLdApp1_andr-cnt">
                <div className="DwnLdApp1_andr-ttl1">Get it on</div>
                <div className="DwnLdApp1_andr-ttl2">Google Play</div>
              </div>
            </Link>

            <Link
              className="DwnLdApp1_andr"
              href="https://apps.apple.com/in/app/ndtv-news-app/id377869410"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download NDTV app on the App Store"
            >
              <span className="DwnLdApp1_icn2">
                <svg
                  id="Layer_1_AppStore"
                  data-name="Layer 1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 14.68 18"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    id="Page-1_AppStore"
                    className="cls-1"
                    d="M10.8,0h.13c.09,1.06-.26,2.11-.97,2.9-.61.84-1.61,1.32-2.64,1.25-.08-1.03.28-2.05.99-2.81.66-.72,1.54-1.19,2.5-1.33ZM14.67,13.21v.04c-.35,1.04-.85,2.01-1.5,2.89-.57.79-1.27,1.85-2.52,1.85-1.08,0-1.8-.69-2.91-.71-1.17-.02-1.82.58-2.89.73h-.36c-.76-.19-1.43-.65-1.88-1.3C1.07,14.85.16,12.56,0,10.16v-.81c0-1.73.87-3.35,2.3-4.33.77-.5,1.7-.72,2.61-.6.44.08.87.2,1.28.37.4.21.83.34,1.28.38.31-.04.62-.14.9-.27.9-.43,1.9-.6,2.89-.51,1.19.11,2.27.76,2.94,1.75-1.34.74-2.1,2.22-1.92,3.75.1,1.48,1.03,2.77,2.4,3.33h0Z"
                  ></path>
                </svg>
              </span>
              <div className="DwnLdApp1_andr-cnt">
                <div className="DwnLdApp1_andr-ttl1">Download on the</div>
                <div className="DwnLdApp1_andr-ttl2">App Store</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Global_Nav_App;
