import { useEffect } from "react";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { SetStepProp } from "../../../type/order/stepProps";
import Tutorial from "../../common/tutorial/tutorial";
import * as S from "./style";

export default function OrderTutorial(props: SetStepProp) {
  const { setStep } = props;
  // const [isOpen, setIsOpen] = useRecoilState(tutorialModal);

  useEffect(() => {
    if (!localStorage.getItem("tutorialOpen")) {
      setStep(ORDER_STEP.CATEGORY);
    }
  }, []);

  const handelMoveToCategory = () => {
    localStorage.setItem("tutorialOpen", "false");
    setStep(ORDER_STEP.CATEGORY);
  };

  return (
    <S.OrderTutorialWrapper>
      <S.OrderTutorialXIcon onClick={handelMoveToCategory} />
      <Tutorial comment="이 문구 다신 보지않기" onClick={handelMoveToCategory} />
    </S.OrderTutorialWrapper>
  );
}
