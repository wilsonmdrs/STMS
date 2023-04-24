import React, { useEffect, useState } from "react";
import { Container } from "../Container";
import CircularProgress from "@mui/material/CircularProgress";
import {
  AddTagButton,
  OptionsContainer,
  PlusIcon,
  ResultContainer,
} from "./styles";
import { Search } from "../Search";
import { Tag } from "../Tag";
import { Pagination } from "@mui/material";
import { useQuery, useQueryClient} from "react-query";
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

interface Modal {
  open: boolean;
  action: ActionType;
  tag: TagItem;
}

export const RightPanel: React.FC = () => {
  const { getValues, setValue } = useDataContext()
  const searchTerm = getValues('searchTerm')
  const page = getValues('page')
  const { data, isLoading, isError, error, refetch } = useQuery(
    ["getAll", page],
    () => api.get(searchTerm, page),
    );
    console.log(data)
    const [modal, setModal] = useState<Modal>({
      open: false,
      action: ActionType.none,
      tag: { label: "" },
    });
    
  const onCloseModal = () => {
    setModal({ open: false, action: ActionType.none, tag: { label: "" } });
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
        setValue('page', 1);
      }, 3000);
      return () => clearTimeout(refetchData);
    }
  }, [searchTerm, refetch]);

  return (
    <Container width="70%" height="85vh" flexDirection="column">
      <OptionsContainer>
        <AddTagButton
          onClick={() =>
            setModal({ open: true, action: ActionType.new, tag: { label: "" } })
          }
          endIcon={<PlusIcon />}
        >
          New Tag
        </AddTagButton>
      </OptionsContainer>
      <TagSearch refetch={() => refetch()}/>
      <ResultContainer isLoading={isLoading}>
        {(isLoading) ? (
          <CircularProgress />
        ) : (
          !data?.tags.length ? <Text fontSize={12} textAlign={'center'} width={'100%'} marginTop={'50px'}>Sorry! No Tags Founded &#x1F614;</Text> : 
          data?.tags?.map((tag: TagItem) => (
            <Tag
              key={tag.id}
              label={tag.label}
              onDelete={() =>
                setModal({ open: true, action: ActionType.delete, tag: tag })
              }
              onEdit={() =>
                setModal({ open: true, action: ActionType.edit, tag: tag })
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
