import { OrderStep1Ic, OrderStep2Ic, OrderStep3Ic, OrderStep4Ic, OrderStepBlankIc } from "../../../assets";
import { ORDER_PROGRESS } from "../../../core/order/orderStep";
import { StepProp } from "../../../type/order/stepProps";
import * as S from "./style";

export default function OrderHeader(props: StepProp) {
  const { step } = props;

  const checkStep = (stepName: string) => {
    return step === stepName;
  };

  const checkCircle = (id: number, stepActive: boolean) => {
    if (stepActive) {
      switch (id) {
        case 1:
          return <OrderStep1Ic />;
        case 2:
          return <OrderStep2Ic />;
        case 3:
          return <OrderStep3Ic />;
        case 4:
          return <OrderStep4Ic />;
        default:
          return <OrderStepBlankIc />;
      }
    } else {
      return <OrderStepBlankIc />;
    }
  };

  const checkWidth = (id: number) => {
    switch (id) {
      case 1:
        return 109;
      case 2:
        return 74;
      case 3:
        return 91;
      case 4:
        return 70;
      default:
        return 0;
    }
  };

  return (
    <>
      <S.StepContainer>
        {ORDER_PROGRESS.map(({ id, text, stepName }) => (
          <S.StepWrapper key={id} active={checkStep(stepName)}>
            {checkCircle(id, checkStep(stepName))}
            <S.Text width={checkWidth(id)} active={checkStep(String(stepName))}>
              {text}
            </S.Text>
          </S.StepWrapper>
        ))}
      </S.StepContainer>
      <S.Line />
    </>
  );
}
