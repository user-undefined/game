/*eslint-disable */
import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import IconButton from "@material-ui/core/IconButton";
import CheckIcon from "@material-ui/icons/Check";

import { isOpened } from "../cell.utils";
import Cell from "../cell.component";

import { useGameCard } from "../../game.hooks";

const MasterCell = ({ value, type, state, owner, ordinal }) => {
  const { openCard } = useGameCard();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const opened = isOpened(state);

  const options = {
    controls: [
      {
        renderControl: ({ classes }) => (
          <IconButton aria-label="choice" onClick={handleOpen}>
            <CheckIcon className={classes.icon} />
          </IconButton>
        )
      }
    ]
  };


  return (
    <>
      <Cell
        value={value}
        type={type}
        owner={owner}
        ordinal={ordinal}
        opened={opened}
        options={options}
      />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {`Are you sure you want open word "${value}"?`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            It's not possible to undo opened card
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => {
              openCard(ordinal);
              handleClose();
            }}
            color="primary"
          >
            Yes
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MasterCell;
