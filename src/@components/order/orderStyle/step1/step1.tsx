import "@toast-ui/editor/dist/toastui-editor.css";
import { ChangeEvent, useState } from "react";
import { SketchPicker } from "react-color";
import { BackgroundColorIc, BorderColorIc, ShadowColorIc, TextColorIc } from "../../../../assets";
import { COLOR_PALETTE, SELECT_COLOR } from "../../../../core/order/colorPicker";
import { FONT, SIZE } from "../../../../core/order/styleFonts";
import { OrderStyleStepProps } from "../../../../type/order/orderStypeStepProps";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step1(props: OrderStyleStepProps) {
  const { orderStyleData, setOrderStyleData } = props;
  const [selectedColor, setSelectedColor] = useState<string>("");

  const getFontOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderStyleData({ ...orderStyleData, font: e.target.value });
  };

  const getSizeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderStyleData({ ...orderStyleData, size: Number(e.target.value) });
  };

  const getTextColorOption = (color: any) => {
    setOrderStyleData({ ...orderStyleData, textColor: color.hex });
  };

  const getBorderColorOption = (color: any) => {
    setOrderStyleData({ ...orderStyleData, borderColor: color.hex });
  };

  const getBackgroundColorOption = (color: any) => {
    setOrderStyleData({ ...orderStyleData, backgroundColor: color.hex });
  };

  const getShadowColorOption = (color: any) => {
    setOrderStyleData({ ...orderStyleData, shadowColor: color.hex });
  };

  const checkIsSelected = (color: string) => {
    return color === selectedColor;
  };

  const handleSelectColorStyle = (color: string) => {
    setSelectedColor(color);
  };

  const showSelectColorStyle = (color: string) => {
    switch (color) {
      case "textColor":
        return (
          <SketchPicker
            color={orderStyleData.textColor}
            onChangeComplete={getTextColorOption}
            presetColors={COLOR_PALETTE}
            width="300px"
          />
        );
      case "borderColor":
        return (
          <SketchPicker
            color={orderStyleData.borderColor}
            onChangeComplete={getBorderColorOption}
            presetColors={COLOR_PALETTE}
            width="300px"
          />
        );
      case "backgroundColor":
        return (
          <SketchPicker
            color={orderStyleData.backgroundColor}
            onChangeComplete={getBackgroundColorOption}
            presetColors={COLOR_PALETTE}
            width="300px"
          />
        );
      case "shadowColor":
        return (
          <SketchPicker
            color={orderStyleData.shadowColor}
            onChangeComplete={getShadowColorOption}
            presetColors={COLOR_PALETTE}
            width="300px"
          />
        );
      default:
        return;
    }
  };

  const showSelectColorBox = (color: string) => {
    switch (color) {
      case "textColor":
        return <TextColorIc />;
      case "borderColor":
        return <BorderColorIc />;
      case "backgroundColor":
        return <BackgroundColorIc />;
      case "shadowColor":
        return <ShadowColorIc />;
      default:
        return;
    }
  };

  return (
    <>
      <StepPageLayout
        num={1}
        title="자막 스타일을 직접 선택해주세요."
        sub="왼쪽 미리보기 화면에서 디자인을 확인하세요 :)">
        <select name="font" onChange={getFontOption}>
          {FONT?.map(({ id, fontFamily, fontName }) => (
            <option key={id} value={fontFamily}>
              {fontName}
            </option>
          ))}
        </select>
        <select name="size" onChange={getSizeOption}>
          {SIZE?.map(({ id, size }) => (
            <option key={id} value={size}>
              {size}
            </option>
          ))}
        </select>
        {SELECT_COLOR.map(({ id, color }) => (
          <S.ColorBox onClick={() => handleSelectColorStyle(color)}>{showSelectColorBox(color)}</S.ColorBox>
        ))}
        {SELECT_COLOR.map(({ id, color }) => (
          <>{checkIsSelected(color) && <S.SketchPickerWrapper>{showSelectColorStyle(color)}</S.SketchPickerWrapper>}</>
        ))}
      </StepPageLayout>
    </>
  );
}
