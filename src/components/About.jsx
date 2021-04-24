import React from "react";
import "@styles/components/About.scss";

const About = ({ name, stars, description, maps }) => {
  console.log(name, stars, description);
  const starsArr = [...Array(stars).keys()];
  return (
    <section className="about">
      <div className="about__info">
        <h2 className="about__name">{name}</h2>
        <div className="about__stars">
          {starsArr.map((_, index) => (
            <label className="about__star" key={index}>
              {" "}
              ⭐{" "}
            </label>
          ))}
        </div>
        <div className="about__description">
          <h3 className="about__title">Acerca de</h3>
          <p>{description}</p>
        </div>
      </div>
      <div
        className="about__map"
        dangerouslySetInnerHTML={{
          __html: `<iframe
              src=${maps}
              width="100%"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
            ></iframe>`,
        }}
      />
    </section>
  );
};

export default About;
