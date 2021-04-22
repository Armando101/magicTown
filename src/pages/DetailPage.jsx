import React from "react";
import About from "../components/About";
import Hero from "../components/Hero";

const details = [
  {
    id: 0,
    name: "Bernal, Queretaro",
    stars: 5,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?",
  },
  {
    id: 1,
    name: "Bernal1, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?",
  },
  {
    id: 2,
    name: "Bernal2, Queretaro",
    stars: 1,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?",
  },
  {
    id: 3,
    name: "Bernal3, Queretaro",
    stars: 3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?",
  },
  {
    id: 4,
    name: "Bernal4, Queretaro",
    stars: 4,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas vero asperiores labore laborum culpa velit accusantium eius ipsam quam expedita sed ea, illo quibusdam nam dolorum ipsa id. Veniam, voluptates?",
  },
];

const DetailPage = (props) => {
  const idTown = props.match.params.id;
  console.log(props.match.params.id);
  /*
    Esto se reemplazará por una llamda a la API
  */

  const town = details.find((town) => String(town.id) === idTown);
  console.log(town);
  return (
    <>
      <Hero isSearch={false} />
      <About {...town} />
    </>
  );
};

export default DetailPage;
