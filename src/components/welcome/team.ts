interface Team {
  name: string;
  description: string;
  image: string;
}

export const team: Team[] = [
  {
    name: "Николаев Андрей",
    description: "Генеральный директор",
    image: "/images/ceo.jpg",
  },
  {
    name: "Кристиан Ханухов",
    description: "Арт директор",
    image: "/images/cdo.jpg",
  },
  {
    name: "Александр Табольский",
    description: "Технический директор",
    image: "/images/cto.jpg",
  },
];
