import { BOARD_GRID } from "./board.constants";

export const calculateCellDimension = (boardSize, windowDimension) => {
  console.log("calculateCellDimension", boardSize, windowDimension, windowDimension.height / (boardSize.height + 1))
  return {
    width: windowDimension.width / (boardSize.width + 1),
    height: windowDimension.height / (boardSize.height + 1)
  }
}

export const getBoardWidth = (breakpoint) => {
  const gridResolution = BOARD_GRID[breakpoint];
  return 12 / gridResolution;
}