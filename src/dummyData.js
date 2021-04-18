const userInfo = {
  username: "Grufty295",
  profilePhoto:
    "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2/ng:webp/ngcb2",
  logged: false,
};

const mostLikedTowns = [
  {
    thumbnail:
      "https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2018/07/Pueblos-magicos-Mitla.jpg",
    name: "Mitla",
    state: "Oaxaca",
    description:
      "Además de la zona arqueológica, la Iglesia de San Pablo te espera en Mitla para maravillarte con sus cúpulas",
  },
  {
    thumbnail:
      "https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2018/07/Pueblos-magicos-Tlatlauquitepec.jpg",
    name: "Tlatlauquitepec ",
    state: "Puebla",
    description:
      "Caminar bajo el sol amable y descubrir joyas históricas en Tlatlauquitepec. ¿No suena fantástico?",
  },
  {
    thumbnail:
      "https://www.kayak.com.mx/news/wp-content/uploads/sites/29/2018/07/Pueblos-magicos-Bacalar.jpg",
    name: "Bacalar",
    state: "Quintana Roo",
    description:
      "Nosotros también nos estamos imaginando en este pueblo mágico y justo en el medio de ese muelle.",
  },
];

const latestReviews = [
  {
    rate: 5,
    townName: "Mitla",
    description: `El pueblo magico de mitla es un poco austero a comparacion de otros pueblos magicos. 
    Muchas tiendas de souvenirs y artesanias.
    Es un pueblo para paseo en familia`,
    user: {
      username: "Grufty295",
      profilePhoto:
        "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2/ng:webp/ngcb2",
    },
  },
  {
    rate: 4,
    townName: "Tlatlauquitepec",
    description: `Pueblo mágico maravilloso, excelente gastronomía y muchas cosas por hacer, sobre todo, montañismo, senderismo y ecoturismo.`,
    user: {
      username: "Grufty295",
      profilePhoto:
        "https://www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?ezimgfmt=rs:254x254/rscb2/ng:webp/ngcb2",
    },
  },
];

export { userInfo, mostLikedTowns, latestReviews };
