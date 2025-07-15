"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

const Navigation = () => {
  const [navLinks, setNavLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNavLinks = async () => {
      try {
        const res = await axios.get("/data/navLinks.json");
        setNavLinks(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNavLinks();
  }, []);

  //if (loading) return <div>Loading...</div>;
  if (error) return <div style={{ color: "red" }}>Error: {error}</div>;

  return (
    <nav className="m-nv_lf">
      <ul className="m-nv_ul">
        {navLinks.map((link) => (
          <li className="m-nv_li dd-nav_hvr" key={link.id}>
            <Link
              className="m-nv_lnk"
              alt={link.name}
              title={link.name}
              href={link.path}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
