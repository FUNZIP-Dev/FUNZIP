import Nav from "../../@components/common/nav/nav";
import { FAQ_CATEGORY } from "../../core/faq/faqData";
import * as S from "./style";

export default function Faq() {
  return (
    <S.OrderTutorialWrapper>
      <Nav />
      <S.FaqRepresentativeIcon />
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.Input type="text" placeholder="궁금한 점을 검색해보세요" />
      <S.CategoryBoxWrapper>
        {FAQ_CATEGORY.map((categ) => (
          <S.CategoryBox>{categ}</S.CategoryBox>
        ))}
      </S.CategoryBoxWrapper>
      {/* {FAQ_DATA.map(()=>())} FAQ_CATEGORY */}
    </S.OrderTutorialWrapper>
  );
}
