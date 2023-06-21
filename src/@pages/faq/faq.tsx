import { useState } from "react";
import Nav from "../../@components/common/nav/nav";
import { FaqToggleIc, FaqToggleOpenIc } from "../../assets";
import { FAQ_CATEGORY, FAQ_DATA } from "../../core/faq/faqData";
import * as S from "./style";

export default function Faq() {
  const [isOpenId, setIsOpenId] = useState(-1);
  const [data, setData] = useState(FAQ_DATA);

  const handleToggleOpen = (id: number) => {
    if (checkisOpenIdSame(id)) {
      setIsOpenId(-1);
    } else {
      setIsOpenId(id);
    }
  };

  const checkisOpenIdSame = (id: number) => {
    return isOpenId === id;
  };

  const handleSelectCateg = (categ: string) => {
    if (categ !== "전체") {
      const newData = [...FAQ_DATA];
      setData(newData.filter(({ category }) => category === categ));
    } else {
      setData(FAQ_DATA);
    }
  };

  return (
    <S.OrderTutorialWrapper>
      <Nav />
      <S.FaqRepresentativeIcon />
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.Input type="text" placeholder="궁금한 점을 검색해보세요" />
      <S.CategoryBoxWrapper>
        {FAQ_CATEGORY.map((categ) => (
          <S.CategoryBox onClick={() => handleSelectCateg(categ)}>{categ}</S.CategoryBox>
        ))}
      </S.CategoryBoxWrapper>
      <S.CategoryTitleBox>
        <S.CategoryTitle width={210} paddingLeft={40}>
          카테고리
        </S.CategoryTitle>
        <S.CategoryTitle width={820} paddingLeft={90}>
          질문내용
        </S.CategoryTitle>
      </S.CategoryTitleBox>
      {data.map(({ faqId, category, title, comment }) => (
        <>
          <S.QBox key={faqId}>
            <S.Q>Q</S.Q>
            <S.Category>{category}</S.Category>
            <S.TitleWrapper onClick={() => handleToggleOpen(faqId)}>
              <S.Title>{title}</S.Title>
              {checkisOpenIdSame(faqId) ? <FaqToggleOpenIc /> : <FaqToggleIc />}
            </S.TitleWrapper>
          </S.QBox>
          {checkisOpenIdSame(faqId) && <S.Comment>{comment}</S.Comment>}
        </>
      ))}
    </S.OrderTutorialWrapper>
  );
}
