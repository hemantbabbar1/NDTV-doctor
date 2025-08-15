import React from "react";
import Image from "next/image";
import Link from "next/link";

const Home_atf_story_wap = ({ articles, error }) => {
  if (!articles || articles.length === 0) return null;

  // Main story (first article)
  const mainStory = articles[0];
  const mainStory1 = articles[1];
  const mainStory2 = articles[2];

  return (
    <>
      <div className="vjl-md-12">
        <div className="crd-a mb-5">
          {/* image */}
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
                  fetchPriority="high"
                  className="lz_img crd_img-full"
                  //sizes="(max-width: 600px) 100vw, 594px"
                  //style={{ width: "100%", height: "auto" }}
                />
              )}
            </Link>
          </div>

          {/* Text */}
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
      </div>
      <div className="vjl-md-12">
        <div className="ls-ns ls-ns-2">
          <ul className="ls-ns_ul ls-ns_br">
            <li className="ls-ns_li">
              <div className="crd-a">
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
                        fetchPriority="high"
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
            <li className="ls-ns_li">
              <div className="crd-a">
                <div className="crd_img">
                  <Link
                    className="img-gr img-gr_a"
                    href={mainStory2.link}
                    title={mainStory2.title}
                  >
                    {mainStory1 && (
                      <Image
                        src={mainStory2.thumb_image}
                        alt={mainStory2.title}
                        width={240}
                        height={180}
                        fetchPriority="high"
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
      </div>
    </>
  );
};

export default Home_atf_story_wap;
