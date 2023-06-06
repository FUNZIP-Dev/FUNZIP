import { styled } from "styled-components";
import { NavLogoIc } from "../../../assets";

export const NavLogoIcon = styled(NavLogoIc)`
  cursor: pointer;
`;

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 1432px;
  height: 95px;

  padding: 0 150px 0 110px;
  margin-top: 30px;

  border-radius: 48px;
  background-color: ${({ theme }) => theme.colors.black};
`;

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.nav}

  cursor: pointer;
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;

  transform: translate(50, 50);
  object-fit: cover;
  margin: auto;
`;

export const ProfileImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 44px;
  height: 44px;

  border-radius: 50%;

  overflow: hidden;

  cursor: pointer;
`;
