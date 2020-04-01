import React from "react";

import BombCell from "./bomb-cell.component";
import OwnerCell from "./owned-cell.component";
import NooneCell from "./noone-cell.component";

const eventCellTypeMapping = {
  bomb: BombCell,
  owned: OwnerCell,
  noones: NooneCell
};

export const EventCell = ({
  value,
  type,
  ordinal: cellNumber,
  position,
  owner,
  onSuccess,
  onError
}) => {
  const EventCell = eventCellTypeMapping[type];

  if (EventCell) {
    return (
      <EventCell
        value={value}
        position={position}
        owner={owner}
        ordinal={cellNumber}
        onSuccess={onSuccess}
        onError={onError}
      />
    );
  }

  return null;
};

export default EventCell;
