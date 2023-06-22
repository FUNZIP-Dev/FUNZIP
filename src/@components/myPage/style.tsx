import { styled } from "styled-components";

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