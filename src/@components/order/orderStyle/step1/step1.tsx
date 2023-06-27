import "@toast-ui/editor/dist/toastui-editor.css";
import { useState } from "react";
import { SketchPicker } from "react-color";
import { useRecoilState } from "recoil";
import { styled } from "styled-components";
import { BackgroundColorIc, BorderColorIc, EmptyColorIc, ShadowColorIc, TextColorIc } from "../../../../assets";
import { COLOR_PALETTE, SELECT_COLOR } from "../../../../core/order/colorPicker";
import { FONT, SIZE } from "../../../../core/order/styleFonts";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step1() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [colorModalShow, setColorModalShow] = useState(false);
  const [openedFontToggle, setOpenedFontToggle] = useState<boolean>(false);
  const [openedSizeToggle, setOpenedSizeToggle] = useState<boolean>(false);

  const getFontOption = (fontFmaily: string) => {
    setOrderStyleData({ ...orderStyleData, font: fontFmaily });
    setOpenedFontToggle(false);
  };

  const getSizeOption = (size: number) => {
    setOrderStyleData({ ...orderStyleData, size: Number(size) });
    setOpenedSizeToggle(false);
  };

  const getTextColorOption = (color: any) => {
    setColorModalShow(false);
    setOrderStyleData({ ...orderStyleData, textColor: color.hex });
  };

  const getBorderColorOption = (color: any) => {
    setColorModalShow(false);
    setOrderStyleData({ ...orderStyleData, borderColor: color.hex });
  };

  const getBackgroundColorOption = (color: any) => {
    setColorModalShow(false);
    setOrderStyleData({ ...orderStyleData, backgroundColor: color.hex });
  };

  const getShadowColorOption = (color: any) => {
    setColorModalShow(false);
    setOrderStyleData({ ...orderStyleData, shadowColor: color.hex });
  };

  const checkIsSelected = (color: string) => {
    return color === selectedColor;
  };

  const handleSelectColorStyle = (color: string) => {
    checkIsSelected(color) ? setSelectedColor("") : setSelectedColor(color);
    setColorModalShow(true);
  };

  const showSelectColorStyle = (color: string) => {
    switch (color) {
      case "textColor":
        return (
          <SketchPickerWrapper>
            <SketchPicker
              color={orderStyleData.textColor}
              onChangeComplete={getTextColorOption}
              presetColors={COLOR_PALETTE}
              width="300px"
            />
          </SketchPickerWrapper>
        );
      case "borderColor":
        return (
          <SketchPickerWrapper>
            <SketchPicker
              color={orderStyleData.borderColor}
              onChangeComplete={getBorderColorOption}
              presetColors={COLOR_PALETTE}
              width="300px"
            />
          </SketchPickerWrapper>
        );
      case "backgroundColor":
        return (
          <SketchPickerWrapper>
            <SketchPicker
              color={orderStyleData.backgroundColor}
              onChangeComplete={getBackgroundColorOption}
              presetColors={COLOR_PALETTE}
              width="300px"
            />
          </SketchPickerWrapper>
        );
      case "shadowColor":
        return (
          <SketchPickerWrapper>
            <SketchPicker
              color={orderStyleData.shadowColor}
              onChangeComplete={getShadowColorOption}
              presetColors={COLOR_PALETTE}
              width="300px"
            />
          </SketchPickerWrapper>
        );
      default:
        return;
    }
  };

  const checkIsTrasparent = (color: string) => {
    return color === "transparent";
  };

  const showSelectColorBox = (color: string) => {
    switch (color) {
      case "textColor":
        return (
          <>
            <TextColorIc />
            {checkIsTrasparent(orderStyleData.textColor) ? (
              <EmptyColorIc />
            ) : (
              <S.ColorPreview color={orderStyleData.textColor} />
            )}
          </>
        );
      case "borderColor":
        return (
          <>
            <BorderColorIc />
            {checkIsTrasparent(orderStyleData.borderColor) ? (
              <EmptyColorIc />
            ) : (
              <S.ColorPreview color={orderStyleData.borderColor} />
            )}
          </>
        );
      case "backgroundColor":
        return (
          <>
            <BackgroundColorIc />
            {checkIsTrasparent(orderStyleData.backgroundColor) ? (
              <EmptyColorIc />
            ) : (
              <S.ColorPreview color={orderStyleData.backgroundColor} />
            )}
          </>
        );
      case "shadowColor":
        return (
          <>
            <ShadowColorIc />
            {checkIsTrasparent(orderStyleData.shadowColor) ? (
              <EmptyColorIc />
            ) : (
              <S.ColorPreview color={orderStyleData.shadowColor} />
            )}
          </>
        );
      default:
        return;
    }
  };

  const checkOpenedFontToggle = () => {
    setOpenedFontToggle(!openedFontToggle);
  };

  const checkOpenedSizeToggle = () => {
    setOpenedSizeToggle(!openedSizeToggle);
  };

  return (
    <>
      <StepPageLayout
        num={1}
        title="자막 스타일을 직접 선택해주세요."
        sub="왼쪽 미리보기 화면에서 디자인을 확인하세요 :)">
        <S.SelectBoxContainer>
          <S.SelectBoxWrapper>
            <S.SelectedBox isSelectFont={true} onClick={checkOpenedFontToggle}>
              {orderStyleData.font}
              <S.OrderStyleToggleIcon />
            </S.SelectedBox>
            {openedFontToggle && (
              <S.BoxWrapper isSelectFont={true}>
                {FONT?.map(({ id, fontFamily, fontName }) => (
                  <S.Box
                    key={id}
                    onClick={() => getFontOption(fontFamily)}
                    fontFamily={fontFamily}
                    $isClicked={fontFamily === orderStyleData.font}>
                    {fontName}
                  </S.Box>
                ))}
              </S.BoxWrapper>
            )}
          </S.SelectBoxWrapper>
          <S.SelectBoxWrapper>
            <S.SelectedBox isSelectFont={false} onClick={checkOpenedSizeToggle}>
              {orderStyleData.size}
              <S.OrderStyleToggleIcon />
            </S.SelectedBox>
            {openedSizeToggle && (
              <S.BoxWrapper isSelectFont={false}>
                {SIZE?.map(({ id, size }) => (
                  <S.Box
                    key={id}
                    onClick={() => getSizeOption(size)}
                    fontFamily="Pretendard"
                    $isClicked={size === orderStyleData.size}>
                    {size}
                  </S.Box>
                ))}
              </S.BoxWrapper>
            )}
          </S.SelectBoxWrapper>
          <S.SelectBoxWrapper>
            <S.ColorBoxWrapper>
              {SELECT_COLOR.map(({ id, color }) => (
                <S.ColorBox key={id} onClick={() => handleSelectColorStyle(color)}>
                  {showSelectColorBox(color)}
                </S.ColorBox>
              ))}
            </S.ColorBoxWrapper>
            {SELECT_COLOR.map(({ id, color }) => (
              <section key={id}>
                <>
                  {checkIsSelected(color) && colorModalShow && (
                    <S.SketchPickerWrapper>{showSelectColorStyle(color)}</S.SketchPickerWrapper>
                  )}
                </>
              </section>
            ))}
          </S.SelectBoxWrapper>
        </S.SelectBoxContainer>
      </StepPageLayout>
    </>
  );
}

const SketchPickerWrapper = styled.section`
  cursor: pointer;
`;
