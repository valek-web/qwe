import { DeadLine } from "./../../../src/utils/types/types";

interface Deadline {
  deadline: string;
  label: DeadLine;
}
export const deadlines: Deadline[] = [
  {
    deadline: "До 3 недель",
    label: DeadLine.FIRST,
  },
  {
    deadline: "От 1 месяца ",
    label: DeadLine.SECOND,
  },
  {
    deadline: "От 3 месяцев",
    label: DeadLine.THIRD,
  },
  {
    deadline: "От 6 месяцев",
    label: DeadLine.FOURTH,
  },
];
