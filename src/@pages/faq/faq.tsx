import Nav from "../../@components/common/nav/nav";
import { FAQ_CATEGORY } from "../../core/faq/faqData";
import * as S from "./style";

export default function Faq() {
  return (
    <S.OrderTutorialWrapper>
      <Nav />
      <S.FaqRepresentativeIcon />
      <h1>자주 묻는 질문</h1>
      <input type="text" placeholder="궁금한 점을 검색해보세요" />

      {FAQ_CATEGORY.map((categ) => (
        <S.CategoryBox>{categ}</S.CategoryBox>
      ))}
      {/* {FAQ_DATA.map(()=>())} FAQ_CATEGORY */}
    </S.OrderTutorialWrapper>
  );
}
