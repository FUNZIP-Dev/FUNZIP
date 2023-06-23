import React, { useContext, useEffect, useState } from 'react';
import * as S from './style';
import Nav from '../../@components/common/nav/nav';
import MypageDetailHeader from '../../@components/myPage/mypageDetailHeader';
import { AuthContext } from '../../context/authContext';
import firebase from "firebase/compat/app";
import 'firebase/compat/auth'; // auth 모듈 추가
import { sendPasswordResetEmail } from 'firebase/auth';
import { authService } from '../../fbase';
import { useNavigate } from 'react-router-dom';
import { DocumentData, collection, doc, getDoc, getFirestore, updateDoc } from 'firebase/firestore';

export default function Setting() {
  const userInfo = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true); // State variable for loading status
    const [userProfile, setUserProfile] = useState<DocumentData | null>(null); // State variable for user profile
    const [phone, setPhone] = useState('');

    /* 유저 정보 가져오기 */
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
              setPhone(userData.phone || '');
            }
            setLoading(false); // Set loading to false once user profile is available
          } catch (error) {
            console.log(error);
          }
        };
        fetchUserProfile();
      } else {
        navigate("/login");
        setLoading(false); // Set loading to false if userInfo is null
      }
    }, [userInfo]);
  
  const handleResetPassword = async () => {
    try {
      if (userInfo && userInfo.email) {
        await sendPasswordResetEmail(authService, userInfo.email);
        alert('비밀번호 초기화 이메일이 성공적으로 전송되었습니다.');
      }
    } catch (error) {
      alert('비밀번호 초기화 이메일 전송에 실패하였습니다.');
    }
  };

   const handleWithdrawal = () => {
    const confirmed = window.confirm('정말로 회원 탈퇴하시겠습니까?');
    if (confirmed) {
      // 회원 탈퇴 처리
      authService.currentUser?.delete()
        .then(() => {
          alert('회원 탈퇴되었습니다. 로그인 화면으로 이동합니다.');
          // 로그아웃 처리
          firebase.auth().signOut();
          // 로그인 화면으로 이동
          navigate('/login');

        })
        .catch((error) => {
          alert('회원 탈퇴에 실패하였습니다.');
        });
    }
  };



  const handlePhoneChange = async () => {
    try {
      if (userInfo && userProfile) {
        const db = getFirestore();
        const userRef = doc(collection(db, 'users'), userInfo.uid);
        await updateDoc(userRef, { phone });
        alert('전화번호가 변경되었습니다.');
      }
    } catch (error) {
      console.log(error);
      alert('전화번호 변경에 실패하였습니다.');
    }
  };


  return (
    <>a
      <Nav />
      <S.MypageDetailWrapper>
        <MypageDetailHeader title="정보 수정" />
        <S.MypageEditWrapper>
          <S.MypageEditHedaer>내 정보 수정</S.MypageEditHedaer>

          <S.MypageEditSubHedaer>이메일</S.MypageEditSubHedaer>
           {userInfo ? userInfo.email : ""}
        
            <S.MypageEditSubHedaer>비밀번호</S.MypageEditSubHedaer>
            <S.PasswordResetForm onClick={handleResetPassword}>
                비밀번호 초기화
            </S.PasswordResetForm>

            <S.MypageEditSubHedaer>전화번호 변경</S.MypageEditSubHedaer>
            <S.NowPhoneNum>현재 전화번호 : {userProfile ? userProfile.phone : ""}</S.NowPhoneNum>
            <S.PasswordResetForm onClick ={()=>{navigate('/google')}}>
                전화번호 초기화
            </S.PasswordResetForm>
            
            


            <S.MypageEditSubHedaer>회원 탈퇴</S.MypageEditSubHedaer>
            <S.PasswordResetForm>
                <S.Deletebtn onClick={handleWithdrawal}>탈퇴하기</S.Deletebtn>
            </S.PasswordResetForm>
            
        </S.MypageEditWrapper>
      </S.MypageDetailWrapper>
    </>
  );
}
