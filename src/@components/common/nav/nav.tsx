import { NavLogoIc } from "../../../assets";
import * as S from "./style";

export default function Nav() {
  return (
    <S.NavBar>
      <NavLogoIc />
      <S.Text>서비스 소개</S.Text>
      <S.Text>주문하기</S.Text>
      <S.Text>튜토리얼</S.Text>
      <S.Text>FAQ</S.Text>
      <S.Text>후기</S.Text>
      <S.ProfileImageWrapper>
        <S.ProfileImage
          src="https://item.kakaocdn.net/do/dbcd799aac800f6a680f1d2b04cee5688f324a0b9c48f77dbce3a43bd11ce785"
          alt="프로필 이미지"
        />
      </S.ProfileImageWrapper>
    </S.NavBar>
  );
}
