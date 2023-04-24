import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import { Circle, TagElement } from './styles';

interface Props {
    label?:React.ReactNode
    onDelete():void
    onEdit():void
}

export const Tag:React.FC <Props> = ({label, onEdit, onDelete}) => {
    
    return (
        <TagElement 
            label={label} 
            deleteIcon={<Circle aria-label={'delete-button'}><ClearIcon fontSize='small' sx={{color: "#323232"}}/></Circle>}
            onClick={onEdit} 
            onDelete={onDelete}
        />
    )
}