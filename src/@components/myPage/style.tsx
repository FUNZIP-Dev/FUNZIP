import { styled } from "styled-components";
import { ErrorLogo } from "../../assets";

export const MainLogoWrapper = styled.div`
    display: flex;
    /* position: absolute; */
    width: 680px;
    height: 302px;
    
    margin: 0 auto;
    margin-bottom: 60px;
    margin-top: 30px;
    
`
export const DetailWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

    margin-top: 32px;
    
`
export const DetailProfileBox = styled.div`
    
    height: 154px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #F8F8FA;
    border-radius: 10px;
    cursor: pointer;
    /* hover background chage*/
    &:hover{
        background-color: #EAEAEA;
    }

    /* 두번째 자식만 */
    &:nth-child(2){
        margin: 0px 20px;
    }
    

`
export const DetailText = styled.h1`
    margin-top: 16px;
    size: 20px;
    font-weight: bold;
`
export const ListHeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    
    padding-bottom: 64px;
    border-bottom: 2px solid #040A04;
    
`

export const ListHeaderText = styled.h1`
    display: flex;
    align-items: center;
    margin : 0 auto;
    font-size: 24px;
    font-weight: 700;  
`

export const NodataWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 65px;
    font-size: 18px;
    font-weight: 500;

`
export const ErrorLogoBox = styled(ErrorLogo)`
margin-bottom : 29px;
`

export const CouponContainerWrapper = styled.div`
    margin-top: 20px;

    display: flex;
    flex-direction: column;
    padding : 28px 0px 20px 36px;
    border-radius: 16px;
    border: 1px solid var(--grey-5, #DEDFE5);
    background: var(--grey-2, #F8F8FA);
    font-family: Pretendard;
    color:#606067;



`

export const CouponHeader = styled.h1`
    color: var(--grey-1, #606067);
    font-size: 40px;
    
    font-weight: 700;
    line-height: 100%;
    margin-bottom: 16px;

`
export const CouponContent = styled.p`
    color: var(--grey-1, #606067);
    /* M 18 */
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 44px;
`

export const CouponDate = styled.p`
    color: var(--grey-3, #AEAFB9);
    /* M 18 */
    font-size: 18px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 100%;

`