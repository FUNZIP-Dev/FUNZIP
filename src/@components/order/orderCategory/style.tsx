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

export const Circle = styled.article<{ size: number; marginLeft: number; marginTop: number }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin-left: ${({ marginLeft }) => marginLeft}px;
  margin-top: ${({ marginTop }) => marginTop}px;

  border: 1px solid ${({ theme }) => theme.colors.gray3};
  background-color: ${({ theme }) => theme.colors.gray1};
  border-radius: 50%;
`;

export const CircleWrapper = styled.section`
  margin-top: -382px;
  margin-left: -730px;
`;
