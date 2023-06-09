import styled from "styled-components";

export const Title = styled.h1`
  margin-top: 32px;

  ${({ theme }) => theme.fonts.tutorial_head}
`;

export const Sub = styled.h1`
  display: flex;

  margin-top: 16px;
  margin-bottom: 24px;

  ${({ theme }) => theme.fonts.tutorial_sub};
`;

export const Strong = styled.p`
  ${({ theme }) => theme.fonts.tutorial_strong}
`;

export const Content = styled.p`
  display: flex;
  justify-content: center;

  width: 315px;

  ${({ theme }) => theme.fonts.tutorial_text}
`;

export const Button = styled.button<{ $isBlack: boolean }>`
  width: 260px;
  height: 64px;

  border-radius: 44px;

  color: ${({ $isBlack, theme }) => (!$isBlack ? theme.colors.black : theme.colors.white)};
  background-color: ${({ $isBlack, theme }) => ($isBlack ? theme.colors.black : theme.colors.white)};
  ${({ theme }) => theme.fonts.tutorial_strong}
`;

export const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;

  margin-top: 64px;
`;

export const OrderPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 334px;
  height: 488px;

  margin-top: 145px;
`;
