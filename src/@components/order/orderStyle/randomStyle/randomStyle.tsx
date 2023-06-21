import { useState } from "react";
import { useRecoilState } from "recoil";
import {
  OrderRandomOrderStyleOpenToggleIc,
  OrderRandomOrderStyleToggleIc,
  OrderRandomStyleCheckedIc,
  OrderRandomStyleUncheckedIc,
  RandomStyle1Ic,
  RandomStyle2Ic,
  RandomStyle3Ic,
  RandomStyle4Ic,
} from "../../../../assets";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import * as S from "./style";

export default function RandomStyle() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);
  const [openToggle, setOpenToggle] = useState<boolean>(false);
  const [selectRandomOrder, setSelectRandomOrder] = useState([
    { id: 1, isSelected: false },
    { id: 2, isSelected: false },
    { id: 3, isSelected: false },
    { id: 4, isSelected: false },
  ]);

  const handleOnOffTogle = () => {
    setOpenToggle(!openToggle);
  };

  const handleSelectedStyle = (selectedId: number) => {
    setSelectRandomOrder(
      selectRandomOrder.map((selectCateg) =>
        selectCateg.id === selectedId ? { ...selectCateg, isSelected: !selectCateg.isSelected } : selectCateg,
      ),
    );
  };

  return (
    <>
      <S.RandomStyleBox>
        <p>직접 디자인을 선택하기 어려우세요?</p>
        <h1>펀집이 조합을 추천해드릴게요!</h1>
        <div onClick={handleOnOffTogle}>
          {openToggle ? <OrderRandomOrderStyleOpenToggleIc /> : <OrderRandomOrderStyleToggleIc />}
        </div>
        <section>
          <article onClick={() => handleSelectedStyle(1)}>
            {selectRandomOrder[0].isSelected ? <OrderRandomStyleUncheckedIc /> : <OrderRandomStyleCheckedIc />}
            <RandomStyle1Ic />
          </article>
          <article onClick={() => handleSelectedStyle(2)}>
            {selectRandomOrder[1].isSelected ? <OrderRandomStyleUncheckedIc /> : <OrderRandomStyleCheckedIc />}
            <RandomStyle2Ic />
          </article>
          <article onClick={() => handleSelectedStyle(3)}>
            {selectRandomOrder[2].isSelected ? <OrderRandomStyleUncheckedIc /> : <OrderRandomStyleCheckedIc />}
            <RandomStyle3Ic />
          </article>
          <article onClick={() => handleSelectedStyle(4)}>
            {selectRandomOrder[3].isSelected ? <OrderRandomStyleUncheckedIc /> : <OrderRandomStyleCheckedIc />}
            <RandomStyle4Ic />
          </article>
        </section>
      </S.RandomStyleBox>
    </>
  );
}
