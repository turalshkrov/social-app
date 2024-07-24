import { Button, colors, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useAppDispatch, useAppSelector } from "..//../hook/hook";
import { modalIsOpenSelector } from "../../redux/selectors";
import { setIsOpen } from "../../redux/slices/modalSlice";

const LogoutModal = () => {
  const open = useAppSelector(state => modalIsOpenSelector(state, "logout")) || false;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(setIsOpen({ id: "logout", isOpen: false }));
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth='md'
    >
      <DialogTitle sx={{ fontSize: 18, width: { xs: '100%', sm: '400px' } }} id="alert-dialog-title">
        Are you sure want to log out?
      </DialogTitle>
      <DialogContent>
      </DialogContent>
      <DialogActions sx={{ p: 2 }}>
        <Button onClick={handleClose} sx={{ mr: 2, color: colors.grey[900] }}>
          Cancel
        </Button>
        <Button onClick={handleClose} variant="contained" className="dark-btn">
          Logout
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default LogoutModal;