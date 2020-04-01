import React, { createContext } from "react";

import { useCreateGameWithCredentials } from "./create-game-screen/create-game-screen.hooks";

export const GameScreenContext = createContext({
  gameCredentials: {},
  setGameCredentials: () => {},
  createGame: () => {}
});

const GameScreenWrapper = ({ children }) => {
  const createGameGameWithCredentials = useCreateGameWithCredentials();

  return (
    <GameScreenContext.Provider value={createGameGameWithCredentials}>
      {children}
    </GameScreenContext.Provider>
  );
};

export default GameScreenWrapper;
