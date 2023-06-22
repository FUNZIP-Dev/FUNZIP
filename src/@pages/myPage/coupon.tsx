import React from 'react'
import * as S from "./style";
import Nav from '../../@components/common/nav/nav';
import MypageDetailHeader from '../../@components/myPage/mypageDetailHeader';

export default function Coupon() {
  return (
    <>
          <Nav/>    
          <S.MypageDetailWrapper>
            <MypageDetailHeader
                title="쿠폰함"
            
            />
          </S.MypageDetailWrapper>

    </>
  )
}
