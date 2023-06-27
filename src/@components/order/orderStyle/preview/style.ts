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
  /* display: flex;
  justify-content: center;
  align-items: center; */

  position: absolute;

  margin-top: 210px;
  padding: 2px 13px;

  font-family: ${({ orderStyleData }) => orderStyleData.font};
  font-size: ${({ orderStyleData }) => orderStyleData.size}px;
  color: ${({ orderStyleData }) => orderStyleData.textColor};
  text-shadow: -1px 0px ${({ orderStyleData }) => orderStyleData.borderColor},
    0px 1px ${({ orderStyleData }) => orderStyleData.borderColor},
    1px 0px ${({ orderStyleData }) => orderStyleData.borderColor},
    0px -1px ${({ orderStyleData }) => orderStyleData.borderColor}!important;
  background-color: ${({ orderStyleData }) => orderStyleData.backgroundColor};
  text-shadow: 2px 2px 2px ${({ orderStyleData }) => orderStyleData.shadowColor};
`;
