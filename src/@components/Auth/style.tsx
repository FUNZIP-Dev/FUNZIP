import { styled } from "styled-components";


export const AuthInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`

export const AuthInput = styled.input`
    display: flex;
    flex-direction: column;
    margin: 5px;
    width: 557px;
    height: 80px;
    font-weight: 700;
    padding-left: 31px;
    font-size: 18px;
    color: #FF5D47;
    border-radius: 24px;
    background: #F8F8FA;
    border-radius: 24px;
    &:focus {
    border: 2px solid #FF5D47;
    
}
`