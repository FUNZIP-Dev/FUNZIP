import React from 'react'
import * as S from "./style";
import Nav from '../../@components/common/nav/nav';
import MypageDetailHeader from '../../@components/myPage/mypageDetailHeader';

export default function Setting() {
  return (
    <>
    <Nav/>    
    <S.MypageDetailWrapper>
      <MypageDetailHeader
          title="정보 수정"
      
      />
    </S.MypageDetailWrapper>

</>
  )
}
