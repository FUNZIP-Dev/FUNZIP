import { styled } from "styled-components";

export const Title = styled.h1`
  margin-bottom: 15px;

  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.option_content};
`;

export const TitleWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const MoodBox = styled.button`
  width: 200px;
  height: 56px;
  margin-right: 17px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 28px;

  background-color: ${({ theme }) => theme.colors.gray1};
`;

export const MoodBoxWrapper = styled.section`
  display: flex;
`;
