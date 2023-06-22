import React from 'react'
import * as S from "./style";


interface CouponProps {
    percent: number;
    startDate: string;
    endDate: string;
    content : string;
  }

export const CouponCard: React.FC<CouponProps> = ({ percent,content,startDate,endDate }) => {

  return (
    <>
        <S.CouponContainerWrapper>
            <S.CouponHeader>
                {percent}% <span style={{fontSize:"30px"}}>할인</span>

            </S.CouponHeader>

            <S.CouponContent>
            {content}
            </S.CouponContent>
            <S.CouponDate>
                {startDate} ~ {endDate}
            </S.CouponDate>
            
        </S.CouponContainerWrapper>

    
    </>
  )
}

