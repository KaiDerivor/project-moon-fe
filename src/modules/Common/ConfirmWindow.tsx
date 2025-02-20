import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TaskType } from '../../redux/appReducer';
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'

type ConfirmWindowType = {
   isOpenConfirmation: boolean,
   setIsOpenConfirmation: (arg: boolean) => void
   category: string
   id: string
   object: TaskType
   deleteTask: (arg1: string, arg2: string, arg3: TaskType) => void,
   setId: (arg1: string) => void
}

export const ConfirmWindow: React.FC<ConfirmWindowType> = ({ isOpenConfirmation, setIsOpenConfirmation, category, id, object, deleteTask, setId }) => {
   return (
      <Dialog
         open={isOpenConfirmation}
         onClose={() => { setIsOpenConfirmation(false) }}
         aria-labelledby="alert-dialog-title"
         aria-describedby="alert-dialog-description"
      >
         <Box sx={{ backgroundColor: grey[900] }}>

            <DialogTitle id="alert-dialog-title">
               Видалити запис?
            </DialogTitle>
            <DialogContent>
               <DialogContentText id="alert-dialog-description">
                  Відновити запис буде неможливо, ви впевнені?
               </DialogContentText>
            </DialogContent>
            <DialogActions>
               <Button onClick={() => { setIsOpenConfirmation(false) }}>Скасувати</Button>
               <Button onClick={() => {
                  setId('')
                  deleteTask(category, id, object);
                  setIsOpenConfirmation(false);
               }} autoFocus>
                  Підтвердити
               </Button>
            </DialogActions></Box>
      </Dialog>
   )
}