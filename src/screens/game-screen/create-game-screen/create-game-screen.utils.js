export function isEmpty(obj) {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export function createUserGameLink(gameId) {
  return `/game/${gameId}`;
}


export function createMasterGameLink(gameId, masterKey) {
  return `/game/${gameId}/master/${masterKey}`;
}