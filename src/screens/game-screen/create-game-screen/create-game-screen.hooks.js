/*eslint-disable */
import { useEffect, useState } from "react";
import gameService from "../../../services/game.service";

export const useCreateGameWithCredentials = () => {
  const [gameStartRequest, setGameStartRequest] = useState(false);
  const [gameCredentials, setGameCredentials] = useState({});

  useEffect(() => {
    async function startGameRequest() {
      const { data } = await gameService.createGame();
      setGameCredentials(data);
    }

    if (gameStartRequest) {
      startGameRequest();
    }
  }, [gameStartRequest])

  const createGame = () => {
    setGameStartRequest(true);
  }

  return { gameCredentials, setGameCredentials, createGame };
}
