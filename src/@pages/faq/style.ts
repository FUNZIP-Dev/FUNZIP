import { styled } from "styled-components";
import { FaqRepresentativeIc } from "../../assets";

export const FaqRepresentativeIcon = styled(FaqRepresentativeIc)`
  margin-top: 65px;
`;

export const OrderTutorialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CategoryBox = styled.button`
  padding: 13px 25px;

  box-sizing: border-box;

  height: 50px;

  background: #f8f8fa;

  border: 2px solid #eeeff3;
  border-radius: 28px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 160%;

  color: #606067;

  margin: 0px 8px;
`;

export const FaqTitle = styled.h1`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 160%;

  color: #282828;
  margin-top: 21px;
`;

export const Input = styled.input`
  width: 468px;
  height: 59px;

  padding: 22px 32px;
  margin-top: 32px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;

  margin-bottom: 38px;
`;

export const CategoryBoxWrapper = styled.section`
  display: flex;
`;
