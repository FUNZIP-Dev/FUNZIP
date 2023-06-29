import { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { OrderBuyActiveIc, OrderBuyUnActiveIc } from "../../../assets";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { orderMoney } from "../../../recoil/order/orderMoney";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import OrderMoney from "../../common/orderMoney/orderMoney";
import OrderReceipt from "../../common/orderReceipt/orderReceipt";
import { SelectOptionTypes } from "../orderOption/orderOption";
import * as S from "./style";

export default function OrderBuy() {
  const selectOption = useRecoilValue<SelectOptionTypes>(selectOptions);
  const orderStyleData = useRecoilValue<orderStyleDataType>(orderStyle);
  const [isCheckedBuy, setIsCheckedBuy] = useState(false);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);
  const [totalPrice, setTotalPrice] = useRecoilState<number>(orderMoney);

  const handleActiveBuy = () => {
    setIsCheckedBuy(!isCheckedBuy);
  };

  const checkIsTransparent = (color: string) => {
    return color === "transparent";
  };

  useEffect(() => {
    if (isCheckedBuy) {
      setIsNext(true);
    }
  }, [isCheckedBuy]);

  return (
    <>
      <S.OrderReceiptIcon />
      <S.ReceiptWrapper>
        <OrderReceipt />
        <OrderMoney />
      </S.ReceiptWrapper>
      <S.PayNow>
        <S.PayNowTitle>바로 결제할게요</S.PayNowTitle>
        <S.PayButton onClick={handleActiveBuy}>
          {isCheckedBuy ? <OrderBuyActiveIc /> : <OrderBuyUnActiveIc />}
        </S.PayButton>
      </S.PayNow>
    </>
  );
}
