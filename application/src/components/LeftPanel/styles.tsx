import styled from "styled-components";

export const RecentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;
  gap: 1rem;
  width: 100%;
  height: 90%;
  padding-top: 10px;
  border-right: 1px solid ${(props) => props.theme.gray_border};
`;

export const RecentTitle = styled.label`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  justify-content: center;
  align-items: center;
  font-size: 0.875rem;
  padding: 8px;
  color: ${(props) => props.theme.white};
`;

export const RecentTagContainer = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  gap: 10px;
`;
