import styled from "styled-components";
import { Input } from '../Input'
const shadow = `
    -webkit-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
    -moz-box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.16);
`;

export const Container = styled.span`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SearchInput = styled(Input)`
  width: 80%;
  height: 40px;
  border: 1px solid ${(props) => props.theme.gray_border};
  border-right: 0px;
  border-radius: 15px 0 0 15px;
  ${shadow}
`;

export const Button = styled.button`
  height: 40px;
  padding: 0 7px 0 7px;
  box-sizing: border-box;
  border-radius: 0 15px 15px 0;
  background-color: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  cursor: pointer;
  ${shadow}
`;
