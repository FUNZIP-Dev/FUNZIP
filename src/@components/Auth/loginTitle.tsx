import { LoginLogo } from "../../assets";
import * as S from "./style";

export default function LoginTitle() {
    return (
        <S.LoginTitleWrapper>
            <LoginLogo/>
            <S.LoginSybTitleText>귀찮아서 자꾸만 미루게 되던 영상편집,</S.LoginSybTitleText>
            <S.LoginTitleText><strong style={{fontWeight:"900"}}>‘FUN.ZIP’</strong> 이 빠르게 해드려요!</S.LoginTitleText>
        </S.LoginTitleWrapper>
    )
}
