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
  stepName: string;
}

export const ORDER_PROGRESS: OrderType[] = [
  { id: 1, text: "카테고리 선택", stepName: ORDER_STEP.CATEGORY },
  { id: 2, text: "옵션 선택", stepName: ORDER_STEP.OPTION },
  { id: 3, text: "스타일 선택", stepName: ORDER_STEP.STYLE },
  { id: 4, text: "주문하기", stepName: ORDER_STEP.BUY },
];
