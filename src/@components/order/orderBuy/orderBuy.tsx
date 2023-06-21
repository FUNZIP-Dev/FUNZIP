import { useState } from "react";
import { useRecoilValue } from "recoil";
import { EmptyColorIc, OrderBuyActiveIc, OrderBuyUnActiveIc, OrderReceiptCheckIc } from "../../../assets";
import { USER } from "../../../core/user/user";
import { orderStyle } from "../../../recoil/order/fontStyle";
import { selectOptions } from "../../../recoil/order/selectOptions";
import { orderStyleDataType } from "../../../type/order/orderStyleData";
import { SelectOptionTypes } from "../orderOption/orderOption";
import * as S from "./style";

export default function OrderBuy() {
  const selectOption = useRecoilValue<SelectOptionTypes>(selectOptions);
  const orderStyleData = useRecoilValue<orderStyleDataType>(orderStyle);
  const [isCheckedBuy, setIsCheckedBuy] = useState(false);

  const handleActiveBuy = () => {
    setIsCheckedBuy(!isCheckedBuy);
  };

  const checkIsTransparent = (color: string) => {
    return color === "transparent";
  };

  return (
    <>
      <S.OrderReceiptIcon />
      <S.ReceiptWrapper>
        <S.TitleWrapper>
          <OrderReceiptCheckIc />
          <S.Title>
            <S.UserName>{USER?.name}</S.UserName>
            <S.Texts>님이 선택한 옵션</S.Texts>
          </S.Title>
        </S.TitleWrapper>
        <S.TagsWrapper>
          <S.TitleTags>
            <S.Tags>
              <S.Sub>기본옵션</S.Sub>
            </S.Tags>
            <S.Tags>
              <S.Sub>BGM & SFX</S.Sub>
            </S.Tags>
            <S.Tags>
              <S.Sub>원본 영상 촬영캠</S.Sub>
            </S.Tags>
            <S.TagsText>
              <S.Sub>자막 스타일</S.Sub>
            </S.TagsText>
            <S.Tags>
              <S.Sub>영상 분위기</S.Sub>
            </S.Tags>
            <S.Tags>
              <S.Sub>참고 링크</S.Sub>
            </S.Tags>
          </S.TitleTags>
          <ul>
            <S.Tags>
              {selectOption?.basic?.map((basic) => (
                <S.Tag>{basic}</S.Tag>
              ))}
            </S.Tags>
            <S.Tags>
              {selectOption?.plus?.map((plus) => (
                <S.Tag>{plus}</S.Tag>
              ))}
            </S.Tags>
            <S.Tags>
              <S.Tag>{selectOption?.cam}</S.Tag>
            </S.Tags>
            <S.StyleBox>
              <S.FontBox width={180}>
                <S.Font>폰트종류</S.Font>
                <S.Text>{orderStyleData.font}</S.Text>
              </S.FontBox>
              <S.FontBox width={95}>
                <S.Font>폰트크기</S.Font>
                <S.Text>{orderStyleData.size}</S.Text>
              </S.FontBox>
              <S.IconsContainer>
                <S.IconsWrapper width={191}>
                  <S.OrderBuyStyleIconsIcon />
                </S.IconsWrapper>
                <S.IconsWrapper width={191}>
                  {checkIsTransparent(orderStyleData.textColor) ? (
                    <EmptyColorIc />
                  ) : (
                    <S.ColorPreview color={orderStyleData.textColor} />
                  )}
                  {checkIsTransparent(orderStyleData.borderColor) ? (
                    <EmptyColorIc />
                  ) : (
                    <S.ColorPreview color={orderStyleData.borderColor} />
                  )}
                  {checkIsTransparent(orderStyleData.backgroundColor) ? (
                    <EmptyColorIc />
                  ) : (
                    <S.ColorPreview color={orderStyleData.backgroundColor} />
                  )}
                  {checkIsTransparent(orderStyleData.shadowColor) ? (
                    <EmptyColorIc />
                  ) : (
                    <S.ColorPreview color={orderStyleData.shadowColor} />
                  )}
                </S.IconsWrapper>
              </S.IconsContainer>
            </S.StyleBox>
            <S.Tags>
              <S.Tag>{orderStyleData?.mood}</S.Tag>
            </S.Tags>
            <S.Tags>
              <S.Tag>{orderStyleData?.link}</S.Tag>
            </S.Tags>
          </ul>
        </S.TagsWrapper>
        <S.TotalPriceWrapper>
          <S.PriceTitleWrapper>
            <OrderReceiptCheckIc />
            <S.Title>
              <S.UserName>{USER?.name}</S.UserName>
              <S.Texts>님의 총 견적</S.Texts>
            </S.Title>
          </S.PriceTitleWrapper>
          <S.PriceWrapper>
            <S.Price>6000</S.Price>
            <S.Won>원</S.Won>
          </S.PriceWrapper>
        </S.TotalPriceWrapper>
      </S.ReceiptWrapper>
      <p>바로 결제할게요</p>
      <div onClick={handleActiveBuy}>{isCheckedBuy ? <OrderBuyActiveIc /> : <OrderBuyUnActiveIc />}</div>
    </>
  );
}
