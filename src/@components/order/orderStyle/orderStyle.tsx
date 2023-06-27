import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import Preview from "./preview/preview";
import RandomStyle from "./randomStyle/randomStyle";
import SelectedOption from "./selectedOption/selectedOption";
import Step1 from "./step1/step1";
import Step2 from "./step2/step2";
import Step3 from "./step3/step3";
import Step4 from "./step4/step4";
import Step5 from "./step5/step5";
import * as S from "./style";

export default function OrderStyle() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);

  useEffect(() => {
    if (
      orderStyleData.mood !== "" &&
      orderStyleData.link !== "" &&
      orderStyleData.driveLink !== "" &&
      orderStyleData.time !== ""
    ) {
      setIsNext(true);
    }
  }, [orderStyleData.mood, orderStyleData.link, orderStyleData.driveLink, orderStyleData.time]);

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
        <Step4 />
        <Step5 />
      </S.RightSection>
    </S.OrderStyleWrapper>
  );
}
