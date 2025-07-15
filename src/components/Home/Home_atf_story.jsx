import React from "react";
import HmCrd_C from "./HmCrd_C";
import Image from "next/image";
// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";
import Link from "next/link";

const Home_atf_story = () => {
  const { articles } = useArticles();

  if (!articles || articles.length === 0) return null;

  // Main story (first article)
  const mainStory = articles[0];
  const mainStory1 = articles[1];
  const mainStory2 = articles[2];

  return (
    <>
      <div className="vjl2_Lhs">
        <div className="HmCr_row">
          {/* Home Top 3 ATF Stories */}
          <div className="HmCr_col1">
            <div className="crd-b crd-b_h-at res_crd-1">
              <div className="crd_img">
                <Link
                  className="img-gr img-gr_a"
                  href={mainStory.link}
                  title={mainStory.title}
                >
                  {mainStory && (
                    <Image
                      src={mainStory.thumb_image}
                      alt={mainStory.title}
                      width={594}
                      height={334}
                      //sizes="(max-width: 600px) 100vw, 594px"
                      //style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </Link>
              </div>

              <div className="crd_txt-wrp crd-b_Txbg1">
                <div className="crd_cat">
                  <Link
                    className="crd_cat-lk"
                    href={mainStory.link}
                    title={mainStory.title}
                  >
                    {mainStory ? mainStory.category : null}
                  </Link>
                </div>
                <h2 className="crd_D-ttl7">
                  <Link
                    className="crd_lnk"
                    href={mainStory.link}
                    title={mainStory.title}
                  >
                    {mainStory ? mainStory.title : null}
                  </Link>
                </h2>
              </div>
            </div>

            <ul className="vjl-row  vjl-row- hf">
              <li className="vjl-md-6">
                <div className="crd-b pb-0">
                  <div className="crd_img">
                    <Link
                      className="img-gr img-gr_a"
                      href={mainStory1.link}
                      title={mainStory1.title}
                    >
                      {mainStory1 && (
                        <Image
                          src={mainStory1.thumb_image}
                          alt={mainStory1.title}
                          width={240}
                          height={180}
                          //sizes="(max-width: 600px) 100vw, 240px"
                          //style={{ width: "100%", height: "auto" }}
                        />
                      )}
                    </Link>
                  </div>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <Link
                        className="crd_cat-lk"
                        href={mainStory1.link}
                        title={mainStory1.title}
                      >
                        {mainStory1 ? mainStory1.category : null}
                      </Link>
                    </div>
                    <h3 className="crd_D-ttl">
                      <Link
                        className="crd_lnk"
                        href={mainStory1.link}
                        title={mainStory1.title}
                      >
                        {mainStory1 ? mainStory1.title : null}
                      </Link>
                    </h3>
                  </div>
                </div>
              </li>

              <li className="vjl-md-6">
                <div className="crd-b pb-0">
                  <Link
                    className="crd_img"
                    href={mainStory2.link}
                    title={mainStory2.title}
                  >
                    <div className="img-gr img-gr_a">
                      {mainStory2 && (
                        <Image
                          src={mainStory2.thumb_image}
                          alt={mainStory2.title}
                          width={240}
                          height={180}
                          //sizes="(max-width: 600px) 100vw, 240px"
                          //style={{ width: "100%", height: "auto" }}
                        />
                      )}
                    </div>
                  </Link>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <Link
                        className="crd_cat-lk"
                        href={mainStory2.link}
                        title={mainStory2.title}
                      >
                        {mainStory2 ? mainStory2.category : null}
                      </Link>
                    </div>
                    <h3 className="crd_D-ttl">
                      <Link
                        className="crd_lnk"
                        href={mainStory2.link}
                        title={mainStory2.title}
                      >
                        {mainStory2 ? mainStory2.title : null}
                      </Link>
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
