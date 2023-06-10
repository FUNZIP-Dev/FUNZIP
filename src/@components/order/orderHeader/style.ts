import { styled } from "styled-components";

export const StepContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 590px;
  height: 80px;

  margin-top: 66px;
`;

export const StepTextContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 700px;

  margin-top: 20px;
`;

export const StepWrapper = styled.article<{ active: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: ${({ active }) => !active && 10}px;
`;

export const Line = styled.div`
  position: absolute;
  z-index: -1;

  width: 490px;
  margin-top: 208px;

  border-bottom: 2px dashed ${({ theme }) => theme.colors.gray6};
`;

export const Text = styled.p<{ width: number; active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: ${({ width }) => width}px;
  height: 32px;

  margin-top: 10px;
  margin-bottom: ${({ active }) => !active && 10}px;

  border-bottom: 4px solid ${({ theme, active }) => (active ? theme.colors.gray5 : "transparent")};

  color: ${({ theme, active }) => (active ? theme.colors.gray5 : theme.colors.gray4)};
  ${({ theme, active }) => (active ? theme.fonts.extra_bold : theme.fonts.bold)};
`;
