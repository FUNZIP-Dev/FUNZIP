import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import Nav from "../../@components/common/nav/nav";
import { SelectOptionTypes } from "../../@components/order/orderOption/orderOption";
import { OrderSuccessIc } from "../../assets";
import { orderStyle } from "../../recoil/order/fontStyle";
import { orderMoney } from "../../recoil/order/orderMoney";
import { selectCategory } from "../../recoil/order/selectCatogry";
import { selectOptions } from "../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../type/order/orderStyleData";
import * as S from "./style";

export default function OrderSuccess() {
  const navigate = useNavigate();
  const category = useRecoilValue<string>(selectCategory);
  const options = useRecoilValue<SelectOptionTypes>(selectOptions);
  const style = useRecoilValue<orderStyleDataType>(orderStyle);
  const price = useRecoilValue<number>(orderMoney);

  const hanldeMoveToMypage = () => {
    navigate("/mypage");
  };

  const hanldeMoveToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    let today = new Date();
    let year = today.getFullYear(); // 년도
    let month = today.getMonth() + 1; // 월
    let date = today.getDate();

    console.log({
      category: category,
      options,
      style,
      price: price,
      status: 0,
      createdAt: year + "." + month + "." + date,
      endAt: "",
    });
  }, []);

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
