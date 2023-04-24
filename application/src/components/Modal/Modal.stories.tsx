import type { Meta, StoryObj } from "@storybook/react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./";
import { Button } from "../Button";
import { useState } from "react";
import { Text } from "../Text";

const meta: Meta<typeof Modal> = {
  title: "Modal",
  component: Modal,
};

export default meta;

export const Default = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(!open)}>Open Modal</Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalHeader>
          <Text variant="h6" fontSize={"1rem"}>
            Title
          </Text>
        </ModalHeader>
        <ModalBody>Body</ModalBody>
        <ModalFooter>
          <Button onClick={() => setOpen(false)}>Save</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
