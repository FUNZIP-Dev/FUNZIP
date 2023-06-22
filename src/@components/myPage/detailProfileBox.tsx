import { useNavigate } from "react-router-dom";
import { AlertIcon, CouponIcon, SettingIcon } from "../../assets";
import * as S from "./style";

export default function DetailProfileBox() {
    // navigate
    const navigate = useNavigate();
    
  return (
    <S.DetailWrapper>

        <S.DetailProfileBox onClick={()=>{
            navigate("/myPage/orderList")
        }}>
            <AlertIcon/>
            <S.DetailText>
                내 주문 내역
            </S.DetailText>
        </S.DetailProfileBox>

        <S.DetailProfileBox onClick={()=>{
            navigate("/myPage/coupon")
        }}>
            <CouponIcon/>
            <S.DetailText>
                쿠폰함
            </S.DetailText>
        </S.DetailProfileBox>

        <S.DetailProfileBox onClick={()=>{
            navigate("/myPage/setting")
        }}>
            <SettingIcon/>
            <S.DetailText>
                정보 수정
            </S.DetailText>
        </S.DetailProfileBox>

    </S.DetailWrapper>
  )
}
