import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { DocumentData, collection, doc, getDoc, getFirestore } from 'firebase/firestore';
import MainLogo from "../../@components/myPage/mainLogo";
import Loading from "../../@components/common/loading";
import { MypageLogo } from "../../assets";

export default function MyPage() {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State variable for loading status
  const [userProfile, setUserProfile] = useState<DocumentData | null>(null); // State variable for user profile


  // Logout function
  const handleLogout = () => {
    signOut(authService)
      .then(() => {
        alert('로그아웃 성공');
      })
      .catch(error => {
        console.log(error);
      });
  };

  

/* 유저 정보 가져오기  */
  useEffect(() => {
    if (userInfo) {
      // Fetch user profile data from Firestore
      const fetchUserProfile = async () => {
        try {
          const db = getFirestore();
          const userRef = doc(collection(db, 'users'), userInfo.uid);
          const userSnapshot = await getDoc(userRef);
          if (userSnapshot.exists()) {
            const userData = userSnapshot.data();
            setUserProfile(userData);
          }
          setLoading(false); // Set loading to false once user profile is available
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserProfile();
    }else {
      setLoading(false); // Set loading to false if userInfo is null
    }
  }, [userInfo]);

  if (loading) {
    return <div>404NOTFOUND...</div>;
  }

  return (
    <>
      <Nav />
      {userInfo && userProfile ? (
        <S.MypageWrapper>
          <MainLogo />
          <S.MypageProfileWrapper>
            <S.MypageProfileName><strong style={{fontWeight:"700", fontSize:"28px"}}>{userProfile.displayName}</strong>&nbsp;님, 안녕하세요.</S.MypageProfileName>
            <S.MypageLogoutText onClick={handleLogout}>로그아웃</S.MypageLogoutText>
          </S.MypageProfileWrapper>
          <S.MypageProcessingWrapper>

              {/* 편집 진행 중인 내역으로 서버에서 불러와서 체크해야함 */}
            <S.MypageProcessingBar></S.MypageProcessingBar>
            <S.MypageProcessing>
              <S.MypageProcessingTitle>편집 진행 중인 내역이 없습니다 :(</S.MypageProcessingTitle>
              <S.goOrderBtn>주문하러 가기</S.goOrderBtn>
            </S.MypageProcessing>

          </S.MypageProcessingWrapper>
        </S.MypageWrapper>
      ) : (
        <>
          <Loading />
          {/* <div>로그인이 필요합니다.</div> */}
        </>
      )}
    </>
  );
}
