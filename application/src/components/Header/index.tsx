import React from "react";
import { Container, Title, TitleContainer, ProfileAvatar } from "./styles";
import SellIcon from "@mui/icons-material/Sell";
import ProfileImage from "../../assets/profile-image.jpeg";

export const Header: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <SellIcon />
        <Title>Tag Manager</Title>
      </TitleContainer>
      <ProfileAvatar src={ProfileImage} />
    </Container>
  );
};
