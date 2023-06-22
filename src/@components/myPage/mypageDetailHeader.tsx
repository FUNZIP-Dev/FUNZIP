import React from 'react'
import { BackIcon } from '../../assets'
import * as S from "./style";
import { useNavigate } from 'react-router-dom';


export default function MypageDetailHeader() {
    const navigate = useNavigate();
  return (
    <>
        <S.ListHeaderContainer>
            <BackIcon onClick={()=>{navigate(-1)}}/>
            <S.ListHeaderText>
                내 주문 내역
            </S.ListHeaderText>
        </S.ListHeaderContainer>
    </>
  )
}
