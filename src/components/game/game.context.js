import React, { createContext, useContext, useEffect } from "react";
import { CredentialsContext } from "../../facilities/authentication/credentials.context";
import { useGameNotifications, useGameData } from "./game.hooks";


export const GameContext = createContext({
  version: 0,
  data: {}
});

const GameDataSource = ({ children, role }) => {
  const { credentials } = useContext(CredentialsContext);
  const { id } = credentials;
  const { gameVersion } = useGameNotifications(id);
  const { gameData, getGameData } = useGameData(role);

  useEffect(() => {
    getGameData(gameVersion);
  }, [gameVersion]);

  return (
    <GameContext.Provider value={{ version: gameVersion, data: gameData }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameDataSource;
