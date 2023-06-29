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

export const TextWrapper = styled.section`
  position: absolute;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 400px;
  height: 230px;
`;

export const Text = styled.p<{ orderStyleData: orderStyleDataType }>`
  display: flex;
  /* align-items: flex-end; */
  justify-content: center;

  position: absolute;

  max-width: 400px;

  padding: 2px 13px;

  ${({ theme, orderStyleData }) => orderStyleData.font === "Pretendard Bold" && theme.fonts.PretendardBold};
  ${({ theme, orderStyleData }) => orderStyleData.font === "Pretendard Medium" && theme.fonts.PretendardMedium};
  ${({ theme, orderStyleData }) => orderStyleData.font === "G마켓산스 Medium" && theme.fonts.GmarketSansMedium};

  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 1" && theme.fonts.SCoreDream1};
  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 2" && theme.fonts.SCoreDream2};
  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 3" && theme.fonts.SCoreDream3};
  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 4" && theme.fonts.SCoreDream4};
  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 5" && theme.fonts.SCoreDream5};
  ${({ theme, orderStyleData }) => orderStyleData.font === "에스코어 드림 6" && theme.fonts.SCoreDream6};

  ${({ theme, orderStyleData }) => orderStyleData.font === "KCC 은영체" && theme.fonts.KCCEunyoung};

  font-size: ${({ orderStyleData }) => orderStyleData.size}px;
  color: ${({ orderStyleData }) => orderStyleData.textColor};
  -webkit-text-stroke: 1px ${({ orderStyleData }) => orderStyleData.borderColor};
  background-color: ${({ orderStyleData }) => orderStyleData.backgroundColor};
  text-shadow: 2px 2px 2px ${({ orderStyleData }) => orderStyleData.shadowColor};
`;
