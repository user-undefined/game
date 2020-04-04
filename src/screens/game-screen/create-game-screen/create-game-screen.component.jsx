import React, { useContext } from "react";
import { Link } from "@reach/router";

import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";

import { CredentialsContext } from "../../../facilities/authentication/credentials.context";

import {
  createUserGameLink,
  createMasterGameLink
} from "./create-game-screen.utils";

const StartButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
    border: "10px solid",
    borderRadius: "50%",
    lineHeight: 1.5,
    background: "#e74f69",
    borderColor: "#903355",
    "&:hover": {
      backgroundColor: "#e74f69",
      borderColor: "#903355",
      boxShadow: "none"
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#e74f69",
      borderColor: "#903355"
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)"
    }
  },
  label: {
    fontWeight: 700,
    fontSize: "1.5rem",
  },
})(Button);

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
  button: {
    width: "250px",
    height: "250px"
  },
  label: {}
}));

const CreateGameScreen = () => {
  const classes = useStyles();
  const { credentials, getCredentials } = useContext(CredentialsContext);
  let userGameLink, masterGameLink;

  if (credentials && credentials.id && credentials.secretKey) {
    userGameLink = createUserGameLink(credentials.id);
    masterGameLink = createMasterGameLink(
      credentials.id,
      credentials.secretKey
    );
  }

  return (
    <div className={classes.container}>
      <StartButton
        variant="contained"
        color="primary"
        className={classes.button}
        onClick={getCredentials}
      >
        <span className={classes.label}>Start Game</span>
      </StartButton>
      <div className={classes.linksContainer}>
        {userGameLink && <Link to={userGameLink}>User Role</Link>}
        {masterGameLink && <Link to={masterGameLink}>Master Role</Link>}
      </div>
    </div>
  );
};

export default CreateGameScreen;
