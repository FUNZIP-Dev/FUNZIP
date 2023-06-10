import { MOOD } from "../../../../core/order/styleMood";
import { OrderStyleStepProps } from "../../../../type/order/orderStypeStepProps";
import * as S from "./style";

export default function Step2(props: OrderStyleStepProps) {
  const { orderStyleData, setOrderStyleData } = props;

  const handleSelectMood = (text: string) => {
    setOrderStyleData((prev) => ({ ...prev, mood: text }));
  };

  const checkIsSelected=(text: string)=>{
    return text====
  }

  return (
    <>
      <S.TitleWrapper>
        <S.Title>STEP 2.</S.Title>
        <S.Title>영상의 분위기를 선택해주세요.</S.Title>
        <S.Sub>컷편집 시, 화면 전환의 템포가 달라질 수 있어요!</S.Sub>
      </S.TitleWrapper>
      <S.MoodBoxWrapper>
        {MOOD?.map(({ id, text }) => (
          <S.MoodBox key={id} onClick={() => handleSelectMood(text)}>
            {text}
          </S.MoodBox>
        ))}
      </S.MoodBoxWrapper>
    </>
  );
}
