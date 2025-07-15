import React from "react";
import Title1 from "../Title1";
import Photo_Card from "../../Common/gallery/Photo_Card";

const Home_section9 = ({ homePhotos, error }) => {
  // 'loading' state is now handled by the parent Server Component
  if (error) {
    return (
      <section className="section_two">
        <div className="vjl-cntr err">Error: {error}</div>
      </section>
    );
  }

  return (
    <>
      <section className="section_two pb-15">
        <div className="vjl-cntr HpPhtGlr">
          <div className="vjl-row">
            <div className="vjl-md-12">
              <Title1 title="NDTV Doctor Gallery" link="/photo-gallery" />
            </div>
          </div>

          <div className="vjl-row">
            {homePhotos &&
              homePhotos.map((photo) => (
                <div className="vjl-md-3" key={photo.id}>
                  <Photo_Card photo={photo} />
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home_section9;
