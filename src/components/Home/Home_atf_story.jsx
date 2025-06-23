import React from "react";
import HmCrd_C from "./HmCrd_C";
import Image from "next/image";

const Home_atf_story = ({ articles }) => {
  if (!articles || !articles.results || articles.results.length === 0)
    return null;

  // Main story (first article)
  const mainStory = articles.results[0];
  const mainStory1 = articles.results[1];
  const mainStory2 = articles.results[2];

  return (
    <>
      <div className="vjl2_Lhs">
        <div className="HmCr_row">
          {/* Home Top 3 ATF Stories */}
          <div className="HmCr_col1">
            <div className="crd-b crd-b_h-at res_crd-1">
              <div className="crd_img">
                <div className="img-gr img-gr_a">
                  <Image
                    src={mainStory.thumb_image}
                    alt={mainStory.title}
                    width={594}
                    height={334}
                    sizes="(max-width: 600px) 100vw, 594px"
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
              </div>

              <div className="crd_txt-wrp crd-b_Txbg1">
                <div className="crd_cat">
                  <a className="crd_cat-lk" href="#">
                    {mainStory.category}
                  </a>
                </div>
                <h2 className="crd_D-ttl7">
                  <a className="crd_lnk" href="#">
                    {mainStory.title}
                  </a>
                </h2>
              </div>
            </div>

            <ul className="vjl-row  vjl-row- hf">
              <li className="vjl-md-6">
                <div className="crd-b pb-0">
                  <a href="#" className="crd_img">
                    <div className="img-gr img-gr_a">
                      <Image
                        src={mainStory1.thumb_image}
                        alt={mainStory1.title}
                        width={240}
                        height={180}
                        sizes="(max-width: 600px) 100vw, 240px"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </a>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <a className="crd_cat-lk" href="#">
                        {mainStory1.category}
                      </a>
                    </div>
                    <h3 className="crd_D-ttl">
                      <a className="crd_lnk" href="#">
                        {mainStory1.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>

              <li className="vjl-md-6">
                <div className="crd-b pb-0">
                  <a href="#" className="crd_img">
                    <div className="img-gr img-gr_a">
                      <Image
                        src={mainStory2.thumb_image}
                        alt={mainStory2.title}
                        width={240}
                        height={180}
                        sizes="(max-width: 600px) 100vw, 240px"
                        style={{ width: "100%", height: "auto" }}
                      />
                    </div>
                  </a>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <a className="crd_cat-lk" href="#">
                        {mainStory2.category}
                      </a>
                    </div>
                    <h3 className="crd_D-ttl">
                      <a className="crd_lnk" href="#">
                        {mainStory2.title}
                      </a>
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Home Middle 6 ATF Stories */}
          <HmCrd_C articles={articles} />
        </div>
      </div>
    </>
  );
};

export default Home_atf_story;
