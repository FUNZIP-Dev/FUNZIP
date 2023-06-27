import { collection, getFirestore, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import Nav from "../../@components/common/nav/nav";
import { FaqToggleIc, FaqToggleOpenIc } from "../../assets";
import { FAQ_CATEGORY, FAQ_DATA } from "../../core/faq/faqData";
import * as S from "./style";

export default function Faq() {
  const [isOpenId, setIsOpenId] = useState(-1);
  // const [data, setData] = useState(FAQ_DATA);
  const [data, setData] = useState<any>();

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

  const handleInputText = (e: any) => {
    const input = e.target.value;
    const newData = [...FAQ_DATA];
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
      setData(faqDatas);
    });

    return () => getFaqData();
  }, []);

  // console.log(data);

  return (
    <S.OrderTutorialWrapper>
      <Nav />
      <S.FaqRepresentativeIcon />
      <S.FaqTitle>자주 묻는 질문</S.FaqTitle>
      <S.Input type="text" placeholder="궁금한 점을 검색해보세요" onChange={handleInputText} />
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
