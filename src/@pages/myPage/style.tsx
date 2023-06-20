import { styled } from "styled-components";

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
export const MypageProcessing = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid #EEEFF3;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.13);
    padding : 26px 40px;
`

export const MypageProcessingTitle = styled.h1`
    display: flex;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    justify-content: center;
    align-items: center;
    line-height: 100%;
`

export const goOrderBtn = styled.button`
    display: flex;
    width: 260px;
    height: 64px;
    justify-content: center;
    align-items: center;
    size: 20px;
    font-weight: 700;
    color : #ffffff;
    /* black */
    background: #282828;
    border-radius: 44px;
`
export const MypageProcessingBar = styled.div`
    height: 8px;
    display: flex;
    /* grey1 */
    background: #606067;
    border-radius: 8px 8px 0px 0px;
`