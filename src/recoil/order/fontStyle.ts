import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
import { orderStyleDataType } from "../../type/order/orderStyleData";

const { persistAtom } = recoilPersist();

export const orderStyle = atom<orderStyleDataType>({
  key: "orderStyle",
  default: {
    font: "Pretendard Medium",
    size: 10,
    textColor: "#000000",
    borderColor: "transparent",
    backgroundColor: "transparent",
    shadowColor: "transparent",
    mood: "",
    link: "",
    driveLink: "",
    time: "",
  },
  effects_UNSTABLE: [persistAtom],
});
