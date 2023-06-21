interface fontType {
  id: number;
  fontFamily: string;
  fontName: string;
}

export const FONT: fontType[] = [
  { id: 1, fontFamily: "Pretendard Medium", fontName: "Pretendard Medium" },
  { id: 2, fontFamily: "에스코어 드림 1", fontName: "에스코어 드림 1" },
  { id: 3, fontFamily: "에스코어 드림 2", fontName: "에스코어 드림 2" },
  { id: 4, fontFamily: "에스코어 드림 3", fontName: "에스코어 드림 3" },
  { id: 5, fontFamily: "에스코어 드림 4", fontName: "에스코어 드림 4" },
  { id: 6, fontFamily: "에스코어 드림 5", fontName: "에스코어 드림 5" },
  { id: 7, fontFamily: "에스코어 드림 6", fontName: "에스코어 드림 6" },
];

interface sizeType {
  id: number;
  size: number;
}

export const SIZE: sizeType[] = [
  { id: 1, size: 50 },
  { id: 2, size: 75 },
  { id: 3, size: 90 },
  { id: 4, size: 100 },
  { id: 5, size: 110 },
  { id: 6, size: 125 },
  { id: 7, size: 150 },
  { id: 8, size: 200 },
  { id: 9, size: 250 },
  { id: 10, size: 300 },
];
