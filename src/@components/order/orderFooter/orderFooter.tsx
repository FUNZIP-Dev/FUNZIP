import { OrderNextBtnIc, OrderPreviousBtnIc, OrderSuccessBtnIc } from "../../../assets";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { StepProps } from "../../../type/order/stepProps";
import * as S from "./style";

export default function OrderFooter(props: StepProps) {
  const { step, setStep } = props;

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
    switch (step) {
      case ORDER_STEP.CATEGORY:
        setStep(ORDER_STEP.OPTION);
        break;
      case ORDER_STEP.OPTION:
        setStep(ORDER_STEP.STYLE);
        break;
      case ORDER_STEP.STYLE:
        setStep(ORDER_STEP.BUY);
        break;
      default:
        //성공페이지로 이동
        break;
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
