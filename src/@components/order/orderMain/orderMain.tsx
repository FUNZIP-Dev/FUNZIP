import { StepProp } from "../../../type/order/stepProps";
import Tutorial from "../../common/tutorial/tutorial";

export default function OrderMain(props: StepProp) {
  const { step } = props;

  return (
    <>
      <Tutorial />
    </>
  );
}
