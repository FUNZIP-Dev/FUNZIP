import { DefaultTheme } from "styled-components";

const colors = {
  primary1: "#FF5D47",
  primary2: "##7230FF",
  sub1: "#FFF3F1",
  sub2: "#F1EAFF",

  white: "#FFFFFF",
  gray1: "#F8F8FA",
  gray2: "#EEEFF3",
  gray3: "#DEDFE5",
  gray4: "#AEAFB9",
  gray5: "#606067",
  black: "#282828",
};

export type ColorsTypes = typeof colors;

interface Font {
  weight: number;
  size: number;
  lineHeight: number;
}

function FONT({ weight, size, lineHeight }: Font): string {
  return `
    font-family: "Pretendard";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
}

const fonts = {
  bold: FONT({ weight: 700, size: 16, lineHeight: 19 }),
  medium: FONT({ weight: 500, size: 16, lineHeight: 19 }),
  regular: FONT({ weight: 400, size: 16, lineHeight: 19 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
