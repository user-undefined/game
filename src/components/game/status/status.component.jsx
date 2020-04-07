import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Person from "@material-ui/icons/Person";
import { Typography } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  teamIcon: {
    fontSize: "5rem",
  },
  score: {
    fontSize: "3rem",
    fontWeight: 700,
  },
  red: {
    color: "#e79686",
  },
  blue: {
    color: "#D0DFE6",
  },
  inactive: {
    color: "#e5e5e5",
  },
}));

const isTeamRed = (team) => team === "red";
const isTeamBlue = (team) => team === "blue";

export const Status = ({ status }) => {
  const classes = useStyles();
  console.log(status);
  const { red, blue } = status.wordsLeft;
  const teamTurn = status.startTeam;
  return (
    <Grid container xs={6} wrap="nowrap">
      <Grid container alignItems="center" direction="row-reverse" wrap="nowrap">
        <Person
          classes={{ fontSizeLarge: classes.teamIcon }}
          fontSize="large"
          htmlColor={isTeamBlue(teamTurn) ? "#D0DFE6" : "#e5e5e5"}
        />
        <div
          className={clsx(classes.score, {
            [classes.blue]: isTeamBlue(teamTurn),
            [classes.inactive]: !isTeamBlue(teamTurn),
          })}
        >
          {blue}
        </div>
      </Grid>
      <Grid container alignItems="center" wrap="nowrap">
        <Person
          htmlColor={isTeamRed(teamTurn) ? "#e79686" : "#e5e5e5"}
          classes={{ fontSizeLarge: classes.teamIcon }}
          fontSize="large"
        />
        <div
          className={clsx(classes.score, {
            [classes.red]: isTeamRed(teamTurn),
            [classes.inactive]: !isTeamRed(teamTurn),
          })}
        >
          {red}
        </div>
      </Grid>
    </Grid>
  );
};

export default Status;
