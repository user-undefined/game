import React from "react";
import { Router } from "@reach/router";

import Authentication from "../../facilities/authentication/credentials.context";

import CreateGameScreen from "./create-game-screen/create-game-screen.component";
import OngoingGameScreen from "./ongoing-game-screen/ongoing-game-screen.component";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {}
}));

const GameScreen = ({ path }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Authentication>
        <Router>
          <OngoingGameScreen path=":id/master/:secretKey" />
          <OngoingGameScreen path=":id" />
        </Router>
      </Authentication>
    </div>
  );
};

export default GameScreen;
