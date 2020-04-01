import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import NeutralCell from "./neutral-cell/neutral-cell.component";
import EventCell from "./event-cell/event-cell.component";

import { useOpenGameCard } from "../game.hooks";
import { GameScreenContext } from "../../../screens/game-screen/game-screen.context";

import { isMaster, isUser } from "./board-cell.roles";

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
    border: "2px solid black"
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
export const BoardCell = ({ cell, position, role, id, masterKey }) => {
  const classes = useStyles();
  // const {
  //   gameCredentials: { id, masterKey }
  // } = useContext(GameScreenContext);
  console.log("BoardCell::", id, masterKey);
  if (id && masterKey) {
    const { data, openCard } = useOpenGameCard(id, masterKey);

    const onCorrectAnswer = (cardNumber, cardValue) => {
      if (confirm(`${cardNumber}. ${cardValue}`)) {
        openCard(cardNumber);
      }
    };

    const onIncorrectAnswer = (cardNumber, cardValue) => {
      if (confirm(`${cardNumber}. ${cardValue}`)) {
        openCard(cardNumber);
      }
    };

    if (isMaster(role)) {
      return (
        <div className={classes.gameCell}>
          <EventCell
            type={cell.type}
            value={cell.value}
            role={role}
            position={position}
            owner={cell.owner}
            ordinal={cell.ordinal}
            onSuccess={onCorrectAnswer}
            onError={onIncorrectAnswer}
          />
        </div>
      );
    }

    if (isUser(role)) {
      return (
        <div className={classes.gameCell}>
          <NeutralCell
            value={cell.value}
            role={role}
            position={position}
            owner={cell.owner}
            ordinal={cell.ordinal}
          />
        </div>
      );
    }
  }

  return null;
};

export default BoardCell;
