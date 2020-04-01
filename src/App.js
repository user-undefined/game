import React, { } from 'react';
import { Router } from "@reach/router";

import GameScreen from './screens/game-screen/game-screen.component';

function App() {
  const role = "master";

  return (
    <Router>
      <GameScreen path="game/*" />
    </Router>
  );
}

export default App;
