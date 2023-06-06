import { styled } from "styled-components";

export const StepWrapper = styled.article`
  display: flex;
`;

export const Line = styled.hr`
  border: 2px dashed ${({ theme }) => theme.colors.gray6};
`;

export const Text = styled.p<{ width: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width}px;
  height: 32px;
`;
