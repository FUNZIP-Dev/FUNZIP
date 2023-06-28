import { styled } from "styled-components";
import { orderStyleDataType } from "../../../../type/order/orderStyleData";

export const PreviewWrapper = styled.section`
  display: flex;
  justify-content: center;
`;

export const PreviewImg = styled.img`
  width: 480px;
  height: 249px;

  margin-bottom: 16px;
`;

export const Text = styled.p<{ orderStyleData: orderStyleDataType }>`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;

  position: absolute;

  width: 400px;
  bottom: 340px;

  padding: 2px 13px;

  font-family: ${({ orderStyleData }) => orderStyleData.font};
  font-size: ${({ orderStyleData }) => orderStyleData.size}px;
  color: ${({ orderStyleData }) => orderStyleData.textColor};
  -webkit-text-stroke: 1px ${({ orderStyleData }) => orderStyleData.borderColor};
  background-color: ${({ orderStyleData }) => orderStyleData.backgroundColor};
  text-shadow: 2px 2px 2px ${({ orderStyleData }) => orderStyleData.shadowColor};
`;
