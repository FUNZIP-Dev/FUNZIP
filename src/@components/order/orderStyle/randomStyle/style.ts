import { styled } from "styled-components";

export const RandomStyleBox = styled.section<{ $openToggle: boolean }>`
  width: 637px;
  height: ${({ $openToggle }) => ($openToggle ? 367 : 104)}px;

  padding: 27px 31px;

  margin-bottom: 80px;

  /* grey2 */

  background: #f8f8fa;
  border-radius: 8px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const SubTitle = styled.p`
  /* M 13 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;
  /* identical to box height, or 13px */

  /* black */

  color: #282828;
`;

export const Title = styled.h1`
  /* B 20 */

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  margin-top: 14px;

  /* black */

  color: #282828;
`;

export const TitleWrapper = styled.aside`
  display: flex;
  flex-direction: column;

  width: 241px;
`;

export const ToggleButton = styled.button`
  cursor: pointer;
`;

export const StyleWrapper = styled.section`
  margin-top: 33px;
`;

export const StyleBox = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  width: 590px;
  height: 60px;

  cursor: pointer;
`;
