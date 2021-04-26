import React, { useContext } from "react";
import About from "@components/About";
import Galeria from "@components/Galery";
import Hero from "@components/Hero";
import Comments from "../components/Comments";

import { UserContext } from "../context/UserContext";

const details = [
  {
    id: 0,
    name: "Bernal, Queretaro",
    stars: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
    cover:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx",
  },
  {
    id: 1,
    name: "Bernal1, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
    cover:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx",
  },
  {
    id: 2,
    name: "Bernal2, Queretaro",
    stars: 1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
    cover:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx",
  },
  {
    id: 3,
    name: "Bernal3, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
    cover:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx",
  },
  {
    id: 4,
    name: "Bernal4, Queretaro",
    stars: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, tempora officia eveniet minima, ipsum pariatur enim perspiciatis velit iusto eos, architecto similique a reprehenderit ad debitis dolores. Sapiente nesciunt consequatur ad molestias exercitationem accusantium id quaerat iusto sunt quibusdam, veritatis tempora libero, commodi minus alias rerum. Possimus maxime dolores atque.",
    cover:
      "https://www.eluniversal.com.mx/sites/default/files/2019/07/26/taxco_de_alarcon_pueblo_magico_0.jpg",
    maps:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29850.42358307275!2d-99.95686182162947!3d20.738511663990145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d37edfe530e957%3A0xaa1f4884f962782c!2sBernal%2C%20Qro.!5e0!3m2!1ses-419!2smx!4v1619123627952!5m2!1ses-419!2smx",
  },
];

const DetailPage = (props) => {
  const idTown = props.match.params.id;
  console.log(props.match.params.id);
  /*
    Esto se reemplazará por una llamda a la API
  */
  const { user, setUser } = useContext(UserContext);
  const town = details.find((town) => String(town.id) === idTown);
  console.log(town);
  return (
    <>
      <Hero isSearch={false} cover={town.cover} />
      <p>{new String(user)}</p>
      <About {...town} />
      <Galeria />
      <Comments name={town.name} />
    </>
  );
};

export default DetailPage;
