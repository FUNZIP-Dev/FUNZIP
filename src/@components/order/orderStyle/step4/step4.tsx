import { useRecoilState } from "recoil";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import StepPageLayout from "../stepPageLayout/stepPageLayout";
import * as S from "./style";

export default function Step4() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  const handleInputDriveLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrderStyleData({ ...orderStyleData, driveLink: e.target.value });
  };

  return (
    <StepPageLayout
      num={4}
      title="편집할 영상 링크를 업로드해주세요."
      sub="편집할 영상을 올린 구글 드라이브 링크를 첨부해주세요.">
      <S.LinkInput
        type="text"
        placeholder="링크 복사 후 붙여넣기 해주세요"
        onChange={handleInputDriveLink}
        value={orderStyleData.driveLink}
      />
    </StepPageLayout>
  );
}
