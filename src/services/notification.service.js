import { NOTIFICATION_URL } from "./instance";

const getGameNotifications = (gameId) => {
  const ws = new WebSocket(`${NOTIFICATION_URL}?gameId=${gameId}`);
  return ws;
}

export default {
  getGameNotifications
}