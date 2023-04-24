import React from "react";
import {
  ModalBody,
  ModalContainer,
  ModalContent,
  ModalFooter,
  ModalHeaderContainer,
  CloseIcon,
} from "./styles";
import { ModalProps } from "@mui/material";

interface Props extends Omit<ModalProps, "children"> {
  children: React.ReactElement[] | React.ReactElement;
}

const Modal: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ModalContainer {...props}>
      <ModalContent>
        {React.Children.map(children, (child) => {
          return React.cloneElement(child, {
            onClose: props.onClose,
          });
        })}
      </ModalContent>
    </ModalContainer>
  );
};

interface ModalHeaderProps {
  children: React.ReactNode;
  onClose?: () => void;
}

const ModalHeader: React.FC<ModalHeaderProps> = ({
  children,
  onClose = () => {},
}) => {
  return (
    <ModalHeaderContainer>
      {children}
      <CloseIcon onClick={onClose} />
    </ModalHeaderContainer>
  );
};

export { ModalHeader, ModalBody, ModalFooter, Modal };
