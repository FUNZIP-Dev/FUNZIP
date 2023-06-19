// LoginForm.js
import React from 'react'
import * as S from "./style";

export default function LoginForm(props: any) {
  const { handleEmail, handlePwd, email, pwd } = props;

  return (
    <S.AuthInputWrapper>
      <S.AuthInput
        required
        style={{ border: "1px solid black" }}
        placeholder="이메일"
        type="email"
        name="email"
        onChange={handleEmail}
        value={email}
      />
      <S.AuthInput
        required
        style={{ border: "1px solid black" }}
        placeholder="비밀번호"
        type="password"
        name="pwd"
        onChange={handlePwd}
        value={pwd}
      />
    </S.AuthInputWrapper>
  );
}
