import React, { useContext } from "react";
import { Link } from "@reach/router";

import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";
import { GameScreenContext } from "../game-screen.context";
import {
  createUserGameLink,
  createMasterGameLink
} from "./create-game-screen.utils";

const useStyles = makeStyles(theme => ({
  container: {
    margin: theme.spacing(8, 2),
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column"
  },
  linksContainer: {
    display: "flex",
    flexDirection: "column",
    margin: theme.spacing(4, 0)
  },
  button: {},
  label: {}
}));

const CreateGameScreen = () => {
  const classes = useStyles();
  const { gameCredentials, createGame } = useContext(GameScreenContext);
  let userGameLink, masterGameLink;

  if (gameCredentials && gameCredentials.id && gameCredentials.secretKey) {
    userGameLink = createUserGameLink(gameCredentials.id);
    masterGameLink = createMasterGameLink(
      gameCredentials.id,
      gameCredentials.secretKey
    );
  }

  return (
    <div className={classes.container}>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={createGame}
      >
        <span className={classes.label}>Start Game</span>
      </Button>
      <div className={classes.linksContainer}>
        {userGameLink && <Link to={userGameLink}>User Role</Link>}
        {masterGameLink && <Link to={masterGameLink}>Master Role</Link>}
      </div>
    </div>
  );
};

export default CreateGameScreen;
