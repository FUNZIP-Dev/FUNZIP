import { useRecoilState } from "recoil";
import Nav from "../../@components/common/nav/nav";
import { stepRender } from "../../recoil/order/stepRender";

export default function Order() {
  const [step, setStep] = useRecoilState(stepRender);

  return (
    <>
      <Nav />
    </>
  );
}
