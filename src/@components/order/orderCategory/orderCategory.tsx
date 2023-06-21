import { useState } from "react";
import { useRecoilState } from "recoil";
import { CATEGORY_LIST } from "../../../core/order/categoryCircle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import * as S from "./style";

export default function OrderCategory() {
  const [clickId, setClickId] = useState<number>(-1);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);

  const handleSelectCategory = (id: number, text: string) => {
    setClickId(id);
    setIsNext(true);
    //text를 저장하는 로직 필요
  };

  const checkIsClickId = (id: number) => {
    return clickId === id;
  };

  return (
    <S.OrderCategoryWrapper>
      <S.Title>어떤 영상편집이 필요한가요?</S.Title>
      <S.CircleWrapper>
        {CATEGORY_LIST.map(({ id, text, size, marginLeft, marginTop }) => (
          <S.Circle
            key={id}
            $size={size}
            $marginLeft={marginLeft}
            $marginTop={marginTop}
            onClick={() => handleSelectCategory(id, text)}
            $isClick={checkIsClickId(id)}>
            {text}
          </S.Circle>
        ))}
      </S.CircleWrapper>
    </S.OrderCategoryWrapper>
  );
}
