import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProfileDefaultIcon } from "../../../assets";
import { AuthContext } from "../../../context/authContext";
import * as S from "./style";
import { getAuth } from "firebase/auth";
import { collection, doc, getDoc, getFirestore } from "firebase/firestore";

export default function Nav() {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [isStaff, setIsStaff] = useState(false);
  

  const handleMoveToPage = (route: string) => {
    navigate(route);
  };


  useEffect(() => {
    // Fetch user information from Firestore based on the uid
    if (userInfo) {
      const db = getFirestore();
      const auth = getAuth();
      const userRef = doc(collection(db, 'users'), userInfo.uid);
      getDoc(userRef)
        .then((doc) => {
          if (doc.exists()) {
            const userData = doc.data();
            if (userData.staff != 0) {
              setIsStaff(true);
            }
          }
        })
    }
  }, [userInfo]);

  return (
    <S.NavBar>
      <S.NavLogoIcon onClick={() => handleMoveToPage("/")} />
      <S.Text onClick={() => handleMoveToPage("/")}>서비스 소개</S.Text>
      <S.Text onClick={() => handleMoveToPage("/order")}>주문하기</S.Text>
      <S.Text onClick={() => handleMoveToPage("/tutorial")}>튜토리얼</S.Text>
      <S.Text onClick={() => handleMoveToPage("/faq")}>FAQ</S.Text>
      <S.Text onClick={() => handleMoveToPage("/review")}>후기</S.Text>
      {isStaff ? (
        <S.Text onClick={() => handleMoveToPage('/staff')}>관리자</S.Text>
      ) : (
        <>
          {userInfo ? (
            <S.ProfileImageWrapper onClick={() => handleMoveToPage('/mypage')}>
              <ProfileDefaultIcon />
            </S.ProfileImageWrapper>
          ) : (
            <S.Text onClick={() => handleMoveToPage('/login')}>로그인</S.Text>
          )}
        </>
      )}

    </S.NavBar>
  );
}
