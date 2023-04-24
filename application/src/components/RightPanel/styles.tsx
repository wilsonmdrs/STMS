import styled from 'styled-components'
import { Button } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';

export const OptionsContainer = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;
`

interface ResultContainerProps {
    isLoading?:boolean
}

export const ResultContainer = styled.div<ResultContainerProps>`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 10px;
    flex-wrap: wrap;
    gap:10px;
    justify-content: ${props => props?.isLoading ? 'center' : 'flex-start'};
    align-items: ${props => props?.isLoading ? 'center' : 'flex-start'};
    align-content: ${props => props?.isLoading ? 'center' : 'flex-start'};
`


export const AddTagButton = styled(Button)`
    && {
        border-radius: 15px;
        padding: 0 5px;
        display: flex;
        width:150px;
        height: 35px;
        color:${props => props.theme.primary};
        font-weight: bold;
        justify-content: center;
        align-items: center;
        margin: 0;
        background-color: ${props => props.theme.secondary};
        -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
        -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
        box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
        transform: .5s ease-in-out;
        &:hover {
            background-color: ${props => props.theme.primary};
            color:${props => props.theme.white};
            &:first-of-type svg {
              color:${props => props.theme.white};
            }
        }
    }
`

export const PlusIcon = styled(AddIcon)`
    font-weight: bold;
    color:${props => props.theme.primary};
    &:hover {
            color:inherit
        }
`

