import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from '@material-ui/icons/Close';

import { useCellStyles } from "../board-cell.component";
import { isMaster } from "../board-cell.roles";

const useStyles = makeStyles(theme => ({
  containerBg: {
    backgroundColor: "#FFF5C3"
  }
}));

export const OwnedCell = ({ value, role, ordinal, position, owner, onCheck }) => {
  const generalClasses = useCellStyles({ role });
  const classes = useStyles();

  return isMaster(role) ? (
    <Card className={clsx(generalClasses.container, classes.containerBg)}>
      <div className={generalClasses.details}>
        <CardContent className={generalClasses.content}>
          <Typography
            component="h3"
            variant="h3"
            classes={{ root: generalClasses.value }}
          >
            {value}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {value}
          </Typography>
          <div className={generalClasses.controls}>
            <IconButton aria-label="play/pause">
              <CheckIcon className={generalClasses.icon} />
            </IconButton>
            <IconButton aria-label="close">
              <CloseIcon className={generalClasses.icon} />
            </IconButton>
          </div>
        </CardContent>
      </div>
    </Card>
  ) : (
    <Card
      className={clsx(generalClasses.container, generalClasses.containerBorder)}
    >
      <div className={generalClasses.details}>
        <CardContent className={generalClasses.content}>
          <Typography
            component="h3"
            variant="h3"
            classes={{ root: generalClasses.value }}
          >
            {value}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {value}
          </Typography>
          <div className={generalClasses.controls}>
            <IconButton aria-label="play/pause" onClick={onCheck}>
              <CheckIcon className={generalClasses.icon} />
            </IconButton>
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default OwnedCell;
