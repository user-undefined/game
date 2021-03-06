export const isMaster = (role) => {
  return role === 'master';
}

export const isUser = (role) => {
  return role === 'user';
}

export const getRole = credentials => {
  if (credentials.id && credentials.secretKey) {
    return "master";
  }
  if (credentials.id && !credentials.secretKey) {
    return "user";
  }

  return "unknown";
}