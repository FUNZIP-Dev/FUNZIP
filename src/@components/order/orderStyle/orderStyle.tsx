import { useRecoilState } from "recoil";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import Preview from "./preview/preview";
import RandomStyle from "./randomStyle/randomStyle";
import SelectedOption from "./selectedOption/selectedOption";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import * as S from "./style";

export default function OrderStyle() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  return (
    <S.OrderStyleWrapper>
      <S.LeftSection>
        <Preview />
        <SelectedOption />
      </S.LeftSection>
      <S.RightSection>
        <Step1 />
        <RandomStyle />
        <Step2 />
        <Step3 />
      </S.RightSection>
    </S.OrderStyleWrapper>
  );
}
