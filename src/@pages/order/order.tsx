import { useState } from "react";
import Nav from "../../@components/common/nav/nav";
import { ORDER_STEP } from "../../core/order/orderStep";

export default function Order() {
  const [step, setStep] = useState(ORDER_STEP.TUTORIAL);

  return (
    <>
      <Nav />
    </>
  );
}
