import { useNavigate } from "react-router-dom";
import Nav from "../../@components/common/nav/nav";
import { OrderSuccessIc } from "../../assets";
import * as S from "./style";

export default function OrderSuccess() {
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
        <OrderSuccessIc />
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
