import { useRecoilState } from "recoil";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step3() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  const handleInputLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, link: e.target.value });
  };

  return (
    <StepPageLayout
      num={3}
      title="참고할 만한 영상 링크를 업로드해주세요."
      sub="소비자님들에게 조금 더 취향에 맞는 편집을 해드릴게요">
      <S.LinkInput
        type="text"
        placeholder="링크 복사 후 붙여넣기 해주세요"
        onChange={handleInputLink}
        value={orderStyleData.link}
      />
    </StepPageLayout>
  );
}
