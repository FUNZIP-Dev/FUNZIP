import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileDefaultIcon } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import * as S from "./style";

export default function Nav() {
  const userInfo = useContext(AuthContext);
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
      {
        userInfo ? (<>
      <S.ProfileImageWrapper onClick={() => handleMoveToPage("/mypage")}>
      <ProfileDefaultIcon/>
        {/* <S.ProfileImage
          src="https://item.kakaocdn.net/do/dbcd799aac800f6a680f1d2b04cee5688f324a0b9c48f77dbce3a43bd11ce785"
          alt="프로필 이미지"
        /> */}
      </S.ProfileImageWrapper>
        </>):
        (
          <>
          <S.Text onClick={() => handleMoveToPage("/login")}>로그인</S.Text>
          </>
        )

      }

    </S.NavBar>
  );
}
