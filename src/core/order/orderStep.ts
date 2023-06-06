export const ORDER_STEP = {
  TUTORIAL: "order tutorial",
  CATEGORY: "order category",
  STYLE: "order style",
  OPTION: "order option",
  BUY: "order buy",
};

interface OrderType {
  id: number;
  text: string;
}

export const ORDER_PROGRESS: OrderType[] = [
  { id: 1, text: "카테고리 선택" },
  { id: 2, text: "스타일 선택" },
  { id: 3, text: "옵션 추가" },
  { id: 4, text: "주문하기" },
];
