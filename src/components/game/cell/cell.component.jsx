import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { getCellBackground, getTextColor } from "./cell.utils";

export const useStyles = makeStyles(theme => ({
  container: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "300px",
    height: "150px",
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
  containerBackground: ({ background }) => ({
    background,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
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
  value: ({ textColor }) => ({
    width: "100%",
    wordWrap: "break-word",
    textAlign: "center",
    hyphens: "manual",
    color: textColor

  }),
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
  icon: ({ textColor }) => ({
    height: 38,
    width: 38,
    color: textColor
  })
}));

export const Cell = ({ value, opened, owner, type, options = {} }) => {
  const background = getCellBackground({ owner, type });
  const textColor = getTextColor({ owner, type });
  const classes = useStyles({ background, textColor });

  const { controls } = options;

  return (
    <Card
      raised={!opened}
      className={clsx(
        classes.container,
        classes.containerBorder,
        classes.containerBackground,
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
            {controls.map(({ renderControl }) =>
              renderControl({ classes: { icon: classes.icon } })
            )}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Cell;
