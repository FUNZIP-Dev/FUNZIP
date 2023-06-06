import { useNavigate } from "react-router-dom";
import { NavLogoIc } from "../../../assets";
import * as S from "./style";

export default function Nav() {
  const navigate = useNavigate();

  const handleMoveToPage = (route: string) => {
    navigate(route);
  };

  return (
    <S.NavBar>
      <NavLogoIc />
      <S.Text onClick={() => handleMoveToPage("/")}>서비스 소개</S.Text>
      <S.Text onClick={() => handleMoveToPage("/order")}>주문하기</S.Text>
      <S.Text onClick={() => handleMoveToPage("/tutorial")}>튜토리얼</S.Text>
      <S.Text onClick={() => handleMoveToPage("/faq")}>FAQ</S.Text>
      <S.Text onClick={() => handleMoveToPage("/review")}>후기</S.Text>
      <S.ProfileImageWrapper>
        <S.ProfileImage
          src="https://item.kakaocdn.net/do/dbcd799aac800f6a680f1d2b04cee5688f324a0b9c48f77dbce3a43bd11ce785"
          alt="프로필 이미지"
        />
      </S.ProfileImageWrapper>
    </S.NavBar>
  );
}
