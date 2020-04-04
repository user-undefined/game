/*eslint-disable */
import { useEffect, useState } from "react";
import authService from "../../services/auth.service";

export const useCredentials = () => {
  const [credentialsRequest, requestCredentials] = useState(false);
  const [credentials, setCredentials] = useState({});


  useEffect(() => {
    async function fetchCredentials() {
      const { data: { id, secretKey} } = await authService.fetchCredentials();
      setCredentials({ id, secretKey});
    }

    if (credentialsRequest) {
      fetchCredentials();
    }
  }, [credentialsRequest])

  const getCredentials = () => {
    requestCredentials(true);
  }

  return { credentials, setCredentials, getCredentials };
}
