import React, { useEffect } from "react";
import { Container } from "../Container";
import CircularProgress from "@mui/material/CircularProgress";
import {
  AddTagButton,
  OptionsContainer,
  PlusIcon,
  ResultContainer,
} from "./styles";
import { Tag } from "../Tag";
import { useQuery } from "react-query";
import { api, TagItem } from "../../api";
import { TagModal } from "./TagModal";
import { toast } from "react-toastify";
import { Text } from "../Text";
import { useDataContext } from "../../hooks/useData";
import { TagPagination } from "./TagPagination";
import { TagSearch } from "./TagSearch";

export enum ActionType {
  "edit",
  "new",
  "delete",
  "none",
}

export const RightPanel: React.FC = () => {
  const { getValues, setValue } = useDataContext();
  const searchTerm = getValues("searchTerm");
  const page = getValues("page");
  const modal = getValues('modal')
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["getAll", page],
    () => api.get(searchTerm, page)
  );

  const onCloseModal = () => {
    setValue('modal', { open: false, action: ActionType.none, tag: { label: "" } });
  };

  useEffect(() => {
    if (isError) {
      toast.error(`${error}`);
    }
  }, [isError, error]);

  useEffect(() => {
    if (refetch) {
      const refetchData = setTimeout(() => {
        refetch();
        setValue("page", 1);
      }, 3000);
      return () => clearTimeout(refetchData);
    }
  }, [searchTerm, refetch, setValue]);

  return (
    <Container width="70%" height="85vh" flexDirection="column">
      <OptionsContainer>
        <AddTagButton
          onClick={() =>
            setValue('modal', { open: true, action: ActionType.new, tag: { label: "" } })
          }
          endIcon={<PlusIcon />}
        >
          New Tag
        </AddTagButton>
      </OptionsContainer>
      <TagSearch refetch={() => refetch()} />
      <ResultContainer isLoading={isLoading}>
        {isLoading ? (
          <CircularProgress />
        ) : !data?.tags.length ? (
          <Text
            fontSize={12}
            textAlign={"center"}
            width={"100%"}
            marginTop={"50px"}
          >
            Sorry! No Tags Founded &#x1F614;
          </Text>
        ) : (
          data?.tags?.map((tag: TagItem) => (
            <Tag
              key={tag.id}
              label={tag.label}
              onDelete={() =>
                setValue('modal', { open: true, action: ActionType.delete, tag: tag })
              }
              onEdit={() =>
                setValue('modal', { open: true, action: ActionType.edit, tag: tag })
              }
            />
          ))
        )}
      </ResultContainer>
      {data?.totalPages > 1 ? (
        <TagPagination totalPages={data.totalPages} />
      ) : null}
      <TagModal {...modal} onClose={onCloseModal} />
    </Container>
  );
};
