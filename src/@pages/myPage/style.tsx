import { styled } from "styled-components";

interface Processing {
    isDone: boolean;
  }

  
export const MypageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 302px;
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

export const MypageProcessingTitle = styled.h1`
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 100%;
    color : #282828;
`

export const goOrderBtn = styled.button`
    display: flex;
    width: 260px;
    height: 64px;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: 700;
    color : #ffffff;
    /* black */
    background: #282828;
    border-radius: 44px;
`
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
    grid-template-columns: 1fr 1fr 1fr;
`


export const MypageProcessingContentTitle = styled.div`
    font-size: 18px;
    display: flex;

`
export const MypageProcessingContentContainer = styled.div`
    display: flex;
    flex-direction: column;
`


export const MypageProcessingContentWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
&:hover {
    background-color: #f5f5f5;
    cursor: pointer;
  }

`
export const MypageProcessingSeparator = styled.hr`
  border: none;
  border-top: 1px solid #eaeaea; /* 줄의 스타일 및 색상 설정 */
  margin: 12px 0px 15px 0px; /* 위아래 여백 설정 */
`;

export const ProcessName = styled.div`


font-weight: 700;
font-size: 20px;
/* identical to box height, or 20px */


/* black */

color: #282828;

`