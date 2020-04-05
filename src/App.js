import React, { } from 'react';
import { Router } from "@reach/router";

import GameScreen from './screens/game-screen/game-screen.component';
import CreateGameScreen from "./screens/game-screen/create-game-screen/create-game-screen.component";
import Authentication from "./facilities/authentication/credentials.context";

function App() {
  return (
      <Authentication>
    <Router>
      <GameScreen path="game/*" />
      <CreateGameScreen path="/" />
    </Router>
      </Authentication>
  );
}

export default App;
