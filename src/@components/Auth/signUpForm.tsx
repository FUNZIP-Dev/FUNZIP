// SignUpForm.js
import React from 'react';
import * as S from "./style";

interface SignUpFormProps {
    handleEmail: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePwd: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleConfirmPwd: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleNickname: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhone: (e: React.ChangeEvent<HTMLInputElement>) => void;
    email: string;
    pwd: string;
    confirmPwd: string;
    nickname: string;
    phone: string;
    pwdMatchMessage: string;
    pwdStrengthMessage : string;
    isPhoneFormatValid: boolean;
}

const SignUpForm: React.FC<SignUpFormProps> = ({
    handleEmail,
    handlePwd,
    handleConfirmPwd,
    handleNickname,
    handlePhone,
    email,
    pwd,
    confirmPwd,
    nickname,
    phone,
    pwdMatchMessage,
    pwdStrengthMessage,
    isPhoneFormatValid
}) => {
  return (
    <>
      <S.AuthInputWrapper>
        {/* --------------- 이메일  --------------- */}
        <S.SignUpInputWrapper>
          <S.SignUpInputTitleText>이메일</S.SignUpInputTitleText>
          <S.SignUpInput
            required
            placeholder="이메일을 입력하세요."
            type="email"
            name="email"
            onChange={handleEmail}
            value={email}
            isValid={true}
          />
        </S.SignUpInputWrapper>

        {/* --------------- 비밀번호 입력 --------------- */}
        <S.SignUpInputWrapper>
          <S.SignUpInputTitleText>비밀번호</S.SignUpInputTitleText>
          <S.SignUpInput
            required
            placeholder="비밀번호"
            type="password"
            name="pwd"
            onChange={handlePwd}
            value={pwd}
            isValid={true}
          />
            <S.MessageText >{pwdStrengthMessage}</S.MessageText>
        </S.SignUpInputWrapper>


        {/* --------------- 비밀번호 확인 --------------- */}
        <S.SignUpInputWrapper>
            <S.SignUpInputTitleText>비밀번호 확인</S.SignUpInputTitleText>
            <S.SignUpInput
                required
                placeholder="비밀번호 확인"
                type="password"
                name="confirmPwd"
                onChange={handleConfirmPwd}
                value={confirmPwd}
                isValid={pwd === confirmPwd}
            />
                {
                confirmPwd ? 
                (pwd === confirmPwd 
                    ? <S.MessageText isValid={true} >확인 완료</S.MessageText> 
                    : <S.MessageText isValid={false} >동일하지 않은 비밀번호입니다 :(</S.MessageText>
                ) : ""
                }
        </S.SignUpInputWrapper>

        {/* --------------- 닉네임 --------------- */}
        <S.SignUpInputWrapper>
            <S.SignUpInputTitleText>닉네임</S.SignUpInputTitleText>
            <S.SignUpInput
                required
                placeholder="닉네임"
                type="text"
                name="nickname"
                onChange={handleNickname}
                value={nickname}
                isValid={true}
            />
        </S.SignUpInputWrapper>

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
        {!isPhoneFormatValid && <S.MessageText>000-0000-0000 형식으로 입력해주세요!</S.MessageText>}

        </S.SignUpInputWrapper>
    
      </S.AuthInputWrapper>
    </>
  );
};

export default SignUpForm;
