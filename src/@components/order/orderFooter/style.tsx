import { styled } from "styled-components";

export const ButtonWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  position: absolute;
  width: 1392px;
  bottom: 44px;
`;

export const PreviousButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray7};

  width: 209px;
  height: 128px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 64px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub2};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.sub2};
    border: 2px solid ${({ theme }) => theme.colors.primary2};
  }
`;

export const NextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.colors.gray7};

  width: 209px;
  height: 128px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 64px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.sub1};
  }

  &:active {
    background-color: ${({ theme }) => theme.colors.sub1};
    border: 2px solid ${({ theme }) => theme.colors.primary1};
  }
`;
