import { Pricing } from "./../../../src/utils/types/types";

interface Price {
  price: string;
  label: Pricing;
}

export const pricing: Price[] = [
  { price: "100-300тыс.р", label: Pricing.FIRST },
  { price: "300-800тыс.р", label: Pricing.SECOND },
  { price: "800тыс.-2 млн.р", label: Pricing.THIRD },
  { price: "2-5 млн.р", label: Pricing.FOURTH },
  { price: ">5 млн.р", label: Pricing.FIFTH },
];
