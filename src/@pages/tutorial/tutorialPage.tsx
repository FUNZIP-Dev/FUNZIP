import { useNavigate } from "react-router-dom";
import Nav from "../../@components/common/nav/nav";
import { TutorialPageIc } from "../../assets";
import * as S from "./style";

export default function TutorialPage() {
  const navigate = useNavigate();

  const handelMoveToOrder = () => {
    navigate("/order");
  };

  const hanldeMoveToTutorial = () => {
    console.log("hanldeMoveToTutorial");
  };

  return (
    <>
      <Nav />
      <S.OrderPageWrapper>
        <S.Box>
          <TutorialPageIc />
          <S.ButtonWrapper>
            <S.Button $isBlack={true} onClick={hanldeMoveToTutorial}>
              튜토리얼 보기
            </S.Button>
            <S.Button $isBlack={false} onClick={handelMoveToOrder}>
              바로 주문하러가기
            </S.Button>
          </S.ButtonWrapper>
        </S.Box>
      </S.OrderPageWrapper>
    </>
  );
}
