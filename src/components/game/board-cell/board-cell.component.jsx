import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

import BombCell from "./event-cell/bomb-cell.component";
import OwnerCell from "./event-cell/owned-cell.component";
import NooneCell from "./event-cell/noone-cell.component";

import { isMaster } from "./board-cell.roles";

const cellTypeMapping = {
  bomb: BombCell,
  owned: OwnerCell,
  noones: NooneCell
};

const useStyles = makeStyles({
  gameCell: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

export const useCellStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "300px",
    height: "300px"
  },
  containerBorder: {
    border: props => (isMaster(props.role) ? "none" : "2px solid black")
  },
  containerBg: {
    backgroundColor: "#FFF5C3"
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  value: {
    width: "100%",
    wordWrap: "break-word",
    textAlign: "center",
    hyphens: "manual"
  },
  cover: {
    width: 151,
    margin: theme.spacing(1)
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  icon: {
    height: 38,
    width: 38
  }
}));

/*eslint-disable */
export const BoardCell = ({ cell, position, role }) => {
  const classes = useStyles();

  const EventCell = cellTypeMapping[cell.type];
  const onCheck = (cardNumber, cardValue) => {
    if(confirm(`${cardNumber}. ${cardValue}`)) {
      acceptAnswer(cardNumber)
    }
  };

  return (
    <>
      <div className={classes.gameCell}>
        {EventCell && (
          <EventCell
            value={cell.value}
            role={role}
            position={position}
            owner={cell.owner}
            ordinal={cell.ordinal}
            onCheck={onCheck}
          />
        )}
      </div>
    </>
  );
};

export default BoardCell;
