import { useRecoilState } from "recoil";
import background from "../../../../assets/image/orderStylePreviewImg.png";
import { orderStyle } from "../../../../recoil/order/fontStyle";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";
import * as S from "./style";

export default function Preview() {
  const [orderStyleData, setOrderStyleData] = useRecoilState<orderStyleDataType>(orderStyle);

  return (
    <S.PreviewWrapper>
      <S.Text orderStyleData={orderStyleData}>
        자막 스타일 적용 예시 이미지 입니다! FUNZIP 많은 이용 부탁드려요 :)
      </S.Text>
      <S.PreviewImg src={background} alt="미리보기-배경화면" />
    </S.PreviewWrapper>
  );
}
