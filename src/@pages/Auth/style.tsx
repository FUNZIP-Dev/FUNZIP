import { styled } from "styled-components";

export const AuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding-top: 100px;
`;

export const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    

    
`

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
    padding-left: 31px;
    font-size: 18px;
    color: #AEAFB9;
    border-radius: 24px;
    background: #F8F8FA;
    border-radius: 24px;
    &:focus {
    border: 2px solid #FF5D47;
    
}
`

export const AuthButtonWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const AuthButton = styled.button`
    display: flex;
    /* Orange */
    padding: 30px;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: center; /* 수직 가운데 정렬 */

    background: #FF5D47;
    /* orange */
    width: 562px;
    height: 75px;
    font-weight: 700;
    font-size: 24px;
    color : #ffffff;
    box-shadow: 0px 1px 10px rgba(255, 93, 71, 0.7);
    border-radius: 44px;
    margin-bottom: 41px;
    `
export const AuthSignUpButton = styled.button`
    display: flex;
    /* Orange */
    padding: 30px;
    justify-content: center; /* 수평 가운데 정렬 */
    align-items: cente    r; /* 수직 가운데 정렬 */
    width: 562px;
    height: 75px;
    font-weight: 700;
    font-size: 24px;
    color : #606067;
`