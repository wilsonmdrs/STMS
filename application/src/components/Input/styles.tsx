import styled from "styled-components";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = styled.input`
    display: flex;
    width: 80%;
    box-sizing: border-box;
    height: 40px;
    max-height: 40px;
    font-size: 1rem;
    padding: 5px 1.5rem;
    border: 1px solid ${(props) => props.theme.gray_border};
    border-radius: 15px;
    &:focus {
      outline: none;
    }
`
