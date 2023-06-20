import { useContext, useEffect, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService, dbService } from "../../fbase";
import { AuthContext } from "../../context/authContext";
import { getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,GoogleAuthProvider } from "firebase/auth";
import { getFirestore,getDoc, collection, setDoc, onSnapshot, doc, deleteDoc, updateDoc } from "firebase/firestore";


import { useNavigate } from "react-router-dom";
import LoginForm from "../../@components/Auth/loginForm";
import SignUpForm from "../../@components/Auth/signUpForm";
import {GoogleIcon, LoginLogo} from "../../assets";
import LoginTitle from "../../@components/Auth/loginTitle";
import SignUpGoogleForm from "../../@components/Auth/signUpGoogleForm";

export default function Login() {

  const navigate = useNavigate();
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState<string>("");

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


const handleGoogleLogin = () => {
  const db = getFirestore();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      if (user) {
        const { email, displayName } = user;
        // Check if the user already exists in the "users" collection
        const userRef = doc(collection(db, 'users'), user.uid);
        getDoc(userRef)
          .then((docSnapshot) => {
            if (docSnapshot.exists()) {
              // User already exists, perform login logic
              alert('로그인 하셨습니다.');
              navigate('/mypage');
            } else {
              const userData = {
                email: email,
                phone: phone,
                nickname: displayName || '',
                staff: 0,
              };

              setDoc(userRef, userData).then(() => {
                alert('회원가입 하셨습니다.');
                navigate('/google');
              });
            }
          })
          .catch((err) => {
            alertError(err);
          });
      }
    })
    .catch((err) => {
      alertError(err);
    });
};


// Helper function to check phone number format validity
const checkPhoneFormat = (phoneNumber: string) => {
  return /^\d{3}-\d{4}-\d{4}$/.test(phoneNumber);
};

const alertError = (err:any) => {
  if (err.code == 'auth/invalid-email') {
    alert('이메일 형식이 틀립니다.');
  }
  if (err.code == 'auth/user-not-found') {
    alert('아이디가 존재하지 않습니다.');
  }
  if (err.code == 'auth/wrong-password') {
    alert('비밀번호를 다시 확인해주세요');
  }
  if (err.code == 'auth/too-many-requests') {
    alert('잠시 후 다시 시도해 주세요');
  }

};
  // 회원가입, 로그인 페이지 전환
  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsCreate(pre => !pre);

      // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // 회원 가입일때
    if (isCreate) {
      const db = getFirestore();
      const userRef = collection(db, "users");
  
      try {
        const userCredential = await createUserWithEmailAndPassword(authService, email, pwd);
        const user = userCredential.user;
        if (user) {
          // Save additional user data to Firebase database
          const userData = {
            email: user.email,
            phone: phone,
            nickname: nickname,
            staff : 0
          };
          // Use the UID as the key for the user document
          await setDoc(doc(userRef, user.uid), userData);
          alert("회원가입 하셨습니다.");
        }
      } catch (error) {
        alertError(error)
      }
    } else {
      signInWithEmailAndPassword(authService, email, pwd)
        .then(() => {
          alert("로그인 하셨습니다.");
        })
        .catch(e => {
          alertError(e);
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
              <S.AuthSocialButton onClick={handleGoogleLogin}>
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
