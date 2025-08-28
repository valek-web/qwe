import { ProjectTypes } from "./../../../src/utils/types/types";

interface type {
  name: string;
  label: ProjectTypes;
}

export const types: type[] = [
  {
    name: "Разработка мобильных приложений",
    label: ProjectTypes.MOBILE_DEV,
  },
  {
    name: "Разработка веб-приложений",
    label: ProjectTypes.WEB_APP,
  },
  {
    name: "Разработка сайтов",
    label: ProjectTypes.WEB_DEV,
  },
  {
    name: "Веб-дизайн",
    label: ProjectTypes.WEB_DESIGN,
  },
  {
    name: "Другое",
    label: ProjectTypes.OTHER,
  },
];
