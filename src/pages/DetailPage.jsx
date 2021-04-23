import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";

const details = [
  {
    id: 0,
    name: "Bernal, Queretaro",
    stars: 5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
  },
  {
    id: 1,
    name: "Bernal1, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
  },
  {
    id: 2,
    name: "Bernal2, Queretaro",
    stars: 1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
  },
  {
    id: 3,
    name: "Bernal3, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
  },
  {
    id: 4,
    name: "Bernal4, Queretaro",
    stars: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
  },
];

const DetailPage = (props) => {
  const idTown = props.match.params.id;
  console.log(props.match.params.id);
  /*
    Esto se reemplazará por una llamda a la API
  */
  const cover =
    "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg";
  const town = details.find((town) => String(town.id) === idTown);
  console.log(town);
  return (
    <>
      <Hero isSearch={false} cover={cover} />
      <About {...town} />
    </>
  );
};

export default DetailPage;
