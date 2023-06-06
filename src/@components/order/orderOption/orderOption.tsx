import { OrderOptionCheckIc } from "../../../assets";
import { BASIC_OPTIONS, CAM_OPTIONS, PLUS_OPTIONS } from "../../../core/order/optionList";
import * as S from "./style";

export default function OrderOption() {
  return (
    <S.OrderOptionWrapper>
      <S.Title>기본 옵션</S.Title>
      <S.BoxWrapper>
        {BASIC_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id}>
            <OrderOptionCheckIc />
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
      <S.Title>BGM & SFX</S.Title>
      <S.BoxWrapper>
        {PLUS_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id}>
            <OrderOptionCheckIc />
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
      <S.Title>원본 영상 촬영캠</S.Title>
      <S.BoxWrapper>
        {CAM_OPTIONS.map(({ id, title, content }) => (
          <S.Box key={id}>
            <OrderOptionCheckIc />
            <S.TextWrapper>
              <S.SubTitle>{title}</S.SubTitle>
              <S.Content>{content}</S.Content>
            </S.TextWrapper>
          </S.Box>
        ))}
      </S.BoxWrapper>
    </S.OrderOptionWrapper>
  );
}
