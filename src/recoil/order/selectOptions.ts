import { atom } from "recoil";
import { SelectOptionTypes } from "../../@components/order/orderOption/orderOption";

export const selectOptions = atom<SelectOptionTypes>({
  key: "selectOptions",
  default: {
    basic: [],
    plus: [],
    cam: -1,
  },
});
