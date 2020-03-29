import React from "react";
import { gameDataUserHook, gameDataMasterHook } from "./game.hooks";
import { makeStyles } from "@material-ui/core/styles";
import Board from "./board/board.component";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Game = ({ role }) => {
  const classes = useStyles();
  const gameData = gameDataMasterHook();
  let { board } = gameData;
  if (board) {
    board = {
      state: [
        ...board.state.map(state => {
          return [...state, ...state];
        }),
        ...board.state.map(state => {
          const newState = state.map(cell => ({
            ...cell,
            value: "Wielmi dluga wartosc"
          }));
          return [...newState, ...newState];
        }),
        ...board.state.map(state => {
          return [...state, ...state];
        })
      ]
    };
  }
  console.log(board);
  return board ? (
    <div className={classes.layout}>
      <Board board={board} role={role} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Game;
