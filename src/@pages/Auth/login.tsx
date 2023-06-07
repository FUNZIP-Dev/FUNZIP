import { useContext, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";
import { AuthContext } from "../../context/authContext";

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

  return (
    <>
      <Nav />
      <S.AuthWrapper>
      <S.AuthForm>
        <S.AuthInputWrapper>
          <S.AuthInput style={{border:"1px solid black"}} placeholder="이메일" type="email" name="email" onChange={handleEmail} value={email} />
          <S.AuthInput style={{border:"1px solid black"}} placeholder="비밀번호" type="password" name="pwd" onChange={handlePwd} value={pwd} />
        </S.AuthInputWrapper>
        <S.AuthButtonWrapper>
          <S.AuthButton type="button"> {isCreate ? "만들기" : "로그인"}</S.AuthButton>
          <S.AuthSignUpButton type="button" onClick={handleClickCreate}>{isCreate ? "취소" : "Fun.zip이 처음이신가요?"}</S.AuthSignUpButton>
          
        </S.AuthButtonWrapper>
      </S.AuthForm>
      </S.AuthWrapper>
    </>
  );
}
