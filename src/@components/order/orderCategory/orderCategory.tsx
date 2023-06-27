import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { CATEGORY_LIST } from "../../../core/order/categoryCircle";
import { moveNextPage } from "../../../recoil/order/moveNextPage";
import { selectCategory } from "../../../recoil/order/selectCatogry";
import * as S from "./style";

export default function OrderCategory() {
  const [clickText, setClickText] = useRecoilState<string>(selectCategory);
  const [isNext, setIsNext] = useRecoilState(moveNextPage);

  useEffect(() => {
    clickText === "" ? setIsNext(false) : setIsNext(true);
  }, []);

  const handleSelectCategory = (text: string) => {
    setClickText(text);
    setIsNext(true);
    //text를 저장하는 로직 필요
  };

  const checkIsClickText = (text: string) => {
    return clickText === text;
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
            onClick={() => handleSelectCategory(text)}
            $isClick={checkIsClickText(text)}>
            {text}
          </S.Circle>
        ))}
      </S.CircleWrapper>
    </S.OrderCategoryWrapper>
  );
}
