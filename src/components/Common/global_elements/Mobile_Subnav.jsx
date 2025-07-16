"use client";

import React from "react";
import Link from "next/link";

export const Mobile_Subnav = ({ menuLinks, error }) => {
  // const [navLinks, setNavLinks] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchNavLinks = async () => {
  //     try {
  //       const res = await axios.get("/data/navLinks.json");
  //       setNavLinks(res.data);
  //     } catch (err) {
  //       setError(err.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchNavLinks();
  // }, []);

  // // if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <>
      <div className="MSub-nav_cn">
        <div className="MSub-nav">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12 m_pr-0" style={{ display: "flex" }}>
                <div className="MSub-nav_wr">
                  <div className="hr-scroll MSub-nav_hr-scr">
                    <ul className="hr-scroll__content MSub-nv_ul">
                      {menuLinks &&
                        Array.isArray(menuLinks) &&
                        menuLinks.map((link) => (
                          <li className="MSub-nv_li" key={link.id}>
                            <Link
                              className="MSub-nav_lnk"
                              alt={link.name}
                              title={link.name}
                              href={link.path}
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobile_Subnav;
