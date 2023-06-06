import { styled } from "styled-components";

export const OrderCategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 75px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const Circle = styled.article<{ size: number; marginLeft: number; marginTop: number; isClick: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop}px;

  color: ${({ isClick, theme }) => (isClick ? theme.colors.white : "rgba(40, 40, 40, 0.8)")};
  border: 1px solid ${({ isClick, theme }) => (isClick ? theme.colors.primary1 : theme.colors.gray3)};
  background-color: ${({ isClick, theme }) => (isClick ? theme.colors.primary1 : theme.colors.gray1)};
  border-radius: 50%;

  ${({ isClick, theme }) => (isClick ? theme.fonts.category_strong : theme.fonts.category_sub)};

  white-space: pre-wrap;
  text-align: center;

  cursor: pointer;
`;

export const CircleWrapper = styled.section`
  margin-top: -382px;
  margin-left: -730px;
`;
