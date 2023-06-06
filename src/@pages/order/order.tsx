import { useState } from "react";
import Nav from "../../@components/common/nav/nav";
import OrderFooter from "../../@components/order/orderFooter/orderFooter";
import OrderHeader from "../../@components/order/orderHeader/orderHeader";
import OrderMain from "../../@components/order/orderMain/orderMain";
import { ORDER_STEP } from "../../core/order/orderStep";

export default function Order() {
  const [step, setStep] = useState(ORDER_STEP.TUTORIAL);

  return (
    <>
      <Nav />
      <OrderHeader step={step} />
      <OrderMain step={step} />
      <OrderFooter step={step} setStep={setStep} />
    </>
  );
}
