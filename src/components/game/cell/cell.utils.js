import MasterCell from "./type/master-cell.component";
import UserCell from "./type/user-cell.component";

import { CELL_STATE, CELL_TYPES, TEAMS } from "./cell.constants";
import { colors } from "./cell.colors";

import { isUser, isMaster } from "../../../facilities/authorization/authorization.utils";

export const isOpened = (state) => {
  return state === CELL_STATE.OPENED;
}

export const getCellBackground = ({ type, owner }) => {
  switch (type) {
    case CELL_TYPES.OWNED:
      switch (owner) {
        case TEAMS.RED: return colors.teamRed;
        case TEAMS.BLUE: return colors.teamBlue;
        default: return null;
      };
    case CELL_TYPES.NOONES: return colors.neutral;
    case CELL_TYPES.BOMB: return colors.bomb;
    default: return "none";
  }
}

export const getTextColor = ({ type, owner }) => {
  switch (type) {
    case CELL_TYPES.OWNED: return colors.textDark;
    case CELL_TYPES.NOONES: return colors.textDark;
    case CELL_TYPES.BOMB: return colors.textLight;
    default: return "none";
  }
}


export const getCellComponent = role => {
  if (isUser(role)) return UserCell;
  if (isMaster(role)) return MasterCell
  return null;
}