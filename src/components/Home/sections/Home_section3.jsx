"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Title1 from "../Title1";

const Pregnancy_solution = ({ articles, error }) => {
  // Handle error state
  if (error) {
    return <p>Error loading articles: {error}</p>;
  }

  // Handle empty articles
  if (!articles || articles.length === 0) {
    return <p>No articles available.</p>;
  }

  // Access the 15th article (index 14) from the fetched array
  const pregNwsArticles14 = articles[14];

  // Get articles from index 15 to 17 (slice extracts up to, but not including, the end index)
  const pregNwsArticles = articles.slice(15, 18);

  return (
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
                  {pregNwsArticles &&
                    pregNwsArticles.map((article, idx) => (
                      <li className="ls-ns_li" key={article.id || idx}>
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
                                width={226}
                                height={127}
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
  );
};

export default Pregnancy_solution;
