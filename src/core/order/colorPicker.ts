export const COLOR_PALETTE: string[] = [
  "#3F5623",
  "#707625",
  "#73591A",
  "#722F10",
  "#781E0E",
  "#4E1629",
  "#3F1256",
  "#102E76",
  "#1E4C63",
  "#000000",
  "#86B953",
  "#DDEB5C",
  "#F4C944",
  "#ED732E",
  "#EB512E",
  "#AA395D",
  "#8C33B6",
  "#285FF4",
  "#479FD3",
  "#5C5C5C",
  "#BADC94",
  "#EBF29B",
  "#F8DA85",
  "#F1A984",
  "#F09286",
  "#DE789D",
  "#C45FF6",
  "#7FA6F8",
  "#78D3F8",
  "#D6D6D6",
  "#E1EDD6",
  "#F7FADE",
  "#FCF1D8",
  "#FAE3D8",
  "#F9DBD9",
  "#F3D4DF",
  "#E9CBFA",
  "#D5E1FB",
  "#D2EFFD",
  "transparent",
];

interface selectColorType {
  id: number;
  color: string;
}

export const SELECT_COLOR: selectColorType[] = [
  { id: 1, color: "textColor" },
  { id: 2, color: "borderColor" },
  { id: 3, color: "backgroundColor" },
  { id: 4, color: "shadowColor" },
];
