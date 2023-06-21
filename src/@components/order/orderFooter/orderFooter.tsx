import { useRecoilState } from "recoil";
import { OrderNextBtnIc, OrderPreviousBtnIc, OrderSuccessBtnIc } from "../../../assets";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import { StepProps } from "../../../type/order/stepProps";
import * as S from "./style";

export default function OrderFooter(props: StepProps) {
  const { step, setStep } = props;
  const [isNext, setIsNext] = useRecoilState(moveNextPage);
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  const checkStep = () => {
    return step !== "";
  };

  const checkFinalStep = () => {
    return step === ORDER_STEP.BUY;
  };

  const handelMoveToPrev = () => {
    switch (step) {
      case ORDER_STEP.OPTION:
        setStep(ORDER_STEP.CATEGORY);
        break;
      case ORDER_STEP.STYLE:
        setStep(ORDER_STEP.OPTION);
        break;
      case ORDER_STEP.BUY:
        setStep(ORDER_STEP.STYLE);
        break;
      default:
        setStep("");
        break;
    }
  };

  const handelMoveToNext = () => {
    if (isNext) {
      switch (step) {
        case ORDER_STEP.CATEGORY:
          setStep(ORDER_STEP.OPTION);
          break;
        case ORDER_STEP.OPTION:
          setStep(ORDER_STEP.STYLE);
          break;
        case ORDER_STEP.STYLE:
          if (orderStyleData.link !== "") {
            setStep(ORDER_STEP.BUY);
          }
          break;
        default:
          //성공페이지로 이동
          break;
      }
      setIsNext(false);
    }
  };

  return (
    <>
      {checkStep() && (
        <S.ButtonWrapper>
          <S.PreviousButton onClick={handelMoveToPrev}>
            <OrderPreviousBtnIc />
          </S.PreviousButton>
          <S.NextButton onClick={handelMoveToNext}>
            {!checkFinalStep() ? <OrderNextBtnIc /> : <OrderSuccessBtnIc />}
          </S.NextButton>
        </S.ButtonWrapper>
      )}
    </>
  );
}
