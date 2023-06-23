import { styled,keyframes } from "styled-components";

interface Processing {
    isDone: boolean;
  }
interface Status{
    status: number;
} 

// 애니메이션 정의
const fadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOutAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

  
export const MypageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 130vh;
    margin: 0 auto;
    
`

export const MypageProfileWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 60px;
    padding : 0 40px;
`

export const MypageProfileName = styled.h1`
  font-size: 20px;
  font-weight: 600;
  justify-content: start;
`;

export const MypageLogoutText = styled.h1`
    font-size: 18px;
    font-weight: 500;
    color: #AEAFB9;
    cursor: pointer;
`
/* PROCESSING STYLE */

export const MypageProcessingWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const MypageProcessing = styled.div<Processing>`
    display: ${props => (props.isDone ? 'flex' : '')};
    flex-direction: row;
    justify-content: space-between; 

    border: 1px solid #EEEFF3;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.13);
    padding : 26px 40px;
`

// MypageProcessingTitle에 애니메이션 적용
export const MypageProcessingTitle = styled.h1<Processing>`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color: #282828;
    animation: ${({ isDone }) => (isDone ?  fadeInAnimation: fadeOutAnimation)} 0.5s ease-in-out;
`;

// goOrderBtn에 애니메이션 적용
export const goOrderBtn = styled.button<Processing>`
  display: flex;
  width: 260px;
  height: 64px;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  background: #282828;
  border-radius: 44px;
  animation: ${({ isDone }) => (isDone ?  fadeInAnimation: fadeOutAnimation)} 0.5s ease-in-out;
`;
export const MypageProcessingBar = styled.div<Processing>`
    height: 8px;
    display: flex;
    /* grey1 */
    background: ${props => (props.isDone ? '#606067' : '#FF5D47')};

    border-radius: 8px 8px 0px 0px;
`
export const ProgressText = styled.h1<Processing>`
    color: ${props => (props.isDone ? '#282828' : '#FF5D47')};

`

/* 프로세스 진행중일때 */
export const MypageProcessingTitleWrapper = styled.div`
  margin-top: 48px;
    display: grid;
    grid-template-columns: 2fr 2fr 2fr 0.7fr;
`

export const MypageProcessingContentWrapper2 = styled.div`

    padding : 24px 40px 20px 40px;
    display: grid;
    grid-template-columns: 1fr 2fr 3fr 2fr 1.2fr;
    border-bottom: 2px solid #F0F0F0;

`


export const MypageProcessingContentTitle = styled.div`
    font-size: 18px;
    display: flex;
    
    color:#040A04;
    
    margin-bottom: 12px;

`
// MypageProcessingContentContainer에 애니메이션 적용
export const MypageProcessingContentContainer = styled.div<Processing>`
  display: flex;
  flex-direction: column;
  animation: ${({ isDone }) => (isDone ? fadeOutAnimation : fadeInAnimation)} 0.5s ease-in-out;
`;

export const MypageProcessingContentWrapper = styled.div`
display: grid;
grid-template-columns: 2fr 2fr 2fr 0.7fr;
padding: 15px 0;
&:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    > :nth-child(3) {
      color: #FF5D47;
    }
  }


`
export const MypageProcessingSeparator = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea; /* 줄의 스타일 및 색상 설정 */
`;

export const ProcessName = styled.div`
display: flex;
align-items: center;
font-weight: 700;
font-size: 20px;
/* identical to box height, or 20px */
/* black */
color: #282828;
`
export const ProcessDoing = styled.div<Status>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0px;

    text-align: center;
    font-size:16px;
    font-weight: 700;
    



  background: ${({ status }) => {
    switch (status) {
      case 0:
        return '#FFF3F1';
      case 1:
        return '#F1EAFF';
      case 2:
        return '#F8F8FA;';
      default:
        return '#FFF3F1';
    }
  }};
  /* Orange */
  
  border-radius: 20.5px;

  border: ${({ status }) => {
    switch (status) {
      case 0:
        return "2px solid #FF5D47";
      case 1:
        return "2px solid #7230FF";
      case 2:
        return "2px solid #AEAFB9";
      default:
        return "2px solid #FF5D47";
    }
}};

  color: ${({ status }) => {
    switch (status) {
      case 0:
        return '#FF5D47';
      case 1:
        return '#7230FF';
      case 2:
        return '#AEAFB9';
      default:
        return '#AEAFB9';
    }
  }};
`;

export const MypageDetailWrapper = styled.div`
    display: flex;
    flex-direction: column;
    
    width: 80%;
    margin: 0 auto;
    margin-top: 100px;
    height: 100vh;
`

// 쿠폰
export const CouponWrapper = styled.div`
margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* 3개의 컬럼으로 구성 */
    grid-gap: 20px; /* 아이템 사이의 간격 */
`;

// 마이페이지 수정
export const MypageEditWrapper = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Pretendard;
  `
  
export const MypageEditHedaer = styled.h1`
      color: #282828;
      /* B 24 */
      font-size: 24px;
      
      font-weight: 700;
      line-height: 100%;
      margin: 30px 0px 0px 0;
`
export const MypageEditSubHedaer = styled.h2`
      color: #282828;
      /* B 20 */
      font-size: 20px;
      font-weight: 700;
      margin: 50px 0px 20px 0px;
`

export const PasswordResetForm = styled.div`
    display: flex;
    border-radius: 20.5px;
    border: 2px solid var(--grey-3, #AEAFB9);
    width: 154px;
    height: 41px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    color: var(--grey-3, #AEAFB9);
  font-size: 15px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 160%;
  cursor: pointer;
  
    
    `
  
export const Deletebtn = styled.button`
    display: flex;
    width: 260px;
    height: 64px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color: var(--orange, #FF5D47);
    font-size: 15px;
    font-family: Pretendard;
    font-weight: 600;
    line-height: 160%;
    `

export const NowPhoneNum = styled.div`
    
    font-family: Pretendard;
    font-weight: 500;
    margin-bottom: 20px;
`