import { useContext, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";
import { AuthContext } from "../../context/authContext";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const userInfo = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [isCreate, setIsCreate] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handlePwd = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPwd(e.target.value);
  };

  const handleClickCreate = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsCreate(pre => !pre);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("submit");
    e.preventDefault();

    // 회원 가입일때
    if (isCreate) {
      createUserWithEmailAndPassword(authService, email, pwd)
        .then(() => {
          alert("회원가입 성공");
        })
        .catch(e => {
          alert(e);
        });
    }else{
      signInWithEmailAndPassword(authService, email, pwd)
      .then(() => {
        alert("로그인 성공");
      })
      .catch(e => {
        alert(e);
      });
    }
  };

  return (
    <>
      <Nav />
      <S.AuthWrapper>
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
      </S.AuthWrapper>
    </>
  );
}
