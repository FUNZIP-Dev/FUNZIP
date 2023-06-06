import { CATEGORY_LIST } from "../../../core/order/categoryCircle";
import * as S from "./style";

export default function OrderCategory() {
  return (
    <S.OrderCategoryWrapper>
      <S.Title>어떤 영상편집이 필요한가요?</S.Title>
      <S.CircleWrapper>
        {CATEGORY_LIST.map(({ id, text, size, marginLeft, marginTop }) => (
          <S.Circle key={id} size={size} marginLeft={marginLeft} marginTop={marginTop}>
            {text}
          </S.Circle>
        ))}
      </S.CircleWrapper>
    </S.OrderCategoryWrapper>
  );
}
