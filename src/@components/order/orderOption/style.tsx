import { styled } from "styled-components";

export const OrderOptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 30px;
`;

export const Title = styled.h1`
  margin: 65px 0 46px 0;
  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const BoxWrapper = styled.section`
  display: flex;
`;

export const Box = styled.article<{ isClick: boolean }>`
  display: flex;
  align-items: center;

  width: 380px;
  height: 90px;

  padding-left: 29px;
  margin: 0 10px;

  color: ${({ theme }) => theme.colors.gray5};
  background-color: ${({ isClick, theme }) => (isClick ? theme.colors.sub1 : theme.colors.gray1)};

  border: 2px solid ${({ isClick, theme }) => (isClick ? theme.colors.primary1 : theme.colors.gray2)};

  border-radius: 45px;

  cursor: pointer;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 39px;
`;

export const SubTitle = styled.h6`
  ${({ theme }) => theme.fonts.tutorial_sub}
`;

export const Content = styled.p`
  margin-top: 9px;

  ${({ theme }) => theme.fonts.option_content}
`;
