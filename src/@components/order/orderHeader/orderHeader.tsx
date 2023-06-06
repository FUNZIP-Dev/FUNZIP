import { ORDER_PROGRESS } from "../../../core/order/orderStep";
import { StepProp } from "../../../type/order/stepProps";

export default function OrderHeader(props: StepProp) {
  const { step } = props;

  return (
    <>
      {ORDER_PROGRESS.map(({ id, text }) => (
        <StepWrapper key={id}>
          <Rectangle />
          <Text>{text}</Text>
        </StepWrapper>
      ))}
      <hr />
    </>
  );
}
