import { styled } from "styled-components";

export const SketchPickerWrapper = styled.section``;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 46px;
  height: 48px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;

  cursor: pointer;
`;

export const ColorPreview = styled.div<{ color: string }>`
  width: 29px;
  height: 12px;

  border-radius: 4px;

  background-color: ${({ color }) => color};
`;

export const ColorBoxWrapper = styled.section`
  display: flex;
`;
