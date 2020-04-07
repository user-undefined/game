/*eslint-disable */
import { useState, useEffect } from 'react';
import { calculateCellDimension, getBoardWidth } from "./board.utils";

function getWindowDimension() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export const useCellDimensions = (cellsAmount, breakpoint) => {
  const [windowDimension, setWindowDimension] = useState(getWindowDimension());
  const [cellDimension, setCellDimension] = useState({ width: 0, height: 0 })

  const boardWidth = getBoardWidth(breakpoint);
  const boardHeight = cellsAmount / boardWidth;
  const boardSize = { width: boardWidth, height: boardHeight };
  
  useEffect(() => {
    const calculatedCellDimension = calculateCellDimension(boardSize, windowDimension);
    setCellDimension(calculatedCellDimension);
  }, [windowDimension])

  useEffect(() => {
    function handleResize() {
      setWindowDimension(getWindowDimension());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return cellDimension;
}