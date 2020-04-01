import React, { useState } from "react";

import LinearProgress from "@material-ui/core/LinearProgress";
import { lighten, makeStyles, withStyles } from "@material-ui/core/styles";

import Game from "../../components/game/game.component";

const BorderLinearProgressRedTeam = withStyles({
  root: {
    height: 50,
    backgroundColor: lighten("#e79686", 0.5)
  },
  bar: {
    backgroundColor: "#e79686"
  }
})(LinearProgress);

const BorderLinearProgressBlueTeam = withStyles({
  root: {
    height: 50,
    backgroundColor: lighten("#D0DFE6", 0.5)
  },
  bar: {
    backgroundColor: "#D0DFE6"
  }
})(LinearProgress);

const useStyles = makeStyles(theme => ({
  button: {
    borderRadius: "10rem",
    width: "15rem",
    height: "5rem"
  },
  label: {
    fontWeight: 700,
    fontSize: "1.5rem"
  },
  progress: {
    margin: 0
  }
}));

const CreateGameScreen = () => {
  const classes = useStyles();
  const role = "master";

  return (
    <div className={classes.container}>
      {/* <BorderLinearProgressRedTeam
        className={classes.progress}
        variant="determinate"
        color="secondary"
        value={50}
      />
      <BorderLinearProgressBlueTeam
        className={classes.progress}
        variant="determinate"
        color="secondary"
        value={50}
      /> */}
      <Game role={role} />
    </div>
  );
};

export default CreateGameScreen;
