import React from "react";
import { FooterContainer, Text } from "./styles";

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <FooterContainer>
      <Text>Developed by Wilson Medeiros - {year}</Text>
    </FooterContainer>
  );
};
