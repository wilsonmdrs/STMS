import React from "react";
import { Container, SearchInput, Button } from "./styles";
import SearchIcon from "@mui/icons-material/Search";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick?(): void;
}

export const Search: React.FC<Props> = ({ onClick, ...props }) => {
  return (
    <Container>
      <SearchInput {...props} />
      <Button onClick={onClick}>
        <SearchIcon htmlColor="#fff" />
      </Button>
    </Container>
  );
};
