import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { OrderOptionCheckActiveIc, OrderOptionCheckIc } from "../../../assets";
import { BASIC_OPTIONS, CAM_OPTIONS, PLUS_OPTIONS } from "../../../core/order/optionList";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { selectOptions } from "../../../recoil/order/selectOptions";
import * as S from "./style";

export interface SelectOptionTypes {
  basic: string[];
  plus: string[];
  cam: string;
}

export default function OrderOption() {
  const [selectOption, setSelectOption] = useRecoilState<SelectOptionTypes>(selectOptions);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);

  useEffect(() => {
    if (selectOption.basic.length !== 0 && selectOption.plus.length !== 0 && selectOption.cam !== "") {
      setIsNext(true);
    }
  }, [selectOption]);

  const handleSelectBasic = (title: string) => {
    if (selectOption.basic.includes(title)) {
      const newBasic = selectOption.basic.filter((option) => option !== title);
      setSelectOption({ ...selectOption, basic: [...newBasic] });
    } else {
      setSelectOption({ ...selectOption, basic: [...selectOption.basic, title] });
    }
  };

  const handleSelectPlus = (title: string) => {
    if (title === "선택 안함") {
      if (selectOption.plus.includes("선택 안함")) {
        setSelectOption({ ...selectOption, plus: [] });
      } else {
        setSelectOption({ ...selectOption, plus: ["선택 안함"] });
      }
    } else {
      const resetPlus = selectOption.plus.filter((option) => option !== "선택 안함");
      if (selectOption.plus.includes(title)) {
        const newPlus = resetPlus.filter((option) => option !== title);
        setSelectOption({ ...selectOption, plus: [...newPlus] });
      } else {
        setSelectOption({ ...selectOption, plus: [...resetPlus, title] });
      }
    }
  };

  const handleSelectCam = (title: string) => {
    setSelectOption({ ...selectOption, cam: title });
  };

  const checkSelectBasic = (title: string) => {
    if (title !== "스타일 자막(오픈 준비 중)") {
      return selectOption.basic.includes(title);
    }
  };

  const checkSelectPlus = (title: string) => {
    return selectOption.plus.includes(title);
  };

  const checkSelectCam = (title: string) => {
    return selectOption.cam === title;
  };

  return (
    <S.OrderOptionWrapper>
      <S.Title>기본 옵션</S.Title>
      <S.BoxWrapper>
        {BASIC_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id} onClick={() => handleSelectBasic(title)} $isClick={checkSelectBasic(title)}>
            {checkSelectBasic(title) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
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
          <S.Box key={id} onClick={() => handleSelectPlus(title)} $isClick={checkSelectPlus(title)}>
            {checkSelectPlus(title) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
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
          <S.Box key={id} onClick={() => handleSelectCam(title)} $isClick={checkSelectCam(title)}>
            {checkSelectCam(title) ? <OrderOptionCheckActiveIc /> : <OrderOptionCheckIc />}
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
