import React from "react";
import { SearchContainer } from "./styles";
import { useDataContext } from "../../../hooks/useData";
import { useQueryClient } from "react-query";
import { Search } from "../../Search";

interface Props {
    refetch():void
}
export const TagSearch:React.FC <Props> = ({refetch}) => {
  const queryClient = useQueryClient()
    
    const { getValues, setValue } = useDataContext()
    const searchTerm = getValues('searchTerm') ?? 1 
    const currentPage = getValues('page') ?? 1 
    
    return (
        <SearchContainer>
        <Search
          value={searchTerm}
          onChange={(e) => setValue('searchTerm', e.target.value)}
          onClick={refetch}
          onKeyDown={(event) => event.code === "Enter" && refetch()}
        />
      </SearchContainer>
    )
}