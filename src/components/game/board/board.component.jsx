import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import BoardCell from "../board-cell/board-cell.component";

const useStyles = makeStyles(theme => ({
  board: {
    width: "100px",
    height: "100px"
  },
  boardCell: {
    margin: theme.spacing(1)
  }
}));

export const Board = ({ board, role, id, masterKey }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {board &&
        board.state &&
        board.state.map((gameRow, index) => {
          const columnIndex = index;
          return (
            <Grid direction="column">
              {gameRow.map((gameCell, index) => {
                const rowIndex = index;
                const position = {
                  rowIndex,
                  columnIndex
                };
                return (
                  <Grid item className={classes.boardCell}>
                    <BoardCell
                      cell={gameCell}
                      position={position}
                      role={role}
                      id={id}
                      masterKey={masterKey}
                    />
                  </Grid>
                );
              })}
            </Grid>
          );
        })}
    </Grid>
  );
};

export default Board;
