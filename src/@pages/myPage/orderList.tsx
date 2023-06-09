import React, { useState } from 'react'
import * as S from "./style";
import Nav from '../../@components/common/nav/nav'
import MypageDetailHeader from '../../@components/myPage/mypageDetailHeader';
import { ErrorLogo } from '../../assets';
import { Nodata } from '../../@components/myPage/nodata';
import { Link, useNavigate } from 'react-router-dom';


export default function OrderList() {
    const navigate = useNavigate();

    const [order, setOrder] = useState(
        [
        {
          id : 0,
          category: "브이로그",
          date: "2021/10/10  23:00",
          price: "60,000 원",
          status:0
        },
        {
          id : 1,
          category: "코딩",
          date: "2021/10/10  23:00",
          price: "100,000 원",
          status:1
        },
        {
          id : 2,
          category: "으각",
          date: "2021/10/10  23:00",
          price: "90,000 원",
          status:2
        },
        {
          id : 3,
          category: "으각",
          date: "2021/10/10  23:00",
          price: "90,000 원",
          status:3
        }
      ]
      )
  return (
    <>
      <Nav/>
      <S.MypageDetailWrapper>
    
        <MypageDetailHeader 
        title="내 주문 내역"
        />
        <S.MypageProcessingContentWrapper2>
                    <S.MypageProcessingContentTitle>번호</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>카테고리</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>등록 일시</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>결제 정보</S.MypageProcessingContentTitle>
                    <S.MypageProcessingContentTitle>진행 사항</S.MypageProcessingContentTitle>
        </S.MypageProcessingContentWrapper2>
        

        
        
        {order.length > 0 ? (
            order.map((item, index) => (
              <S.MypageProcessingContentWrapper2 key={index} onClick={()=>{navigate(`/mypage/orderList/${item.id}`)}}>
                    <S.ProcessName>{order.length-index}</S.ProcessName>
                    <S.ProcessName>{item.category}</S.ProcessName>
                    <S.ProcessName>{item.date}</S.ProcessName>
                    <S.ProcessName>{item.price}</S.ProcessName>
                    <S.ProcessDoing status={item.status}>
                        {item.status === 0 ? "편집 대기" : (item.status === 1 ? "편집 중": (item.status===2 ? "편집완료" : "편집 취소"))}
                    </S.ProcessDoing>
                </S.MypageProcessingContentWrapper2>
            ))
            ) : (
            <>
                <Nodata
                text="주문 내역이 없습니다."
                />
                <S.goOrderBtn onClick={()=>{
                    navigate("/order")
                }} isDone={true} style={{margin:"80px auto 0px auto"}}>주문하러 가기</S.goOrderBtn>
                </>
            
        )}
         
        


    
        </S.MypageDetailWrapper>
    </>
  )
}
