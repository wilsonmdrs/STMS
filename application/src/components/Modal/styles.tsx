import { Modal as MUIModal, Box } from "@mui/material";
import styled from "styled-components";
import Icon from "@mui/icons-material/Close";

export const ModalContainer = styled(MUIModal)`
  && {
    display: flex;
    justify-content: center;
    align-items: center;
    &&:first-child {
      background-color: #ffffff05;
      filter: blur(2px);
    }
  }
`;

export const ModalContent = styled(Box)`
  && {
    background-color: ${(props) => props.theme.white};
    width: 40%;
    border-radius: 15px;
    border: 1px solid ${(props) => props.theme.gray_border};
  }
`;

export const ModalHeaderContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.gray_border};
  justify-content: space-between;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 10px;
  justify-content: center;
  align-items: center;
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const CloseIcon = styled(Icon)`
  cursor: pointer;
  &&:hover {
    background-color: ${(props) => props.theme.gray_border};
    border-radius: 50%;
  }
`;
