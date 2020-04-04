import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { getCellColor } from "./cell.utils";

export const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "300px",
    height: "300px",
    cursor: "pointer",
    "&$containerOpened": {
      cursor: "not-allowed"
    }
  },
  containerBorder: {
    border: "2px solid black"
  },
  containerOpened: {
    opacity: 0.45
  },
  containerBg: ({ background }) => ({
    background,
    backgroundSize: "cover"
  }),
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  content: {
    flex: "1 0 auto",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column"
  },
  value: {
    width: "100%",
    wordWrap: "break-word",
    textAlign: "center",
    hyphens: "manual"
  },
  cover: {
    width: 151,
    margin: theme.spacing(1)
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  icon: {
    height: 38,
    width: 38
  }
}));

export const Cell = ({ value, opened, owner, type, options = {} }) => {
  const background = getCellColor({ owner, type });
  const classes = useStyles({ background });

  const { controls } = options;

  return (
    <Card
      raised={!opened}
      className={clsx(
        classes.container,
        classes.containerBorder,
        classes.containerBg,
        opened && classes.containerOpened
      )}
    >
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component="h3"
            variant="h3"
            classes={{ root: classes.value }}
          >
            {value}
          </Typography>
        </CardContent>
        {!opened && controls && (
          <div className={classes.controls}>
            {controls.map(({ renderControl }) => renderControl({ classes: { icon: classes.icon}}))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Cell;
