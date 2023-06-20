import { useState } from "react";
import background from "../../../assets/image/orderStylePreviewImg.png";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import SelectedOption from "./selectedOption/selectedOption";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";

export default function OrderStyle() {
  const [orderStyleData, setOrderStyleData] = useState<orderStyleDataType>({
    font: "",
    size: 0,
    textColor: "#000000",
    borderColor: "#000000",
    backgroundColor: "#000000",
    shadowColor: "#000000",
    mood: "",
    link: "",
  });

  return (
    <>
      <img src={background} alt="미리보기-배경화면" />
      <SelectedOption />
      <Step1 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
      <Step2 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
      <Step3 orderStyleData={orderStyleData} setOrderStyleData={setOrderStyleData} />
    </>
  );
}
