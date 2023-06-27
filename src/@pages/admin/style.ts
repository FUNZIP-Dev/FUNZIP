import { styled } from "styled-components";

interface IStaffEditClick {
    isOn: Boolean;
}

export const StaffMainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 0 20px;
    overflow: auto;
    
`;

export const StaffEditWrapper = styled.div`
    margin-top: 120px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    
    padding-bottom: 64px;
    border-bottom: 2px solid #040A04;
    
`
export const StaffEditContainer = styled.div<IStaffEditClick>`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin : 10px;
    width: 378px;
    height: 106px;
    border-radius: 8px;
    background: #AEAFB9;
    cursor: pointer;

    // props에 따라서 background 색 변경
    
    &:hover {
        background: ${props => (props.isOn ? '#FF5D47' : '#7230FF')};
    }
`
export const StaffEditContainerTitle = styled.h1`
    color: #FFF;
    font-size: 28px;
    font-family: Pretendard;
    font-weight: 700;
`
export const StaffEditContainerNum = styled.h1`
    color: #FFF;
    font-size: 36px;
    font-family: Pretendard;
    font-weight: 700;
`
export const MypageProcessingContentWrapper3 = styled.div`
cursor: pointer;
    padding : 24px 40px 20px 40px;
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 3fr 0.7fr;
    
    border-bottom: 2px solid #F0F0F0;
&:hover {
    background-color: #f5f5f5;
    cursor: pointer;
    > :nth-child(4) {
      color: #FF5D47;
    }
  }
`

export const ProcessName2 = styled.div`
display: flex;
align-items: center;
font-weight: 700;
font-size: 20px;
/* identical to box height, or 20px */
/* black */
color: #282828;
`