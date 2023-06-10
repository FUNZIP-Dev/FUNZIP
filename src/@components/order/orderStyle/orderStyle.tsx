import { useState } from "react";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import SelectedOption from "./selectedOption/selectedOption";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";

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
      <Step1 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
      <Step2 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
      <Step3 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
    </>
  );
}
