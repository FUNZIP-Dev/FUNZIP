import { TutorialMainIc } from "../../../assets";
import * as S from "./style";

export default function Tutorial() {
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
        <S.Button isBlack={true}>튜토리얼 보러가기</S.Button>
        <S.Button isBlack={false}>이 문구 다신 보지않기</S.Button>
      </S.ButtonWrapper>
    </>
  );
}
