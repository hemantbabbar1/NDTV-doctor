"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import "../../styles/css/breadcrumb.css";

const Breadcrumbs = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment);

  const items = [
    { label: "Home", href: "/" }, // Static Home link
    ...pathSegments.map((segment, idx) => {
      const href = `/${pathSegments.slice(0, idx + 1).join("/")}`;
      return {
        label: segment.charAt(0).toUpperCase() + segment.slice(1),
        href,
      };
    }),
  ];

  return (
    <>
      {/* <!--====== breadcrumbs ======--> */}
      <div className="t-brd">
        <div className="vjl-cntr">
          <div className="vjl-row">
            <nav className="hr-scroll brd-nv">
              <div className="hr-scroll__content brd-nv_ol">
                {items.map((item, idx) => {
                  const isLast = idx === items.length - 1;
                  return isLast ? (
                    <span key={idx} className="brd-nv_li current brd-nv_act">
                      <span>{item.label}</span>
                    </span>
                  ) : (
                    <span key={idx} className="brd-nv_li visited">
                      <Link href={item.href}>{item.label}</Link>
                    </span>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumbs;
