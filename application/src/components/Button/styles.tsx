import styled from "styled-components"

interface Props {
    size?:number
    backgroundColor?:string
    color?:string
}

export const Button = styled.button<Props>`
    width: ${props => props.size ? props.size : 150}px;
    height:35px;
    background-color: ${props => props.backgroundColor ? props.backgroundColor : props.theme.primary};
    cursor:pointer;
    border-radius: 15px;
    border: none;
    color:  ${props => props.color ? props.color : props.theme.white};
`