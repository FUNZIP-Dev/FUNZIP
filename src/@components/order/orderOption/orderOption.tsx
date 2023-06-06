import { useState } from "react";
import { OrderOptionCheckActiveIc, OrderOptionCheckIc } from "../../../assets";
import { BASIC_OPTIONS, CAM_OPTIONS, PLUS_OPTIONS } from "../../../core/order/optionList";
import * as S from "./style";

export default function OrderOption() {
  const [selectOption, setSelectOption] = useState({
    basic: -1,
    plus: -1,
    cam: -1,
  });

  const handleSelectBasic = (id: number) => {
    setSelectOption({ ...selectOption, basic: id });
  };

  const handleSelectPlus = (id: number) => {
    setSelectOption({ ...selectOption, plus: id });
  };

  const handleSelectCam = (id: number) => {
    setSelectOption({ ...selectOption, cam: id });
  };

  const checkSelectBasic = (id: number) => {
    return selectOption.basic === id;
  };

  const checkSelectPlus = (id: number) => {
    return selectOption.plus === id;
  };

  const checkSelectCam = (id: number) => {
    return selectOption.cam === id;
  };

  return (
    <S.OrderOptionWrapper>
      <S.Title>기본 옵션</S.Title>
      <S.BoxWrapper>
        {BASIC_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id} onClick={() => handleSelectBasic(id)} isClick={checkSelectBasic(id)}>
            {checkSelectBasic(id) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
      <S.Title>BGM & SFX</S.Title>
      <S.BoxWrapper>
        {PLUS_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id} onClick={() => handleSelectPlus(id)} isClick={checkSelectPlus(id)}>
            {checkSelectPlus(id) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
      <S.Title>원본 영상 촬영캠</S.Title>
      <S.BoxWrapper>
        {CAM_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id} onClick={() => handleSelectCam(id)} isClick={checkSelectCam(id)}>
            {checkSelectCam(id) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
    </S.OrderOptionWrapper>
  );
}
