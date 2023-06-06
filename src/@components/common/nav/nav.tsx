import { NavLogoIc } from "../../../assets";
import * as S from "./style";

export default function Nav() {
  return (
    <S.NavBar>
      <NavLogoIc />
      <p>서비스 소개</p>
      <p>주문하기</p>
      <p>튜토리얼</p>
      <p>FAQ</p>
      <p>후기</p>
      <div>
        <img
          src="https://item.kakaocdn.net/do/dbcd799aac800f6a680f1d2b04cee5688f324a0b9c48f77dbce3a43bd11ce785"
          alt="프로필 이미지"
        />
      </div>
    </S.NavBar>
  );
}
