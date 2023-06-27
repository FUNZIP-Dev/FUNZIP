import React from 'react'
import StaffNav from '../../@components/common/nav/staffNav'
import * as S from "./style";

export default function Staff() {
  return (
    <>
    <StaffNav/>



    <S.StaffMainWrapper>

      <S.StaffEditWrapper>
        {/* 편집 현황 카운팅 박스 */}
        
        <S.StaffEditContainer isOn={true}>
          <S.StaffEditContainerTitle>
            편집 대기
          </S.StaffEditContainerTitle>
          <S.StaffEditContainerNum>
            0건
          </S.StaffEditContainerNum>
        </S.StaffEditContainer>
        <S.StaffEditContainer isOn={false}>
          <S.StaffEditContainerTitle>
            편집 중
          </S.StaffEditContainerTitle>
          <S.StaffEditContainerNum>
            4건
          </S.StaffEditContainerNum>
        </S.StaffEditContainer>
      </S.StaffEditWrapper>





    </S.StaffMainWrapper>
    
    {/* 편집 요청 페이지 */}

    
    </>
  )
}
