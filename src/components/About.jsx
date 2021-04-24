import React from "react";
import "@styles/components/About.scss";
import Rating from "@material-ui/lab/Rating";

const About = ({ name, stars, description, maps }) => {
  // console.log(name, stars, description);
  return (
    <section className="about">
      <div className="about__info">
        <div className="detail_stars">
          <h1>{name}</h1>{" "}
          <Rating
            className="detail_stars"
            name="read-only"
            value={stars}
            readOnly
          />
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
