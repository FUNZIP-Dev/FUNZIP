import { useContext, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";
import { AuthContext } from "../../context/authContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);

  // 이메일 입력
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  // 비밀번호 입력
  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  // 회원가입, 로그인 페이지 전환
  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate(pre => !pre);
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
        {
          userInfo ?
          (
            <>
              <S.AuthText> {userInfo.email}님 환영합니다. </S.AuthText>
              <S.AuthButton onClick={handleLogout}> 로그아웃 </S.AuthButton>
            </>
          ):
          <S.AuthForm onSubmit={handleSubmit}>
          <S.AuthInputWrapper>
            <S.AuthInput required style={{border:"1px solid black"}} placeholder="이메일" type="email" name="email" onChange={handleEmail} value={email} />
            <S.AuthInput required style={{border:"1px solid black"}} placeholder="비밀번호" type="password" name="pwd" onChange={handlePwd} value={pwd} />
          </S.AuthInputWrapper>
          <S.AuthButtonWrapper>
            <S.AuthButton type="submit"> {isCreate ? "회원가입" : "로그인"}</S.AuthButton>
            <S.AuthSignUpButton type="submit" onClick={handleClickCreate}>{isCreate ? "이미 계정이 있으신가요?" : "Fun.zip이 처음이신가요?"}</S.AuthSignUpButton>
            
          </S.AuthButtonWrapper>
        </S.AuthForm>
        }

      </S.AuthWrapper>
    </>
  );
}
