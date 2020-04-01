import React from "react";
import { Router } from "@reach/router";

import GameScreenWrapper from "./game-screen.context";

import CreateGameScreen from "./create-game-screen/create-game-screen.component";
import OngoingGameScreen from "./ongoing-game-screen/ongoing-game-screen.component";

const GameScreen = ({ path }) => {
  console.log(path);
  return (
    <GameScreenWrapper>
      <Router>
        <CreateGameScreen path="create" />
        <OngoingGameScreen path=":gameId/*" />
      </Router>
    </GameScreenWrapper>
  );
};

export default GameScreen;
