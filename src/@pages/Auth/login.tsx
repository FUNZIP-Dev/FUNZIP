import { useContext, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";
import { AuthContext } from "../../context/authContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import LoginForm from "../../@components/Auth/loginForm";
import SignUpForm from "../../@components/Auth/signUpForm";
import {GoogleIcon, LoginLogo} from "../../assets";
import LoginTitle from "../../@components/Auth/loginTitle";

export default function Login() {

  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);
  const [confirmPwd, setConfirmPwd] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [passwordIsVaild, setpasswordIsVaild] = useState(false);
  const [pwdMatchMessage, setPwdMatchMessage] = useState("");
  const [isPhoneFormatValid, setPhoneFormatValid] = useState(true);

  // 이메일 입력
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  // 비밀번호 입력
  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const password = e.target.value;
    setPwd(password);
  
    // Password strength validation
    const hasMinLength = password.length >= 8;
    const hasValidCombination = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&*()]).{2,}$/.test(password);
    if (hasMinLength && hasValidCombination) {
      setpasswordIsVaild(true);
    } else {
      setpasswordIsVaild(false);
    }
  };


    // 비밀번호 확인 입력
    const handleConfirmPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const confirmedPassword = e.target.value;
      setConfirmPwd(confirmedPassword);
    
      // Password confirmation validation
      if (confirmedPassword !== pwd) {
        setPwdMatchMessage("동일하지 않은 비밀번호입니다 :(");
      } else {
        setPwdMatchMessage("확인 완료되었습니다 :)");
      }
    };

 // 닉네임 입력
  const handleNickname = (e:React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

 // 휴대폰 번호 입력
 const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
  e.preventDefault();
  const phoneNumber = e.target.value;
  const formattedPhoneNumber = formatPhoneNumber(phoneNumber);
  setPhone(formattedPhoneNumber);
  setPhoneFormatValid(checkPhoneFormat(formattedPhoneNumber));
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

// Helper function to check phone number format validity
const checkPhoneFormat = (phoneNumber: string) => {
  return /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);
};


  // 회원가입, 로그인 페이지 전환
  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsCreate(pre => !pre);

      // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 회원가입, 로그인 기능
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 회원 가입일때
    if (isCreate) {
      createUserWithEmailAndPassword(authService, email, pwd)
        .then(() => {
          alert("회원가입 하셨습니다.");
        })
        .catch(e => {
          alert(e);
        });
    }else{
      signInWithEmailAndPassword(authService, email, pwd)
      .then(() => {
        alert("로그인 하셨습니다.");
      })
      .catch(e => {
        alert(e);
      });
    }
  };
  // 로그아웃 기능 
  const handleLogout = () => {
    signOut(authService);
  };

  if (userInfo) {
    navigate("/mypage"); // Redirect to "mypage" route if userInfo exists
  }



  
  return (
    <>
      <Nav />
      <S.AuthWrapper>
        {userInfo ? (
          <>
            <S.AuthText> {userInfo.email}님 환영합니다. </S.AuthText>
            <S.AuthButton onClick={handleLogout}> 로그아웃 </S.AuthButton>
          </>
        ) : (
          <S.AuthForm onSubmit={handleSubmit}>
            {isCreate ? (
              <>
              <S.AuthText>회원가입</S.AuthText>
              <SignUpForm
                passwordIsVaild={passwordIsVaild}
                pwdMatchMessage={pwdMatchMessage}
                handleEmail={handleEmail}
                handlePwd={handlePwd}
                handleConfirmPwd={handleConfirmPwd}
                handleNickname={handleNickname}
                handlePhone={handlePhone}
                email={email}
                pwd={pwd}
                confirmPwd={confirmPwd}
                nickname={nickname}
                phone={phone}
                isPhoneFormatValid={isPhoneFormatValid}
              />
              </>
              
            ) : (
              <>
                <LoginTitle/>
                <LoginForm
                  handleEmail={handleEmail}
                  handlePwd={handlePwd}
                  email={email}
                  pwd={pwd}
                />
              </>

            )}
            <S.AuthButtonWrapper>
              <S.AuthButton type="submit">
                {isCreate ? "회원가입" : "로그인"}
              </S.AuthButton>
              <S.AuthSignUpButton type="submit" onClick={handleClickCreate}>
                {isCreate ? "이미 계정이 있으신가요?" : "Fun.zip이 처음이신가요?"}
              </S.AuthSignUpButton>
              <S.AuthSocialButton>
                <GoogleIcon/>
                <S.AuthSocialButtonText style={{margin:"0 auto"}}>
                  Google 로그인
                </S.AuthSocialButtonText>
              </S.AuthSocialButton>
              {/* 구글 로그인 */}
            </S.AuthButtonWrapper>
          </S.AuthForm>
        )}
      </S.AuthWrapper>
    </>
  );
}
