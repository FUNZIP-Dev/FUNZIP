interface FaqType {
  faqId: number;
  category: string;
  title: string;
  comment: string;
}

export const FAQ_DATA: FaqType[] = [
  {
    faqId: 1,
    category: "주문",
    title: "편집 요청 후 결과물은 몇일 후 받을 수 있나요?",
    comment: "쇼핑답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
  {
    faqId: 2,
    category: "수정",
    title: "수정하고 싶은 부분이 있는데 어떡하죠?",
    comment:
      "답변내용답곰돌이변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
  {
    faqId: 3,
    category: "주문",
    title: "편집 요청 후 결과물은 몇일 후 받을 수 있나요?",
    comment: "답변내용답변내택배변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
  {
    faqId: 4,
    category: "수정",
    title: "수정하고 싶은 부분이 있는데 어떡하죠?",
    comment:
      "답변내용답변내용답변하하답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
  {
    faqId: 5,
    category: "주문",
    title: "편집대한민국은 몇일 후 받을 수 있나요?",
    comment: "답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
  {
    faqId: 6,
    category: "수정",
    title: "수정공부데 어떡하죠?",
    comment:
      "답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용답변내용",
  },
];

export const FAQ_CATEGORY = ["전체", "주문", "수정"];
