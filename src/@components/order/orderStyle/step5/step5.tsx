import { useRecoilState } from "recoil";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step5() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  const handleInputTime = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, time: e.target.value });
  };

  return (
    <StepPageLayout
      num={5}
      title="편집된 영상의 원하시는 영상 길이를 입력해주세요."
      sub="편집이 완료된 영상이 몇 분 길이가 되었으면 하는지 입력해주세요.">
      <S.LinkInput
        type="text"
        placeholder="몇 분인지 분단위로 입력해주세요"
        onChange={handleInputTime}
        value={orderStyleData.time}
      />
    </StepPageLayout>
  );
}
