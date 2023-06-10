import styled from "styled-components";

export const Title = styled.h1`
  margin-bottom: 15px;

  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.option_content};
`;

export const StepWrapper = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
