import { useState } from "react";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import SelectedOption from "./selectedOption/selectedOption";
import Step2 from "./step2/step2";

export default function OrderStyle() {
  const [orderStyleData, setOrderStyleData] = useState<orderStyleDataType>({
    font: "",
    size: 0,
    textColor: "",
    borderColor: "",
    backgroundColor: "",
    shadowColor: "",
    mood: "",
    link: "",
  });

  return (
    <>
      <SelectedOption />
      <Step2 setOrderStyleData={setOrderStyleData} />
    </>
  );
}
