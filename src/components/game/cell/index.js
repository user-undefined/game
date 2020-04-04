import React from "react";
import { getCellComponent } from "./cell.utils";

const Cell = ({ role, ...restProps }) => {
  const CellComponent = getCellComponent(role);
  return <CellComponent {...restProps} />
}

export default Cell;