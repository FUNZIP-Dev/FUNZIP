import { useState } from "react";
import { styled } from "styled-components";
import Nav from "../../@components/common/nav/nav";
import OrderFooter from "../../@components/order/orderFooter/orderFooter";
import OrderHeader from "../../@components/order/orderHeader/orderHeader";
import OrderMain from "../../@components/order/orderMain/orderMain";

export default function Order() {
  const [step, setStep] = useState<string>("");

  return (
    <OrderPageWrapper>
      <Nav />
      <OrderHeader step={step} />
      <OrderMain step={step} setStep={setStep} />
      <OrderFooter step={step} setStep={setStep} />
    </OrderPageWrapper>
  );
}

const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
