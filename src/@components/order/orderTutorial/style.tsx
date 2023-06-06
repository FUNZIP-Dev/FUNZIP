import { styled } from "styled-components";
import { OrderTutorialXIc } from "../../../assets";

export const OrderTutorialWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 505px;
  height: 579px;
  margin-top: 37px;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
`;

export const OrderTutorialXIcon = styled(OrderTutorialXIc)`
  margin: -15px 0 15px 410px;
`;
