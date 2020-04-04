import { ROLES } from "./authorization.constants";

export const isMaster = (role) => role === ROLES.MASTER;
export const isUser = (role) => role === ROLES.USER;

export const getRole = credentials => {
  if (credentials.id && credentials.secretKey) {
    return "master";
  }
  if (credentials.id && !credentials.secretKey) {
    return "user";
  }

  return "unknown";
}