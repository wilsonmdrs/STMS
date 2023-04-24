import React from "react";
import { SearchContainer } from "./styles";
import { useDataContext } from "../../../hooks/useData";
import { Search } from "../../Search";

interface Props {
  refetch(): void;
}
export const TagSearch: React.FC<Props> = ({ refetch }) => {
  const { getValues, setValue } = useDataContext();
  const searchTerm = getValues("searchTerm") ?? 1;

  return (
    <SearchContainer>
      <Search
        value={searchTerm}
        placeholder="Search tag..."
        onChange={(e) => setValue("searchTerm", e.target.value.toUpperCase())}
        onClick={refetch}
        onKeyDown={(event) => event.code === "Enter" && refetch()}
      />
    </SearchContainer>
  );
};
