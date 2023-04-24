import React from "react";
import { Pagination, PaginationContainer } from "./styles";
import { useDataContext } from "../../../hooks/useData";

interface Props {
  totalPages: number;
}
export const TagPagination: React.FC<Props> = ({ totalPages = 1 }) => {
  const { getValues, setValue } = useDataContext();
  const currentPage = getValues("page") ?? 1;
  const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
    setValue("page", value);
  };
  return (
    <PaginationContainer>
      <Pagination
        count={totalPages}
        shape="rounded"
        page={currentPage}
        onChange={onChangePage}
      />
    </PaginationContainer>
  );
};
