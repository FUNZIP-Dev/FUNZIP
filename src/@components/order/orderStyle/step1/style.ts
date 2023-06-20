import { styled } from "styled-components";
import { OrderStyleToggleIc } from "../../../../assets";

export const SelectBoxContainer = styled.div`
  display: flex;
`;

export const SelectBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 8px;
`;

export const SketchPickerWrapper = styled.section``;

export const ColorBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 46px;
  height: 48px;
  margin: 32px 8px 8px 0px;

  border: 2px solid ${({ theme }) => theme.colors.gray2};
  border-radius: 8px;

  cursor: pointer;
`;

export const ColorPreview = styled.div<{ color: string }>`
  width: 29px;
  height: 12px;

  border-radius: 4px;

  background-color: ${({ color }) => color};
`;

export const ColorBoxWrapper = styled.section`
  display: flex;
`;

export const SelectedBox = styled.div<{ isSelectFont: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: ${({ isSelectFont }) => (isSelectFont ? 298 : 112)}px;
  height: 48px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 160%;

  padding: 11px 24px;
  margin-top: 32px;

  border: 2px solid #eeeff3;
  border-radius: 8px;
`;

export const OrderStyleToggleIcon = styled(OrderStyleToggleIc)`
  cursor: pointer;
`;

export const BoxWrapper = styled.section<{ isSelectFont: boolean }>`
  box-sizing: border-box;

  width: ${({ isSelectFont }) => (isSelectFont ? 298 : 112)}px;
  height: 439px;
  left: 913px;
  top: 556px;

  background-color: #ffffff;

  padding: 8px;
  margin-top: 9px;
  /* grey2 */

  border: 1px solid #f8f8fa;
  box-shadow: 0px 5px 11px rgba(40, 40, 40, 0.3);
  border-radius: 8px;

  overflow: scroll;
`;

export const Box = styled.article<{ fontFamily: string }>`
  width: 270px;
  height: 32px;
  left: 921px;
  top: 564px;

  padding: 5px 16px;

  font-family: ${({ fontFamily }) => fontFamily};

  /* grey2 */

  /* background-color: #f8f8fa; */
`;
