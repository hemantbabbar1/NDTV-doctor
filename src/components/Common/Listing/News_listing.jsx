import "../../../Styles/css/elements/news-listing.css";

import Social_share from "@/src/components/Common/Social_share";
import Image from "next/image";
import Link from "next/link";

const News_listing = ({ listingnews, visibleCount, fadeInRange = [0, 0] }) => {
  return (
    <ul className="NwsLstPg_ul">
      {listingnews.slice(0, visibleCount).map((item, idx) => {
        const isFadeIn = idx >= fadeInRange[0] && idx < fadeInRange[1];
        return (
          <li
            className={`NwsLstPg-a-li${isFadeIn ? " fade-in" : ""}`}
            key={item.id}
            style={isFadeIn ? { animationDelay: `${idx * 0.03}s` } : {}}
          >
            <div className="NwsLstPg-a">
              <Link className="NwsLstPg_img" href={item.link}>
                <div className="img-gr img-gr_a">
                  <Image
                    className="NwsLstPg_img-full"
                    alt={item.story_image_caption}
                    width={250}
                    height={140}
                    src={item.story_image}
                    fetchPriority="high"
                  />
                </div>
              </Link>
              <div className="NwsLstPg_txt-cnt">
                <div className="NwsLstPg_txt-wrp">
                  <h2 className="NwsLstPg_ttl">
                    <Link className="NwsLstPg_ttl-lnk" href={item.link}>
                      {item.title}
                    </Link>
                  </h2>
                  <nav className="NwsLstPg_pst">
                    <ul className="NwsLstPg_pst_ul">
                      <li className="NwsLstPg_pst_li">
                        <span className="NwsLstPg_pst_lnk">
                          {new Date(item.pubDate).toLocaleDateString("en-IN", {
                            weekday: "short",
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      </li>
                      <li className="NwsLstPg_pst_li">
                        <span className="NwsLstPg_pst_txt">
                          {item.posted_by}
                        </span>
                      </li>
                    </ul>
                  </nav>
                  <p className="NwsLstPg_txt txt_tct txt_tct-three">
                    {item.description}
                  </p>
                </div>
                {/* Post meta and share section (same as before) */}
                <nav className="NwsLstPg_pst">
                  <Social_share item={item} />
                </nav>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default News_listing;
