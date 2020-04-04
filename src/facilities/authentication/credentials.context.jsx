import React, { createContext } from "react";

import { useCredentials } from "./credentials.hooks";

export const CredentialsContext = createContext({
  credentials: {},
  setCredentials: () => {},
  getCredentials: () => {},
});

const Authentication = ({ children }) => {
  const credentialsContext = useCredentials();

  return (
    <CredentialsContext.Provider value={credentialsContext}>
      {children}
    </CredentialsContext.Provider>
  );
};

export default Authentication;
