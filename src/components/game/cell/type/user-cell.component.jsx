/*eslint-disable */
import React from "react";

import { isOpened } from "../cell.utils";
import Cell from "../cell.component";

const UserCell = ({ value, ordinal, state, owner, type }) => {
  const opened = isOpened(state);
  return (
    <Cell
      value={value}
      ordinal={ordinal}
      state={state}
      type={type}
      owner={owner}
      opened={opened}
    />
  );
};

export default UserCell;