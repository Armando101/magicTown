import React from "react";
import "@styles/components/About.scss";
import Rating from '@material-ui/lab/Rating';



const About = ({ name, stars, description }) => {
  // console.log(name, stars, description);
  return (
    <section className="about">
      <div className="about__info">
        <div className="detail_stars">
            <h1>{name}</h1> <Rating name="read-only" value={stars} readOnly />
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx"
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
