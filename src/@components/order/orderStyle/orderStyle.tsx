import { useRecoilState } from "recoil";
import background from "../../../assets/image/orderStylePreviewImg.png";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import SelectedOption from "./selectedOption/selectedOption";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";

export default function OrderStyle() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  return (
    <>
      <img src={background} alt="미리보기-배경화면" />
      <SelectedOption />
      <Step1 />
      <Step2 />
      <Step3 />
    </>
  );
}
