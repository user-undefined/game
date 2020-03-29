export const roleResolver = (role) => {
  return true;
}

export const isMaster = (role) => {
  return role === 'master';
}