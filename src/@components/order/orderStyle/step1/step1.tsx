import { ChangeEvent } from "react";
import { FONT } from "../../../../core/order/styleFonts";
import { OrderStyleStepProps } from "../../../../type/order/orderStypeStepProps";
import StepPageLayout from "../stepPageLayout/stepPageLayout";

export default function Step1(props: OrderStyleStepProps) {
  const { orderStyleData, setOrderStyleData } = props;

  const getFontOption = (e: ChangeEvent<HTMLSelectElement>) => {
    setOrderStyleData({ ...orderStyleData, font: e.target.value });
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
      </StepPageLayout>
    </>
  );
}
