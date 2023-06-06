import { ORDER_STEP } from "../../../core/order/orderStep";
import { StepProps } from "../../../type/order/stepProps";
import OrderBuy from "../orderBuy/orderBuy";
import OrderCategory from "../orderCategory/orderCategory";
import OrderOption from "../orderOption/orderOption";
import OrderStyle from "../orderStyle/orderStyle";
import OrderTutorial from "../orderTutorial/orderTutorial";

export default function OrderMain(props: StepProps) {
  const { step, setStep } = props;

  switch (step) {
    case ORDER_STEP.CATEGORY:
      return <OrderCategory />;
    case ORDER_STEP.OPTION:
      return <OrderOption />;
    case ORDER_STEP.STYLE:
      return <OrderStyle />;
    case ORDER_STEP.BUY:
      return <OrderBuy />;
    default:
      return <OrderTutorial setStep={setStep} />;
  }
}
