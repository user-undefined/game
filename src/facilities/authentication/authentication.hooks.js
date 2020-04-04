/*eslint-disable */
import { useContext } from "react";
import { CredentialsContext } from "./credentials.context";

export const useAuthentication = () => {
  const { credentials, setCredentials } = useContext(CredentialsContext);
  const { id } = credentials;

  const authenticate = ({ id, secretKey }) => setCredentials({ id, secretKey });
  const isAuthenticated = () => !!id;

  return { authenticate, isAuthenticated };
}
