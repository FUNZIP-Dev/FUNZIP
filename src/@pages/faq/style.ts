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

export const CategoryTitleBox = styled.div`
  display: flex;
  width: 1180px;
  height: 45px;

  border-top: 2px solid #040a04;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #040a04;

  padding: 24px 150px;
  margin: 46px 0 24px 0;
`;

export const CategoryTitle = styled.div<{ width: number; paddingLeft: number }>`
  width: ${({ width }) => width}px;

  padding-left: ${({ paddingLeft }) => paddingLeft}px;
`;

export const QBox = styled.div`
  display: flex;
  align-items: center;

  width: 1180px;
  height: 85px;

  border-top: 2px solid #f0f0f0;
`;

export const Q = styled.h1`
  display: flex;
  justify-content: center;

  width: 115px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 100%;

  color: #000000;
`;

export const Category = styled.div`
  display: flex;
  justify-content: center;

  width: 210px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;

export const Title = styled.h1`
  display: flex;

  width: 820px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;

  color: #000000;
`;

export const Comment = styled.div`
  width: 1180px;
  height: 187px;

  background: #f8f8fa;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);

  padding: 31px 31px 31px 330px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 130%;

  color: #000000;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 830px;

  cursor: pointer;
`;
