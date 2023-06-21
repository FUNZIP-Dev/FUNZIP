import background from "../../../../assets/image/orderStylePreviewImg.png";
import * as S from "./style";

export default function Preview() {
  return (
    <>
      <S.PreviewImg src={background} alt="미리보기-배경화면" />
    </>
  );
}
