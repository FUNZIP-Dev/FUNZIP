import { useState } from "react";
import { useRecoilState } from "recoil";
import { OrderRandomOrderStyleOpenToggleIc, OrderRandomOrderStyleToggleIc } from "../../../../assets";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import * as S from "./style";

export default function RandomStyle() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);
  const [openToggle, setOpenToggle] = useState<boolean>(false);

  const handleOnOffTogle = () => {
    setOpenToggle(!openToggle);
  };

  return (
    <>
      <S.RandomStyleBox>
        <p>직접 디자인을 선택하기 어려우세요?</p>
        <h1>펀집이 조합을 추천해드릴게요!</h1>
        <div onClick={handleOnOffTogle}>
          {openToggle ? <OrderRandomOrderStyleOpenToggleIc /> : <OrderRandomOrderStyleToggleIc />}
        </div>
      </S.RandomStyleBox>
    </>
  );
}
