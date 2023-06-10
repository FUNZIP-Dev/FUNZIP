import { styled } from "styled-components";

export const SelectedOptionWraper = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 480px;
  height: 226px;
  padding: 0 24px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  width: 430px;
  height: 50px;
  padding: 0 15px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};

  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.tutorial_sub};
`;

export const UserName = styled.p`
  margin-right: 5px;

  ${({ theme }) => theme.fonts.user};
`;

export const Sub = styled.p`
  color: ${({ theme }) => theme.colors.gray5};
  ${({ theme }) => theme.fonts.option_content};
`;

export const Tags = styled.li`
  display: flex;
  align-items: center;

  height: 50px;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 32px;
  padding: 4px 18px;
  margin: 0 4px;

  color: ${({ theme }) => theme.colors.gray5};
  background-color: ${({ theme }) => theme.colors.gray1};

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 20px;
`;

export const TitleTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 10px;
`;

export const TagsWrapper = styled.div`
  display: flex;

  margin: 12px 0 0 -100px;
`;
