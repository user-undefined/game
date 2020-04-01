import React, { useContext } from "react";
import { Router } from "@reach/router";
import { GameScreenContext } from "../game-screen.context";
import Game from "../../../components/game/game.component";

const OngoingGameScreen = ({ path, gameId }) => {
  const { gameCredentials } = useContext(GameScreenContext);
  console.log("OngoingGameScreen", path, gameId);
  return (
    <Router>
      <Game path="/" id={gameId} role="user" />
      <Game path="/master/:masterKey" id={gameId} role="master" />
    </Router>
  );
};

export default OngoingGameScreen;
