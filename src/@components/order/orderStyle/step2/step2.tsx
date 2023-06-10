import { MOOD } from "../../../../core/order/styleMood";
import { OrderStyleStepProps } from "../../../../type/order/orderStypeStepProps";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step2(props: OrderStyleStepProps) {
  const { orderStyleData, setOrderStyleData } = props;

  const handleSelectMood = (text: string) => {
    setOrderStyleData({ ...orderStyleData, mood: text });
  };

  const checkIsSelected = (text: string) => {
    return text === orderStyleData.mood;
  };

  return (
    <StepPageLayout num={2} title="영상의 분위기를 선택해주세요." sub="컷편집 시, 화면 전환의 템포가 달라질 수 있어요!">
      <S.MoodBoxWrapper>
        {MOOD?.map(({ id, text }) => (
          <S.MoodBox key={id} onClick={() => handleSelectMood(text)} $isSelected={checkIsSelected(text)}>
            {text}
          </S.MoodBox>
        ))}
      </S.MoodBoxWrapper>
    </StepPageLayout>
  );
}
