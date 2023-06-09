import { styled } from "styled-components";

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.tutorial_sub};
`;

export const UserName = styled.p`
  ${({ theme }) => theme.fonts.user};
`;
