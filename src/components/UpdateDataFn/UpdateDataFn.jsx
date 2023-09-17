import CloseIcon from "@mui/icons-material/Close";
import { Alert, IconButton, Snackbar } from "@mui/material";
import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeAlert } from "../../RTK/Reducers/MessageReducer";
const UpdateDataFn = () => {
  // console.log(typeAlert);
  let dispatch = useDispatch();
  let { typeAlert, message } = useSelector((state) => state.MessageReducer);

  const handleClose = useCallback(
    (event, reason) => {
      if (reason === "clickaway") {
        return;
      }
      dispatch(closeAlert());
    },
    [dispatch]
  );
  const action = useCallback(
    (e) => {
      <>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </>;
    },
    [handleClose]
  );

  return (
    <>
      <Snackbar
        open={typeAlert}
        autoHideDuration={1600}
        onClose={handleClose}
        message="Note archived"
        action={action}
        className=" !right-0  !mx-auto w-fit  max-[450px]:!max-w-[80%]"
      >
        <Alert
          onClose={handleClose}
          severity="success"
          className=" !w-full !max-w-full"
          sx={{
            backgroundColor: "#1976d2",
            color: "#fff",
          }}
        >
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};

export default React.memo(UpdateDataFn);
