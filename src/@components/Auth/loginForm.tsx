// LoginForm.js

import * as S from "./style";

export default function LoginForm(props: any) {
  const { handleEmail, handlePwd, email, pwd } = props;

  return (
    <S.AuthInputWrapper>
      <S.AuthInput
        required
        placeholder="이메일을 입력하세요."
        type="email"
        name="email"
        onChange={handleEmail}
        value={email}
        isValid={email ? true : false} // <-- Update prop name to "isValid"
      />

      <S.AuthInput
        required
        placeholder="비밀번호를 입력하세요."
        type="password"
        name="pwd"
        onChange={handlePwd}
        value={pwd}
        isValid={pwd ? true : false} // <-- Update prop name to "isValid"
      />
    </S.AuthInputWrapper>
  );
}
