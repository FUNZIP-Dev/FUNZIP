import * as S from "./style";
import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';
import { AuthContext } from '../../context/authContext';
import { AuthButton, AuthText, AuthWrapper } from '../../@pages/Auth/style';
import Nav from "../common/nav/nav";

export default function SignUpGoogleForm() {

  const userInfo = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const userData = location.state?.userData || {};
  const [phone, setPhone] = useState(userData.phone || '');
  const [isPhoneFormatValid, setPhoneFormatValid] = useState(true);


  const handleSubmit = async (e:any) => {
    e.preventDefault();
  
    // Update the userData object with the new nickname and phone values
    const updatedUserData = { ...userData, phone };
  
    try {
      if(userInfo !== null){
      const db = getFirestore();
      const userRef = doc(db, 'users', userInfo.uid);

      
      await updateDoc(userRef, updatedUserData);
      navigate('/mypage');
      }else{
        navigate('/login');
      }
    } catch (error) {
      alert(error);
    }
  }

   // 휴대폰 번호 입력
 const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  const phoneNumber = e.target.value;
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  setPhone(formattedPhoneNumber);
  setPhoneFormatValid(checkPhoneFormat(formattedPhoneNumber));
};

// Helper function to check phone number format validity
const checkPhoneFormat = (phoneNumber: string) => {
  return /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);
};

// Helper function to format phone number
const formatPhoneNumber = (phoneNumber: string) => {
  // Remove any non-digit characters from the input
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');

  // Split the phone number into groups of 4 digits
  const groups = cleanedPhoneNumber.match(/^(\d{3})(\d{4})(\d{4})$/);

  if (groups) {
    // Format the phone number as "000-0000-0000"
    const formattedPhoneNumber = `${groups[1]}-${groups[2]}-${groups[3]}`;
    return formattedPhoneNumber;
  }

  // Return the original phone number if it doesn't match the format
  return phoneNumber;
};




  return (
    <>
    <Nav/>
    <AuthWrapper>
      <AuthText>추가 정보 기입</AuthText>
      <form onSubmit={handleSubmit}>
        {/* --------------- 휴대폰 번호 --------------- */}
        <S.SignUpInputWrapper>
              <S.SignUpInputTitleText>휴대폰 번호</S.SignUpInputTitleText>
              <S.SignUpInput
                  required
                  placeholder="010-0000-0000"
                  type="tel"
                  name="phone"
                  onChange={handlePhone}
                  value={phone}
                  isValid={isPhoneFormatValid}
                  />
          {phone ? <S.MessageText isValid={isPhoneFormatValid}>000-0000-0000 형식으로 입력해주세요!</S.MessageText> : ""}

          </S.SignUpInputWrapper>
        <AuthButton type="submit">완료
        </AuthButton>
      </form>
    </AuthWrapper>
    </>
  );
}
