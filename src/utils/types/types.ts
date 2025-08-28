export enum ProjectTypes {
  WEB_DESIGN = 0,
  WEB_DEV = 1,
  MOBILE_DEV = 2,
  WEB_APP = 3,
  OTHER = 4,
}
export enum DeadLine {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
}
export enum Pricing {
  FIRST = 1,
  SECOND = 2,
  THIRD = 3,
  FOURTH = 4,
  FIFTH = 5,
}

export interface FormTypes {
  email: string;
  name: string;
  project_type: ProjectTypes;
  description: string;
  // file: File;
  deadline: DeadLine;
  price: Pricing;
}
