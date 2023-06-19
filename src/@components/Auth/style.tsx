
import styled from 'styled-components';

interface SignUpInputProps {
  isValid: boolean;
}

interface MessageTextProps {
    isValid: boolean;
}

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
export const SignUpInputTitleText = styled.h2`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 35px;
`

export const SignUpInput = styled.input<SignUpInputProps>`
    border: none;
    border-bottom: 2px solid #AEAFB9;
    outline: none;
    padding: 5px;
    ::placeholder{
        color: #AEAFB9;
        
    }
      /* Your styling here */
      border-bottom: ${(props) => (props.isValid ? '1px solid #000000' : '1px solid red')};
    /* Additional styling based on validity */
`;

export const SignUpInputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;

`
export const MessageText = styled.span<MessageTextProps>`
    margin-top: 10px;
    color: ${(props) => (props.isValid ? '#00C24E' : '#FF5D47')};
    font-size: 13px;
`;