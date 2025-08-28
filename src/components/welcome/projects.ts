interface Project {
  name: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  {
    name: "KingPay",
    description: "Платёжная система. Интернет-эквайринг",
    image: "/images/kingpay.jpg",
  },
  {
    name: "EcoBit",
    description: "P2P маркет",
    image: "/images/ecobit.jpg",
  },
  {
    name: "Troika group",
    description: "Инвестиционная платформа",
    image: "/images/troika.jpg",
  },
  {
    name: "sudexpertiza.by",
    description: "Сайт центра судебных экспертиз республики Беларусь",
    image: "/images/sud.jpg",
  },
  // {
  //   name: "Bal-kekina",
  //   description: "Лендинг для мероприятия",
  //   image: "",
  // },
  // {
  //   name: "PicLoad",
  //   description: "Мини-приложение для загрузки картинок",
  //   image: "",
  // },
  // {
  //   name: "sudexpertiza.by",
  //   description:
  //     "Сайт для научно-практического центра суденбых экспертиз республики Беларусь.",
  //   image: "",
  // },
  // {
  //   name: "Ston Tactics",
  //   description: "Сайт для построения стратегий в мобильной игре.",
  //   image: "",
  // },
];
