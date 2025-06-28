"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title1 from "../Title1";

// Context API for Articles
import { useArticles } from "@/src/context/ArticlesContext";

const Pregnancy_solution = () => {
  const { articles } = useArticles();
  // Fix: articles.results -> articles
  const pregNwsArticles14 = articles[14];

  // Get 15th, 16th, 17th articles (index 14, 15, 16)
  const pregNwsArticles = articles.slice(15, 18);

  return (
    <>
      <section className="section_two">
        <div className="Bg-cl1">
          <div className="vjl-cntr">
            <div className="vjl-row">
              <div className="vjl-md-12">
                <Title1
                  title="Pregnancy &amp; Solutions"
                  link="/pregnancy-solution"
                />
              </div>
            </div>
            <div className="vjl-row">
              <div className="vjl-md-6">
                <div className="crd-b pb-0">
                  <div className="crd_img">
                    <div className="img-gr img-gr_a">
                      {pregNwsArticles14 && (
                        <Link
                          href={pregNwsArticles14.link}
                          title={pregNwsArticles14.title}
                        >
                          <Image
                            src={pregNwsArticles14.thumb_image}
                            alt={pregNwsArticles14.title}
                            width={594}
                            height={334}
                            sizes="(max-width: 600px) 100vw, 594px"
                          />
                        </Link>
                      )}
                    </div>
                  </div>

                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <div className="crd_cat-lk">
                        {pregNwsArticles14 ? pregNwsArticles14.category : null}
                      </div>
                    </div>
                    {/* Defensive: Only use link if pregNwsArticles14 exists */}
                    <h3 className="crd_D-ttl4">
                      {pregNwsArticles14 ? (
                        <Link
                          className="crd_lnk"
                          href={pregNwsArticles14.link}
                          title={pregNwsArticles14.title}
                        >
                          {pregNwsArticles14.title}
                        </Link>
                      ) : null}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="vjl-md-6">
                <div className="ls-ns">
                  <ul className="ls-ns_ul ls-ns_br">
                    {pregNwsArticles.map((article, idx) => (
                      <li className="ls-ns_li" key={article.id || idx}>
                        {/* Assuming articles has a thumb_image and title */}
                        <div className="crd-c_v1">
                          <div className="crd_img">
                            <Link
                              className="img-gr img-gr_a"
                              href={article.link}
                              title={article.title}
                            >
                              <Image
                                src={article.thumb_image}
                                alt={article.title}
                                width={594}
                                height={334}
                                sizes="(max-width: 600px) 100vw, 594px"
                                style={{ width: "100%", height: "auto" }}
                              />
                            </Link>
                          </div>

                          <div className="crd_txt-wrp">
                            <div className="crd_cat">
                              <div className="crd_cat-lk">
                                {article.category}
                              </div>
                            </div>
                            <h3 className="crd_D-ttl3">
                              <Link className="crd_lnk" href={article.link}>
                                {article.title}
                              </Link>
                            </h3>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pregnancy_solution;
