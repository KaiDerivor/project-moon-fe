import { ListItem, IconButton, Box, Typography } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ConfirmWindow } from './ConfirmWindow'
import { TaskType } from './../../redux/appReducer'
import { useState } from "react";

type ActionButtonsType = {
   restoreTask: (arg1: string, arg2: string, arg3: TaskType) => void
   deleteTask: (arg1: string, arg2: string, arg3: TaskType) => void
   category: string
   id: string
   object: TaskType
   setIsOpenConfirmation?: (arg1: boolean) => void
   isOpenConfirmation?: boolean

}
export const ActionButtonsFinished = ({ restoreTask, deleteTask, category, id, object }: ActionButtonsType) => {
   return (
      <Box sx={{ display: 'flex', }}>
         <IconButton aria-label="restore"
            onClick={() => { restoreTask(category, id, object) }}>
            <RestoreIcon />
         </IconButton>
         <IconButton aria-label="delete"
            onClick={() => { deleteTask(category, id, object) }}>
            <DeleteSweepIcon />
         </IconButton>
      </Box>
   )
}
export const ActionButtonsTrash = ({ restoreTask, deleteTask, category, id, object, setIsOpenConfirmation = () => { }, isOpenConfirmation = false }: ActionButtonsType) => {
   const [idd, setId] = useState('')
   return (
      <>
         <Box sx={{ display: 'flex', }}>
            <IconButton aria-label="restore"
               onClick={() => { restoreTask(category, id, object) }}>
               <RestoreIcon />
            </IconButton>
            <IconButton aria-label="delete"
               onClick={() => {
                  setId(id);
                  setIsOpenConfirmation(true);
                  return
               }}>
               <DeleteForeverIcon />
            </IconButton>
         </Box>
         {idd &&
            <ConfirmWindow
               setIsOpenConfirmation={setIsOpenConfirmation}
               isOpenConfirmation={isOpenConfirmation}
               category={category}
               id={idd}
               object={object}
               deleteTask={deleteTask}
               setId={setId}
            />
         }
      </>
   )
}