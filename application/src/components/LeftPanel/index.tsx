import React from "react";
import { Container } from "../Container";
import { RecentContainer, RecentTagContainer, RecentTitle } from "./styles";
import { Tag } from "../Tag";
import { useQuery } from "react-query";
import { TagItem, api } from "../../api";
import { useDataContext } from "../../hooks/useData";
import { ActionType } from "../RightPanel";

export const LeftPanel: React.FC = () => {
  const { data } = useQuery(["getRecent"], () => api.getRecent());
  const { setValue } = useDataContext()

  return (
    <Container
      flexDirection="column"
      width="30%"
      height={"85vh"}
      justifyContent="center"
    >
      <RecentContainer>
        <RecentTitle>Recent Added</RecentTitle>
        <RecentTagContainer>
          {data?.map((tag: TagItem) => (
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
          ))}
        </RecentTagContainer>
      </RecentContainer>
    </Container>
  );
};
