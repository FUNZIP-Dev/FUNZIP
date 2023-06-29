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
        selectCateg.id === selectedId
          ? { ...selectCateg, isSelected: !selectCateg.isSelected }
          : { ...selectCateg, isSelected: false },
      ),
    );
    switch (selectedId) {
      case 1:
        setOrderStyleData({
          ...orderStyleData,
          font: "Pretendard Medium",
          textColor: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          size: 10,
          borderColor: "transparent",
          shadowColor: "transparent",
        });
        break;
      case 2:
        setOrderStyleData({
          ...orderStyleData,
          font: "G마켓산스 Medium",
          textColor: "black",
          backgroundColor: "rgba(255,255,255, 0.5)",
          size: 10,
          borderColor: "transparent",
          shadowColor: "transparent",
        });
        break;
      case 3:
        setOrderStyleData({
          ...orderStyleData,
          font: "에스코어 드림 4",
          textColor: "white",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          size: 10,
          borderColor: "transparent",
          shadowColor: "transparent",
        });
        break;
      case 4:
        setOrderStyleData({
          ...orderStyleData,
          font: "KCC 은영체",
          textColor: "white",
          shadowColor: "black",
          size: 10,
          borderColor: "transparent",
          backgroundColor: "transparent",
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <S.RandomStyleBox $openToggle={openToggle}>
        <S.Header>
          <S.TitleWrapper>
            <S.SubTitle>직접 디자인을 선택하기 어려우세요?</S.SubTitle>
            <S.Title>펀집이 조합을 추천해드릴게요!</S.Title>
          </S.TitleWrapper>
          <S.ToggleButton onClick={handleOnOffTogle}>
            {openToggle ? <OrderRandomOrderStyleOpenToggleIc /> : <OrderRandomOrderStyleToggleIc />}
          </S.ToggleButton>
        </S.Header>
        {openToggle && (
          <S.StyleWrapper>
            <S.StyleBox onClick={() => handleSelectedStyle(1)}>
              {selectRandomOrder[0].isSelected ? <OrderRandomStyleCheckedIc /> : <OrderRandomStyleUncheckedIc />}
              <RandomStyle1Ic />
            </S.StyleBox>
            <S.StyleBox onClick={() => handleSelectedStyle(2)}>
              {selectRandomOrder[1].isSelected ? <OrderRandomStyleCheckedIc /> : <OrderRandomStyleUncheckedIc />}
              <RandomStyle2Ic />
            </S.StyleBox>
            <S.StyleBox onClick={() => handleSelectedStyle(3)}>
              {selectRandomOrder[2].isSelected ? <OrderRandomStyleCheckedIc /> : <OrderRandomStyleUncheckedIc />}
              <RandomStyle3Ic />
            </S.StyleBox>
            <S.StyleBox onClick={() => handleSelectedStyle(4)}>
              {selectRandomOrder[3].isSelected ? <OrderRandomStyleCheckedIc /> : <OrderRandomStyleUncheckedIc />}
              <RandomStyle4Ic />
            </S.StyleBox>
          </S.StyleWrapper>
        )}
      </S.RandomStyleBox>
    </>
  );
}
