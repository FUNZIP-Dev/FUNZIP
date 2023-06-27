import { useEffect, useState } from "react";
import { ORDER_STEP } from "../../../core/order/orderStep";
import { SetStepProp } from "../../../type/order/stepProps";
import Tutorial from "../../common/tutorial/tutorial";
import * as S from "./style";

export default function OrderTutorial(props: SetStepProp) {
  const { setStep } = props;
  const [isOpen, setIsOpen] = useState(localStorage.getItem("tutorialOpen"));

  useEffect(() => {
    if (localStorage.getItem("tutorialOpen") === "false") {
      setStep(ORDER_STEP.CATEGORY);
    } else if (localStorage.getItem("tutorialOpen") === "true") {
      setStep(ORDER_STEP.TUTORIAL);
    }
  }, []);

  const handelMoveToCategory = (isOpen: string) => {
    localStorage.setItem("tutorialOpen", isOpen);
    setStep(ORDER_STEP.CATEGORY);
  };

  return (
    <S.OrderTutorialWrapper>
      <S.OrderTutorialXIcon onClick={() => handelMoveToCategory("true")} />
      <Tutorial comment="이 문구 다신 보지않기" onClick={() => handelMoveToCategory("false")} />
    </S.OrderTutorialWrapper>
  );
}
