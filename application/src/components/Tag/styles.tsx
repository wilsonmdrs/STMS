import styled from "styled-components"
import { Chip } from '@material-ui/core'

export const TagElement =  styled(Chip)`
    && {
        color: ${props => props.theme.white};
        background-color: ${props =>  props.theme.primary};
        transition: .2s ease-in-out;
        &&:hover {
            transform: scale(1.1);
            filter: brightness(1);
            background-color: ${props => props.theme.primary};
        }
    }
`


export const Circle = styled.span`
    background-color: ${props =>  props.theme.secondary};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    color:  ${props => props.theme.white};
    margin-left: 7px;
    &:hover{
        opacity: 0.8;
    }
`