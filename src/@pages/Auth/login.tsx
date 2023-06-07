import { useState } from "react";
import Nav from "../../@components/common/nav/nav";
import * as S from "./style";
import { authService } from "../../fbase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      console.log(authService);
      // await authService.signInWithEmailAndPassword(email, password);
      // 로그인 성공 후 리다이렉트 또는 다음 작업 수행
    } catch (error) {
      // 로그인 실패 시 에러 처리
    }
  };

  return (
    <>
      <Nav />
      <S.AuthWrapper>
        <form onSubmit={handleLogin}>
          <input type="email" value={email} onChange={handleEmailChange} placeholder="이메일" />
          <input type="password" value={password} onChange={handlePasswordChange} placeholder="비밀번호" />
          <button type="submit">로그인</button>
        </form>
      </S.AuthWrapper>
    </>
  );
}
