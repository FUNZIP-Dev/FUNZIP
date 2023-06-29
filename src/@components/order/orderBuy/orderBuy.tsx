import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { OrderBuyActiveIc, OrderBuyUnActiveIc } from "../../../assets";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import OrderMoney from "../../common/orderMoney/orderMoney";
import OrderReceipt from "../../common/orderReceipt/orderReceipt";
import * as S from "./style";

export default function OrderBuy() {
  const [isCheckedBuy, setIsCheckedBuy] = useState(false);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);

  const handleActiveBuy = () => {
    setIsCheckedBuy(!isCheckedBuy);
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
