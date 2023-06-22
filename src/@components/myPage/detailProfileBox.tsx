import { AlertIcon, CouponIcon, SettingIcon } from "../../assets";
import * as S from "./style";

export default function DetailProfileBox() {
  return (
    <S.DetailWrapper>

        <S.DetailProfileBox>
            <AlertIcon/>
            <S.DetailText>
                내 주문 내역
            </S.DetailText>
        </S.DetailProfileBox>

        <S.DetailProfileBox>
            <CouponIcon/>
            <S.DetailText>
                쿠폰함
            </S.DetailText>
        </S.DetailProfileBox>

        <S.DetailProfileBox>
            <SettingIcon/>
            <S.DetailText>
                정보 수정
            </S.DetailText>
        </S.DetailProfileBox>

    </S.DetailWrapper>
  )
}
