import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { SelectOptionTypes } from "../../@components/order/orderOption/orderOption";

const { persistAtom } = recoilPersist();

export const selectOptions = atom<SelectOptionTypes>({
  key: "selectOptions",
  default: {
    basic: [],
    plus: [],
    cam: "",
  },
  effects_UNSTABLE: [persistAtom],
});
