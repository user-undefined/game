import React, { useEffect } from "react";

import { useAuthentication } from "../../../facilities/authentication/authentication.hooks";
import { useAuthorization } from "../../../facilities/authorization/authorization.hooks";

import Game from "../../../components/game";

const OngoingGameScreen = ({ id, secretKey }) => {
  const { authenticate, isAuthenticated } = useAuthentication();
  const { role } = useAuthorization();

  useEffect(() => {
    authenticate({ id, secretKey });
  }, []);

  return isAuthenticated() ? <Game role={role} /> : null;
};

export default OngoingGameScreen;
