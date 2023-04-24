import styled from 'styled-components'

export interface WrapperProps {
    className?: string;
    display?: string;
    flexDirection?: string;
    alignItems?: string;
    justifyContent?: string;
    width?: string;
    height?: string;
    margin?: string;
    padding?: string;
  }

export const Wrapper = styled.div<WrapperProps>`
    display: ${props => props.display ? props.display : 'flex'};
    width:${props => props.width ? props.width : '100%'};
    height:${props => props.height ? props.height : '100%'};
    flex-direction: ${(props)=>props.flexDirection ? props.flexDirection  : "row"};
    align-items:  ${(props)=>props.alignItems ? props.alignItems  : "flex-start"};
    justify-content:  ${(props)=>props.justifyContent ? props.justifyContent  : "flex-start"};
    padding:  ${(props)=>props.padding ? props.padding  : '.1em'};
    cursor:pointer;
`