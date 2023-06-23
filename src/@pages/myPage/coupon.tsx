import React, { useState } from 'react'
import * as S from "./style";
import Nav from '../../@components/common/nav/nav';
import MypageDetailHeader from '../../@components/myPage/mypageDetailHeader';
import { CouponCard } from '../../@components/myPage/couponContainer';
import { Nodata } from '../../@components/myPage/nodata';



export default function Coupon() {
    const [coupon, setCoupon] = useState(
    [
        {
            percent:10,
            content:"첫 회원가입 할인 쿠폰",
            startDate:"2021/10/10",
            endDate:"2021/10/20",
        },
        {
            percent:20,
            content:"첫구매 할인 쿠폰",
            startDate:"2021/10/10",
            endDate:"2021/10/25",
        },
        {
            percent:50,
            content:"으악 할인 쿠폰",
            startDate:"2021/10/10",
            endDate:"2021/10/30",
        },
        {
            percent:50,
            content:"으악 할인 쿠폰",
            startDate:"2021/10/10",
            endDate:"2021/10/30",
        },
        {
            percent:50,
            content:"으악 할인 쿠폰",
            startDate:"2021/10/10",
            endDate:"2021/10/30",
        },
    ]
    )
    
    return (
            <>
                <Nav/>    
                <S.MypageDetailWrapper>
                    <MypageDetailHeader
                        title="쿠폰함"
                    />
            {
            coupon.length > 0 ? (
                <S.CouponWrapper>
                {coupon.map((item, index) => (
                    <CouponCard
                    key={index}
                    percent={item.percent}
                    content={item.content}
                    startDate={item.startDate}
                    endDate={item.endDate}
                    />
                ))}
                </S.CouponWrapper>
            ) : (
                <>
                <Nodata text="보유한 쿠폰이 없습니다." />
                </>
            )
            }

                        
                  
                </S.MypageDetailWrapper>

            </>
        )
}
