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
import DetailProfileBox from "../../@components/myPage/detailProfileBox";


export default function MyPage() {
  const userInfo = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); // State variable for loading status
  const [userProfile, setUserProfile] = useState<DocumentData | null>(null); // State variable for user profile
  const [isDoing, setIsDoing] = useState(false); // State variable for loading status
  const [order, setOrder] = useState(
    [
    {
      category: "브이로그",
      date: "2021/10/10  23:00",
      price: "60,000 원",
      status:0
    },
    {
      category: "코딩",
      date: "2021/10/10  23:00",
      price: "100,000 원",
      status:1
    },
    {
      category: "으각",
      date: "2021/10/10  23:00",
      price: "90,000 원",
      status:2
    }

  ]
  )

  // Logout function
  const handleLogout = () => {
    signOut(authService)
      .then(() => {
        navigate("/login");
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

          // DB 가져오기
          const db = getFirestore();
          // 'users' collection 정보 가져오기, doc 두번째 인자는 userInfo.uid는 현재 로그인한 유저의 uid
          const userRef = doc(collection(db, 'users'), userInfo.uid);
          // userRef를 통해 해당 유저의 정보 가져오기
          const userSnapshot = await getDoc(userRef);
          // 유저 정보가 있다면
          if (userSnapshot.exists()) {
            // 유저 정보를 userProfile에 저장
            const userData = userSnapshot.data();
            // userProfile에 저장된 유저 정보를 setUserProfile로 넘겨줌
            setUserProfile(userData);
          }
          setLoading(false); // Set loading to false once user profile is available
        } catch (error) {
          console.log(error);
        }
      };
      fetchUserProfile();
    }else {
      navigate("/login");
      setLoading(false); // Set loading to false if userInfo is null
    }
  }, [userInfo]);

  // isDoing 체크하기

  if (loading) {
    return <div></div>;
  }

  return (
    <>
      <Nav />
      {userInfo && userProfile ? (
        <S.MypageWrapper>
          <MainLogo />
          <S.MypageProfileWrapper>
            <S.MypageProfileName onClick={()=>{
              setIsDoing(!isDoing);
            }}><strong style={{fontWeight:"700", fontSize:"28px"}}>{userProfile.displayName}</strong>&nbsp;님, 안녕하세요.</S.MypageProfileName>
            <S.MypageLogoutText onClick={handleLogout}>로그아웃</S.MypageLogoutText>
          </S.MypageProfileWrapper>

          {/* 편집중일때와 아닐때 서로 다른 화면 뜨게 만들기 */}
          
          <S.MypageProcessingWrapper>
          <S.MypageProcessingBar isDone={!isDoing}></S.MypageProcessingBar> 
          <S.MypageProcessing isDone={!isDoing}>
          {
              isDoing ? (
                <S.MypageProcessingContentContainer isDone={!isDoing}>
                  <S.MypageProcessingTitle isDone={isDoing}>
                      <S.ProgressText isDone={!isDoing}>편집 진행 중</S.ProgressText>인 내역입니다 :)
                  </S.MypageProcessingTitle>
                  <S.MypageProcessingTitleWrapper>
                    <S.MypageProcessingContentTitle>카테고리</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>등록 일시</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>결제 정보</S.MypageProcessingContentTitle>
                    {/* <S.MypageProcessingContentTitle style={{justifyContent:"center"}}>진행 상황</S.MypageProcessingContentTitle> */}
                  </S.MypageProcessingTitleWrapper>
                  <S.MypageProcessingSeparator/>


                  {/* 밑에 이제 map으로 진행상태 인 것들 나열 해야함 */}
                  {order.map((item, index) => (
                  <S.MypageProcessingContentWrapper key={index}>
                    <S.ProcessName>{item.category}</S.ProcessName>
                    <S.ProcessName>{item.date}</S.ProcessName>
                    <S.ProcessName>{item.price}</S.ProcessName>
                    <S.ProcessDoing status={item.status}>{item.status === 0 ? "편집 대기" : (item.status === 1 ? "편집 중" : "편집완료")}</S.ProcessDoing>
                  </S.MypageProcessingContentWrapper>
                ))}


                  
                </S.MypageProcessingContentContainer>
                // 진행중이라면
                
              ) : (
                // 진행하는게 없다면
                <>
                    <S.MypageProcessingTitle isDone={!isDoing}>
                      <S.ProgressText isDone={!isDoing}>편집 진행 중</S.ProgressText>인 내역이 없습니다 :(
                    </S.MypageProcessingTitle>
                
                  <S.goOrderBtn isDone={!isDoing}>주문하러 가기</S.goOrderBtn>
                </>
              )
          }
          

            </S.MypageProcessing>

          </S.MypageProcessingWrapper>
          <DetailProfileBox/>


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
