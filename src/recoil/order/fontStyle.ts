import { atom } from "recoil";
import { orderStyleDataType } from "../../type/order/orderStyleData";

export const orderStyle = atom<orderStyleDataType>({
  key: "orderStyle",
  default: {
    font: "Pretendard Medium",
    size: 0,
    textColor: "#000000",
    borderColor: "#000000",
    backgroundColor: "#000000",
    shadowColor: "#000000",
    mood: "",
    link: "",
  },
});
