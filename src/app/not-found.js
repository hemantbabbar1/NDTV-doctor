import Link from "next/link";
import Image from "next/image";
import "../Styles/css/pages-css/not-found.css";

import Breadcrumbs from "@/src/components/Common/Breadcrumbs";
import Rhs_sidebar from "@/src/components/Sidebar/Rhs_sidebar";

import ThreeColumnLayout from "../components/Layouts/ThreeColumnLayout";

export default function NotFound() {
  return (
    <>
      <Breadcrumbs
        customItems={[
          { label: "Home", href: "/" },
          { label: "Page Not Found", href: "#" },
        ]}
      />
      <ThreeColumnLayout rightSidebar={<Rhs_sidebar />}>
        <div className="Err_Cnt">
          {/* Effects */}
          <div className="Err_Eff-col">
            <div className="Err_Eff-wr">
              <svg
                className="Err-PPr"
                viewBox="0 0 300 300"
                width="300px"
                height="300px"
                role="img"
                aria-label=""
              >
                <g
                  className="Err-PPr_outline"
                  fill="none"
                  stroke="hsl(0,10%,10%)"
                  strokeWidth={8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  transform="translate(61,4)"
                >
                  <g className="Err-PPr_top" transform="translate(0,25)">
                    <polygon
                      className="Err-PPr_shadow"
                      fill="hsl(0,10%,70%)"
                      stroke="none"
                      points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                      transform="translate(-12,12)"
                    />
                    <rect
                      className="Err-PPr_tear-fill"
                      fill="hsl(0,0%,100%)"
                      stroke="none"
                      x={0}
                      y={137}
                      width={0}
                      height="23px"
                    />
                    <polygon
                      className="Err-PPr_fill"
                      fill="hsl(0,0%,100%)"
                      stroke="none"
                      points="0 148,0 0,137 0,187 50,187 148,155 138,124 148,93 138,62 148,31 138"
                    />
                    <polygon
                      className="Err-PPr_shadow"
                      fill="hsl(0,10%,70%)"
                      stroke="none"
                      points="137 0,132 55,187 50,142 45"
                    />
                    <polyline points="137 0,142 45,187 50" />
                    <polyline points="0 148,0 0,137 0,187 50,187 148" />
                    <g className="Err-PPr_lines" stroke="hsl(0,10%,70%)">
                      <polyline points="22 88,165 88" />
                      <polyline points="22 110,165 110" />
                      <polyline points="22 132,165 132" />
                    </g>
                    <polyline
                      className="Err-PPr_tear"
                      points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                      strokeDasharray="198 198"
                      strokeDashoffset={-198}
                    />
                  </g>
                  <g className="Err-PPr_bottom" transform="translate(0,25)">
                    <polygon
                      className="Err-PPr_shadow"
                      fill="hsl(0,10%,70%)"
                      stroke="none"
                      points="0 148,31 138,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                      transform="translate(-12,12)"
                    />
                    <polygon
                      className="Err-PPr_fill"
                      fill="hsl(0,0%,100%)"
                      stroke="none"
                      points="0 148,31 140,62 148,93 138,124 148,155 138,187 148,187 242,0 242"
                    />
                    <polyline points="187 148,187 242,0 242,0 148" />
                    <g className="Err-PPr_lines" stroke="hsl(0,10%,70%)">
                      <polyline points="22 154,165 154" />
                      <polyline points="22 176,165 176" />
                      <polyline points="22 198,94 198" />
                    </g>
                    <polyline
                      className="Err-PPr_tear"
                      points="0 148,31 138,62 148,93 138,124 148,155 138,187 148"
                      strokeDasharray="198 198"
                      strokeDashoffset={-198}
                    />
                  </g>
                </g>
              </svg>
            </div>
          </div>
          {/* Text */}
          <div className="Err_Tx-col">
            <h1 className="Err_Tx-ttl Err_glitch" data-text={404}>
              404
            </h1>
            <h2 className="Err_Tx-sb-ttl">
              Whoops!{" "}
              <span className="Err_Tx-sb-ttl2">something went wrong</span>
            </h2>
            <p className="Err_Tx-txt">
              The page you're looking for does not exist...
            </p>
            <a href="https://www.ndtv.com" className="Err_Tx-btn">
              Back Home
            </a>
          </div>
        </div>
      </ThreeColumnLayout>
    </>
  );
}
