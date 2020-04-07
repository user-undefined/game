/*eslint-disable */
import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Board from "./board/board.component";
import { GameContext } from "./game.context";

const useStyles = makeStyles((theme) => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    [theme.breakpoints.up("sm")]: {
      margin: theme.spacing(0, 1),
    },
    [theme.breakpoints.up("md")]: {
      margin: theme.spacing(0, 5),
    },
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 10),
    },
  },
}));

const Game = ({ role }) => {
  const classes = useStyles();
  const { data } = useContext(GameContext);
  const { board } = data;

  console.log("data", data);
  return board ? (
    <div className={classes.layout}>
      <Board state={board.state} size={board.size} role={role} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Game;
