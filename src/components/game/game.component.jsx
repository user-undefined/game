/*eslint-disable */
import React, { useContext } from "react";

import { makeStyles } from "@material-ui/core/styles";
import Board from "./board/board.component";
import { GameContext } from "./game.context";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Game = ({ role }) => {
  const classes = useStyles();
  const { data } = useContext(GameContext);
  const { board } = data;

  return board ? (
    <div className={classes.layout}>
      <Board state={board.state} role={role} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Game;
