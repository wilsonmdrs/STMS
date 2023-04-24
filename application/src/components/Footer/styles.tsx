import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 5vh;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.white};
`;
