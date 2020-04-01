import React from "react";
import { getMasterGameData, getUserGameData } from "./game.hooks";
import { makeStyles } from "@material-ui/core/styles";
import Board from "./board/board.component";
import { isMaster, isUser } from "./game.roles";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
}));

const Game = ({ id, role, path, masterKey }) => {
  const classes = useStyles();
  let gameData;
  let board;

  console.log("Game", id, role, path, masterKey);

  if (id && isUser(role)) {
    gameData = getUserGameData(id);
    board = gameData.board;
  }

  if (id && isMaster(role)) {
    gameData = getMasterGameData(id, masterKey);
    board = gameData.board;
  }
  // if (board) {
  //   board = {
  //     state: [
  //       ...board.state.map(state => {
  //         return [...state, ...state];
  //       }),
  //       ...board.state.map(state => {
  //         const newState = state.map(cell => ({
  //           ...cell,
  //           value: "Wielmi dluga wartosc"
  //         }));
  //         return [...newState, ...newState];
  //       }),
  //       ...board.state.map(state => {
  //         return [...state, ...state];
  //       })
  //     ]
  //   };
  // }

  return id && board ? (
    <div className={classes.layout}>
      <Board board={board} role={role} id={id} masterKey={masterKey} />
    </div>
  ) : (
    <div>Loading</div>
  );
};

export default Game;
