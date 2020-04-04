import React, { useEffect } from "react";

import { makeStyles } from "@material-ui/core/styles";

import { useAuthentication } from "../../../facilities/authentication/authentication.hooks";
import { useAuthorization } from "../../../facilities/authorization/authorization.hooks";

import Game from "../../../components/game";

const useStyles = makeStyles(theme => ({
  layout: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: "100vw",
    minHeight: "100vh"
  }
}));

const OngoingGameScreen = ({ id, secretKey }) => {
  const classes = useStyles();
  const { authenticate, isAuthenticated } = useAuthentication();
  const { role } = useAuthorization();

  useEffect(() => {
    authenticate({ id, secretKey });
  }, []);

  return isAuthenticated() ? (
    <div className={classes.layout}>
      <Game role={role} />
    </div>
  ) : null;
};

export default OngoingGameScreen;
