import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import Cell from "../cell";

const useStyles = makeStyles(theme => ({
  boardCell: {
    margin: theme.spacing(1)
  }
}));

export const Board = ({ state, role }) => {
  const classes = useStyles();

  return (
    <Grid container>
      {state &&
        state.map((boardRow, rowIndex) => {
          return (
            <Grid key={`board-row-${rowIndex}`}>
              {boardRow.map((cell, columnIndex) => {
                return (
                  <Grid
                    item
                    key={`board-cell-${rowIndex}-${columnIndex}`}
                    className={classes.boardCell}
                  >
                    <Cell role={role} {...cell} />
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
