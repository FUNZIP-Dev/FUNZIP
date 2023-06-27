import { styled } from "styled-components";

export const LinkInput = styled.input`
  width: 636px;
  height: 59px;

  padding: 22px 32px;
  margin-top: 32px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;
`;
