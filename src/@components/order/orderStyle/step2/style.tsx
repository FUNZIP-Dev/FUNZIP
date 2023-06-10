import { styled } from "styled-components";

export const Title = styled.h1`
  margin-bottom: 15px;

  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.option_content};
`;

export const Step2Wrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MoodBox = styled.button<{ $isSelected: boolean }>`
  width: 200px;
  height: 56px;
  margin: 32px 17px 0 0;

  border: 2px solid ${({ $isSelected, theme }) => ($isSelected ? theme.colors.primary1 : theme.colors.gray2)};
  border-radius: 28px;

  background-color: ${({ $isSelected, theme }) => ($isSelected ? theme.colors.sub1 : theme.colors.gray1)};
`;

export const MoodBoxWrapper = styled.section`
  display: flex;
`;
