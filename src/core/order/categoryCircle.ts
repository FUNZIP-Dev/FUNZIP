interface CategoryType {
  id: number;
  text: string;
  size: number;
  marginTop: number;
  marginLeft: number;
}

export const CATEGORY_LIST: CategoryType[] = [
  { id: 1, text: "예능 / \n엔터테인먼트", size: 169, marginTop: 520, marginLeft: 16 },
  { id: 2, text: "ASMR", size: 139, marginTop: 424, marginLeft: 185 },
  { id: 3, text: "뷰티", size: 102, marginTop: 433, marginLeft: 385 },
  { id: 4, text: "여행\n브이로그", size: 169, marginTop: 492, marginLeft: 519 },
  { id: 5, text: "경제", size: 63, marginTop: 717, marginLeft: 0 },
  { id: 6, text: "교육", size: 102, marginTop: 717, marginLeft: 127 },
  { id: 7, text: "일상\n브이로그", size: 224, marginTop: 577, marginLeft: 258 },
  { id: 8, text: "게임", size: 139, marginTop: 732, marginLeft: 534 },
  { id: 9, text: "홍보", size: 63, marginTop: 669, marginLeft: 667 },
  { id: 10, text: "음식 / 먹방", size: 136, marginTop: 810, marginLeft: 16 },
  { id: 11, text: "취미 / 펫", size: 169, marginTop: 834, marginLeft: 197 },
  { id: 12, text: "음악", size: 117, marginTop: 829, marginLeft: 402 },
  { id: 13, text: "운동", size: 63, marginTop: 908, marginLeft: 564 },
];
