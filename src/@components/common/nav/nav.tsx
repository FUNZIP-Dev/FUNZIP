import { useNavigate } from "react-router-dom";
import { USER } from "../../../core/user/user";
import * as S from "./style";

export default function Nav() {
  const navigate = useNavigate();

  const handleMoveToPage = (route: string) => {
    navigate(route);
  };

  return (
    <S.NavBar>
      <S.NavLogoIcon onClick={() => handleMoveToPage("/")} />
      <S.Text onClick={() => handleMoveToPage("/")}>서비스 소개</S.Text>
      <S.Text onClick={() => handleMoveToPage("/order")}>주문하기</S.Text>
      <S.Text onClick={() => handleMoveToPage("/tutorial")}>튜토리얼</S.Text>
      <S.Text onClick={() => handleMoveToPage("/faq")}>FAQ</S.Text>
      <S.Text onClick={() => handleMoveToPage("/review")}>후기</S.Text>
      <S.ProfileImageWrapper onClick={() => handleMoveToPage("/mypage")}>
        <S.ProfileImage src={USER.image} alt="프로필 이미지" />
      </S.ProfileImageWrapper>
    </S.NavBar>
  );
}
