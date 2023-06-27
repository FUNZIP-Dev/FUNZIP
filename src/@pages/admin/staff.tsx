import React, { useEffect, useState } from 'react'
import StaffNav from '../../@components/common/nav/staffNav'
import * as S from "./style";
import { MypageProcessingContentTitle,ProcessDoing, ProcessName } from '../myPage/style';
import { useNavigate } from 'react-router-dom';
import { Nodata } from '../../@components/myPage/nodata';

export default function Staff() {
  const navigate = useNavigate();
  const [waitEdit, setWaitEdit] = useState(0);
  const [doingEdit, setDoingEdit] = useState(0);
  const [filter, setFilter] = useState('');

  const [order, setOrder] = useState(
    [
    {
      id : 0,
      category: "브이로그",
      date: "2023/6/27  23:00",
      price: "60,000 원",
      status:0,
      orderName:"서희찬",

    },
    {
      id : 1,
      category: "코딩",
      date: "2023/6/26  23:00",
      price: "100,000 원",
      status:1,
      orderName:"서지수",
    },
    {
      id : 2,
      category: "으각",
      date: "2023/6/25  23:00",
      price: "90,000 원",
      status:2,
      orderName:"구가영",

    },
    {
      id : 3,
      category: "으각",
      date: "2023/6/29  23:00",
      price: "90,000 원",
      status:3,
      orderName:"박현철",
    },
  ]
  );


   // Calculate the number of orders with status 0 (waitEdit) and 1 (doingEdit)
   useEffect(() => {
    const waitEditCount = order.filter((item) => item.status === 0).length;
    const doingEditCount = order.filter((item) => item.status === 1).length;
    setWaitEdit(waitEditCount);
    setDoingEdit(doingEditCount);
  }, []);


    // Function to calculate the duration from the current date for each order
    const getDurationText = (orderDate:any) => {
      const currentDate = new Date();
      const orderDateTime = new Date(orderDate);
      const timeDiff = currentDate.getTime() - orderDateTime.getTime();
      const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return `D+${daysDiff}`; // Modify the format of the duration text as needed
    };


    const handleFilter = (status: string) => {
      setFilter(prevFilter => prevFilter === status ? '' : status);
    };
    


  return (
    <>
    <StaffNav/>



    <S.StaffMainWrapper>

    
        <S.StaffEditWrapper>
          {/* 편집 현황 카운팅 박스 */}
          <S.StaffEditContainer isEdit={false} isOn={filter === 'waitEdit'} onClick={() => handleFilter('waitEdit')}>
  <S.StaffEditContainerTitle>편집 대기</S.StaffEditContainerTitle>
  <S.StaffEditContainerNum>{waitEdit}건</S.StaffEditContainerNum>
</S.StaffEditContainer>
<S.StaffEditContainer isEdit={true} isOn={filter === 'doingEdit'} onClick={() => handleFilter('doingEdit')}>
  <S.StaffEditContainerTitle>편집 중</S.StaffEditContainerTitle>
  <S.StaffEditContainerNum>{doingEdit}건</S.StaffEditContainerNum>
</S.StaffEditContainer>

        </S.StaffEditWrapper>



      <S.MypageProcessingContentWrapper3>
          <MypageProcessingContentTitle>번호</MypageProcessingContentTitle>
          <MypageProcessingContentTitle>주문자</MypageProcessingContentTitle>
          <MypageProcessingContentTitle>카테고리</MypageProcessingContentTitle>
          <MypageProcessingContentTitle>요청 날짜</MypageProcessingContentTitle>
          <MypageProcessingContentTitle style={{justifyContent:"center"}}>진행 상황</MypageProcessingContentTitle>
      </S.MypageProcessingContentWrapper3>

      {order.length > 0 ? (
               order.filter((item) => (filter === 'waitEdit' ? item.status === 0 : filter === 'doingEdit' ? item.status === 1 : true)).map((item, index) => (
               <S.MypageProcessingContentWrapper3 key={index} onClick={()=>{navigate(`/mypage/orderList/${item.id}`)}}>
                    <ProcessName>{order.length-index}</ProcessName>
                    <ProcessName>{item.orderName}</ProcessName>
                    <ProcessName>{item.category}</ProcessName>
                    <ProcessName>{item.date}&nbsp;<p style={{color:"#FF5D47"}}>{getDurationText(item.date)}</p></ProcessName>
                    
                    <ProcessDoing status={item.status}>
                        {item.status === 0 ? "편집 대기" : (item.status === 1 ? "편집 중": (item.status===2 ? "편집완료" : "편집 취소"))}
                    </ProcessDoing>
                </S.MypageProcessingContentWrapper3>
            ))
            ) : (
            <>
                <Nodata
                text="주문 내역이 없습니다."
                />
                </>
            
        )}







    </S.StaffMainWrapper>
    

    {/* 편집 요청 페이지 */}

    
    </>
  )
}
