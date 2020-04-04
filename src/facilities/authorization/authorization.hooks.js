/*eslint-disable */
import { useContext } from "react";
import { CredentialsContext } from "../authentication/credentials.context";
import { ROLES } from "./authorization.constants";

export const useAuthorization = () => {
  const { credentials } = useContext(CredentialsContext);
  const { id, secretKey } = credentials;

  const isMaster = !!(id && secretKey);
  const isUser = !!(id && !secretKey);

  let role = ROLES.UNKNOWN;
  if (isMaster) role = ROLES.MASTER;
  else if (isUser) role = ROLES.USER;


  return { role };
}
