import { ChangeEvent } from "react";
import { FONT, SIZE } from "../../../../core/order/styleFonts";
import { OrderStyleStepProps } from "../../../../type/order/orderStypeStepProps";
import StepPageLayout from "../stepPageLayout/stepPageLayout";

export default function Step1(props: OrderStyleStepProps) {
  const { orderStyleData, setOrderStyleData } = props;

  const getFontOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderStyleData({ ...orderStyleData, font: e.target.value });
  };

  const getSizeOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderStyleData({ ...orderStyleData, size: Number(e.target.value) });
  };

  const getTextColorOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, textColor: e.target.value });
  };

  const getBorderColorOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, borderColor: e.target.value });
  };

  const getBackgroundColorOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, backgroundColor: e.target.value });
  };

  const getShadowColorOption = (e: ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, shadowColor: e.target.value });
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
        <input type="color" name="textColor" onChange={getTextColorOption} />
        <input type="color" name="borderColor" onChange={getBorderColorOption} />
        <input type="color" name="backgroundColor" onChange={getBackgroundColorOption} />
        <input type="color" name="shadowColor" onChange={getShadowColorOption} />
      </StepPageLayout>
    </>
  );
}
