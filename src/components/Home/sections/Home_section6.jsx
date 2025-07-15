
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Title1 from '../Title1';

// This component now receives 'articles' and 'error' as props
const Home_section6 = ({ articles, error }) => {

  // 'loading' state is now handled by the parent Server Component
  if (articles?.length === 0 && !error) {
    // This handles the initial server render case where articles is an empty array
    return null;
  }

  if (error) {
    return (
    <>
     <section className="section_two">
        <div className="vjl-cntr"> 
          <div className="vjl-row">
    <div className='vjl-md-12 err'>Error: {error}</div>
    </div></div></section>
    </>
    );
  };

  return (
    <>
      <section className="section_two">
        <div className="vjl-cntr"> 
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="Fitness & Exercise" link="/fitness-exercise" />
            </div>
          </div>

          <div className="vjl-row">
            {articles?.map((article) => (
              <div className="vjl-md-4" key={article.id}>
                <div className="crd-b">
                  <div className="crd_img">
                    <div className="img-gr img-gr_a">
                      <Link href={article.link}>
                        <Image
                          alt={article.title}
                          title={article.title}
                          src={article.thumb_image}
                          width={594}
                          height={334}
                          border="0"
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="crd_txt-wrp">
                    <div className="crd_cat">
                      <a className="crd_cat-lk" href={article.link}>Health Care</a>
                    </div>
                    <h3 className="crd_D-ttl2">
                      <div className="crd_lnk">
                        <a href={article.link}>{article.title}</a>
                      </div>
                    </h3>
                    <div className="crd_bt">
                      <div className="crd_bt-ttl">By NDTV Health Desk</div>
                      <div className="crd_dt">{article.pubDate.split(" ").slice(0, 4).join(" ")}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section6;