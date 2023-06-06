import { styled } from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 1432px;
  height: 95px;

  padding: 0 150px 0 110px;
  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.black};
`;
