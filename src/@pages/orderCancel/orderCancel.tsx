import { useNavigate } from "react-router-dom";
import Nav from "../../@components/common/nav/nav";
import { OrderFailIc } from "../../assets";
import * as S from "./style";

export default function OrderCancel() {
  const navigate = useNavigate();

  const hanldeMoveToMypage = () => {
    navigate("/mypage");
  };

  const hanldeMoveToHome = () => {
    navigate("/");
  };

  return (
    <S.OrderPageWrapper>
      <Nav />
      <S.Box>
        <OrderFailIc />
        <S.ButtonWrapper>
          <S.Button $isBlack={true} onClick={hanldeMoveToMypage}>
            마이페이지로 이동
          </S.Button>
          <S.Button $isBlack={false} onClick={hanldeMoveToHome}>
            홈으로 이동
          </S.Button>
        </S.ButtonWrapper>
      </S.Box>
    </S.OrderPageWrapper>
  );
}
