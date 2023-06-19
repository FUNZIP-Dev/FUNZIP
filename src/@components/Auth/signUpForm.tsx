// SignUpForm.js
import React from 'react';
import * as S from "./style";

export default function SignUpForm(props: any) {
  const { handleEmail, handlePwd, handleConfirmPwd, handleNickname, handlePhone, email, pwd, confirmPwd, nickname, phone } = props;

  return (
    <>
    <S.AuthInputWrapper>
        
        {/* 이메일 */}
        <S.SignUpInputWrapper>
            <S.SignUpInputTitleText>이메일</S.SignUpInputTitleText>
            <S.SignUpInput
                    required
                    placeholder="이메일을 입력하세요."
                    type="email"
                    name="email"
                    onChange={handleEmail}
                    value={email}
            />
        </S.SignUpInputWrapper>


        {/* 비밀번호 */}
        <S.SignUpInputWrapper>
            <S.SignUpInputTitleText>이메일</S.SignUpInputTitleText>
            <S.SignUpInput
                    required
                    placeholder="이메일을 입력하세요."
                    type="email"
                    name="email"
                    onChange={handleEmail}
                    value={email}
            />
        </S.SignUpInputWrapper>

        <S.AuthInput
            required
            style={{ border: "1px solid black" }}
            placeholder="비밀번호"
            type="password"
            name="pwd"
            onChange={handlePwd}
            value={pwd}
        />
        <S.AuthInput
            required
            style={{ border: "1px solid black" }}
            placeholder="비밀번호 확인"
            type="password"
            name="confirmPwd"
            onChange={handleConfirmPwd}
            value={confirmPwd}
        />
        <S.AuthInput
            required
            style={{ border: "1px solid black" }}
            placeholder="닉네임"
            type="text"
            name="nickname"
            onChange={handleNickname}
            value={nickname}
        />
        <S.AuthInput
            required
            style={{ border: "1px solid black" }}
            placeholder="휴대폰 번호"
            type="tel"
            name="phone"
            onChange={handlePhone}
            value={phone}
        />
      </S.AuthInputWrapper>
    </>
  );
}
