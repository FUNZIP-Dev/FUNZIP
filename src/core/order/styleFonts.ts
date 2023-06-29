interface fontType {
  id: number;
  fontFamily: string;
  fontName: string;
}

export const FONT: fontType[] = [
  { id: 1, fontFamily: "Pretendard Medium", fontName: "Pretendard Medium" },
  { id: 2, fontFamily: "Pretendard Bold", fontName: "Pretendard Bold" },
  { id: 3, fontFamily: "G마켓산스 Medium", fontName: "G마켓산스 Medium" },
  { id: 4, fontFamily: "에스코어 드림 1", fontName: "에스코어 드림 1" },
  { id: 5, fontFamily: "에스코어 드림 2", fontName: "에스코어 드림 2" },
  { id: 6, fontFamily: "에스코어 드림 3", fontName: "에스코어 드림 3" },
  { id: 7, fontFamily: "에스코어 드림 4", fontName: "에스코어 드림 4" },
  { id: 8, fontFamily: "에스코어 드림 5", fontName: "에스코어 드림 5" },
  { id: 9, fontFamily: "에스코어 드림 6", fontName: "에스코어 드림 6" },
  { id: 10, fontFamily: "KCC 은영체", fontName: "KCC 은영체" },
];

interface sizeType {
  id: number;
  size: number;
}

export const SIZE: sizeType[] = [
  { id: 1, size: 3 },
  { id: 2, size: 5 },
  { id: 3, size: 7 },
  { id: 4, size: 9 },
  { id: 5, size: 10 },
  { id: 6, size: 11 },
  { id: 7, size: 13 },
  { id: 8, size: 15 },
  { id: 9, size: 17 },
  { id: 10, size: 20 },
  { id: 11, size: 25 },
];
