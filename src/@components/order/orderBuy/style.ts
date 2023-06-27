import { styled } from "styled-components";
import { OrderBuyStyleIconsIc, OrderReceiptIc } from "../../../assets";

export const ReceiptWrapper = styled.section`
  position: absolute;
  width: 734px;
  height: 600px;

  margin-top: 396px;
  padding: 0px 24px;
`;

export const TitleWrapper = styled.header`
  display: flex;
  align-items: center;

  width: 686px;
  height: 50px;
  padding: 24px;

  border-bottom: 2px solid ${({ theme }) => theme.colors.gray2};
`;

export const OrderReceiptIcon = styled(OrderReceiptIc)`
  margin-top: 70px;
`;

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
  margin-left: 16px;
`;

export const Texts = styled.p`
  color: ${({ theme }) => theme.colors.gray5};

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 100%;
`;

export const UserName = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;

  color: #606067;
  margin: -2px 5px 0 0;
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

export const TagsText = styled.li`
  display: flex;
  align-items: flex-start;
  height: 62px;
  padding-top: 7px;
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

  background-color: white;
`;

export const TitleTags = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-right: 10px;
`;

export const TagsWrapper = styled.div`
  display: flex;

  margin: 24px;
`;

export const StyleBox = styled.div`
  display: flex;

  box-sizing: border-box;

  width: 518px;
  height: 61px;
  padding: 12px 18px;

  background: #ffffff;

  border: 2px solid #eeeff3;
  border-radius: 16px;
`;

export const Font = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 100%;

  color: #aeafb9;
`;

export const IconsWrapper = styled.section<{ width: number }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ width }) => width}px;
  height: 27px;
`;

export const ColorPreview = styled.div<{ color: string }>`
  width: 26px;
  height: 12px;

  border-radius: 4px;

  background-color: ${({ color }) => color};
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const OrderBuyStyleIconsIcon = styled(OrderBuyStyleIconsIc)`
  margin: -7px 0 0 7px;
`;

export const Text = styled.article`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;

  color: #282828;
`;

export const FontBox = styled.div<{ width: number }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: ${({ width }) => width}px;
  height: 37px;
`;

export const TotalPriceWrapper = styled.section`
  display: flex;
  justify-content: space-between;

  width: 670px;
  height: 80px;
  background: #ffffff;
  border-radius: 16px;

  padding: 28px 20px;
`;

export const Price = styled.h1`
  width: 137px;
  height: 40px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 100%;
  color: #606067;
`;

export const PriceWrapper = styled.div`
  display: flex;

  margin-top: -10px;
`;

export const Won = styled.p`
  width: 18px;
  height: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 100%;

  color: #aeafb9;

  margin-top: 10px;
`;

export const PriceTitleWrapper = styled.div`
  display: flex;
`;

export const PayNow = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 734px;
  height: 400px;
`;

export const PayNowTitle = styled.p`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 100%;

  color: #606067;

  margin: 39px 0 29px 15px;
`;

export const PayButton = styled.button`
  cursor: pointer;
`;
