import { TutorialMainIc } from "../../../assets";
import * as S from "./style";

interface TutorialProp {
  comment: string;
  onClick: () => void;
}

export default function Tutorial(props: TutorialProp) {
  const { comment, onClick } = props;

  const hanldeMoveToTutorial = () => {
    console.log("튜토리얼 보러가기");
  };

  return (
    <>
      <TutorialMainIc />
      <S.Title>잠시만요!</S.Title>
      <S.Sub>
        주문하기 전에 <S.Strong>“튜토리얼”</S.Strong> 확인 하셨나요?
      </S.Sub>
      <S.Content>주문하는 도중 확인하러가는 귀찮은 불상사가 발생할 수 있으니</S.Content>
      <S.Content>펀집이 처음이시라면 지금 당장 보러가기!</S.Content>
      <S.ButtonWrapper>
        <S.Button $isBlack={true} onClick={hanldeMoveToTutorial}>
          튜토리얼 보러가기
        </S.Button>
        <S.Button $isBlack={false} onClick={onClick}>
          {comment}
        </S.Button>
      </S.ButtonWrapper>
    </>
  );
}
