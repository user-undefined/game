import React from 'react';
import Game from './components/game/game.component';

function App() {
  const role = "user";

  return (
    <div>
      <Game role={role} />
    </div>
  );
}

export default App;
