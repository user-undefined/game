import React from "react";
import clsx from "clsx";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

import CheckIcon from "@material-ui/icons/Check";

import { useCellStyles } from "../board-cell.component";

export const NeutralCell = ({ value, ordinal: cardNumber, position, onCheck }) => {
  const generalClasses = useCellStyles();

  return (
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
          {/* <div className={generalClasses.controls}>
            <IconButton aria-label="play/pause">
              <CheckIcon className={generalClasses.icon} onClick={() => onCheck(cardNumber, value)}/>
            </IconButton>
          </div> */}
        </CardContent>
      </div>
    </Card>
  );
};

export default NeutralCell;
