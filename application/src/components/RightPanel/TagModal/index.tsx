import React, { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "../../Modal";
import { Text } from "../../Text";
import { Button } from "../../Button";
import { Input } from "../../Input";
import { ActionType } from "..";
import { useTagClient } from '../../../hooks/useTagClient'
import { TagItem } from "../../../api";

interface Props {
    action:ActionType
    open:boolean
    onClose():void
    tag:TagItem
}

export const TagModal:React.FC <Props> = ({action, open, onClose, tag}) => {

    const [inputTag, setInputTag] = useState(tag.label)

    const tagClient = useTagClient()

    const onAdd = async (label: string) => {
      if (!label) return null;
      tagClient.onAdd({label})
      setInputTag('')
    };
  
    const onEdit = async (tag: TagItem) => {
      if (!tag.id || !tag.label) return null;
      tagClient.onEdit({id:tag.id, label:tag.label})
      onCloseModal()
    };
  
    const onDelete = async (id:string | undefined) => {
        if (!id) return null;
        tagClient.onDelete(id);
        onCloseModal()
    };

    useEffect(() => {
       if (tag.label) setInputTag(tag.label) 
    },[tag.label])

    const onClickModalButton = () => {
        if (action === ActionType.new) onAdd(inputTag)
        if (action === ActionType.edit)  onEdit({id:tag.id, label:inputTag})
        if (action === ActionType.delete) onDelete(tag.id)
    }

    const onCloseModal = () => {
      onClose()
      setInputTag('')
    }

    return (
        <Modal open={open} onClose={onCloseModal} >
        <ModalHeader>
          <Text variant="h6" fontSize={14}>
             {action === ActionType.new ? 'Add New Tag' : action === ActionType.edit ? 'Edit Tag' : action === ActionType.delete ? 'Delete Tag' : null}
          </Text>
        </ModalHeader>
        <ModalBody>
            {action === ActionType.delete ? (
              <>
                <Text>Are you sure!</Text>
                <Text>This action will delete this tag permanently.</Text>
              </>
            ): ( 
            <Input value={inputTag} onChange={(event) => setInputTag(event.target.value)} onKeyDown={event => event.code === 'Enter' && onClickModalButton()}/>
            )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClickModalButton} size={150}>
            {action === ActionType.delete ? 'Confirm' : 'Save'}
          </Button>
        </ModalFooter>
      </Modal>
    )
}