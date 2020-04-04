import React from "react";
import Game from "./game.component";
import GameDataSource from "./game.context";

export default ({ role }) => {
  return (
    <GameDataSource role={role}>
      <Game role={role} />
    </GameDataSource>
  )
}