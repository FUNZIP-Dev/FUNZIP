import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import { FaqToggleIc, FaqToggleOpenIc } from "../../assets";
import { FAQ_CATEGORY } from "../../core/faq/faqData";
import * as S from "./style";

export default function Faq() {
  const [isOpenId, setIsOpenId] = useState(-1);
  // const [data, setData] = useState(FAQ_DATA);
  const [fullData, setFullData] = useState<any>();
  const [data, setData] = useState<any>();
  const [selectedCateg, setSelectedCateg] = useState<string>("");

  const handleToggleOpen = (id: number) => {
    if (checkisOpenIdSame(id)) {
      setIsOpenId(-1);
    } else {
      setIsOpenId(id);
    }
  };

  console.log(isOpenId);

  const checkisOpenIdSame = (id: number) => {
    return isOpenId === id;
  };

  const handleSelectCateg = (categ: string) => {
    setSelectedCateg(categ);
    if (categ !== "전체") {
      const newData = [...fullData];
      setData(newData.filter(({ category }) => category === categ));
    } else {
      setData(fullData);
    }
  };

  const checkIsSelected = (categ: string) => {
    return selectedCateg === categ;
  };

  const handleInputText = (e: any) => {
    const input = e.target.value;
    const newData = [...fullData];
    setData(newData.filter(({ title, comment }) => title.includes(input) || comment.includes(input)));
  };

  useEffect(() => {
    const db = getFirestore();
    const faqRef = collection(db, "faq");

    const getFaqData = onSnapshot(faqRef, (snapshot: any) => {
      const faqDatas: any[] = [];
      snapshot.forEach((doc: any) => {
        faqDatas.push({ id: doc.id, ...doc.data() });
      });
      setFullData(faqDatas);
      setData(faqDatas);
    });

    return () => getFaqData();
  }, []);

  return (
    <S.OrderTutorialWrapper>
      <Nav />
      <S.FaqRepresentativeIcon />
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.Input type="text" placeholder="궁금한 점을 검색해보세요" onChange={handleInputText} />
      <S.CategoryBoxWrapper>
        {FAQ_CATEGORY.map((categ) => (
          <S.CategoryBox onClick={() => handleSelectCateg(categ)} $isSelected={checkIsSelected(categ)}>
            {categ}
          </S.CategoryBox>
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
      <S.QBoxWrapper>
        {data?.map(({ id, category, title, comment }: any) => (
          <>
            <S.QBox key={id}>
              <S.Q>Q</S.Q>
              <S.Category>{category}</S.Category>
              <S.TitleWrapper onClick={() => handleToggleOpen(id)}>
                <S.Title>{title}</S.Title>
                {checkisOpenIdSame(id) ? <FaqToggleOpenIc /> : <FaqToggleIc />}
              </S.TitleWrapper>
            </S.QBox>
            {checkisOpenIdSame(id) && <S.Comment>{comment}</S.Comment>}
          </>
        ))}
      </S.QBoxWrapper>
    </S.OrderTutorialWrapper>
  );
}
