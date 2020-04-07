import React from "react";

import withWidth from "@material-ui/core/withWidth";
import Grid from "@material-ui/core/Grid";
import Cell from "../cell";
import { useCellDimensions } from "./board.hooks";
import { BOARD_GRID } from "./board.constants";

export const Board = ({ state, size, role, width }) => {
  const flatState = state.flatMap((array) => array);
  const { height } = useCellDimensions(flatState.length, width);
  return (
    <Grid container spacing={1}>
      {flatState.map((cell, index) => (
        <Grid
          item
          xs={BOARD_GRID.xs}
          sm={BOARD_GRID.sm}
          md={BOARD_GRID.md}
          key={`board-cell-${index}`}
        >
          <Cell role={role} height={height} {...cell} />
        </Grid>
      ))}
    </Grid>
  );
};

export default withWidth()(Board);
