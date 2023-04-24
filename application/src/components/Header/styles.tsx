import styled from "styled-components";
import { Avatar } from "@mui/material";

export const Container = styled.header`
  display: flex;
  height: 10vh;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 15px 25px;
  background-color: ${(props) => props.theme.secondary};
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.primary};
`;

export const TitleContainer = styled.span`
  display: flex;
  gap: 10px;
`;

export const ProfileAvatar = styled(Avatar)`
  border: 3px solid ${(props) => props.theme.primary};
`;
