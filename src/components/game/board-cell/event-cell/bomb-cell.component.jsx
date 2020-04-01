import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import bomb from "./bomb.svg";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";

import { useCellStyles } from "../board-cell.component";

const useStyles = makeStyles(theme => ({
  containerBg: {
    backgroundColor: "#a39391"
  }
}));

export const BombCell = ({
  value,
  ordinal: cellNumber,
  position,
  onSuccess,
  onError
}) => {
  const generalClasses = useCellStyles();
  const classes = useStyles();

  return (
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
              <CheckIcon
                className={generalClasses.icon}
                onClick={() => onSuccess(cellNumber, value)}
              />
            </IconButton>
            <IconButton aria-label="close">
              <CloseIcon
                className={generalClasses.icon}
                onClick={() => onError(cellNumber, value)}
              />
            </IconButton>
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={generalClasses.cover}
        src={bomb}
        component="img"
        title="bomb"
      />
    </Card>
  );
};

export default BombCell;
