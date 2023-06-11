import { styled } from "styled-components";

export const SketchPickerWrapper = styled.section``;

export const ColorBox = styled.div`
  width: 46px;
  height: 48px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
`;
