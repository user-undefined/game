import React from "react";
import clsx from "clsx";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

import { getCellBackground, getTextColor } from "./cell.utils";

export const useStyles = makeStyles((theme) => ({
  container: ({ height }) => ({
    position: "relative",
    display: "flex",
    alignItems: "center",
    height,
    cursor: "pointer",
    "&$containerOpened": {
      cursor: "not-allowed",
    },
  }),
  containerBorder: {
    border: "2px solid black",
  },
  containerOpened: {
    opacity: 0.45,
  },
  containerBackground: ({ background }) => ({
    background,
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }),
  details: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentRoot: {
    padding: 0,
    "&:last-child": {
      padding: 0,
    },
  },
  content: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  value: ({ textColor }) => ({
    wordWrap: "break-word",
    textAlign: "center",
    hyphens: "manual",
    color: textColor,
    fontSize: "1.5rem",
    fontWeight: 500,
    [theme.breakpoints.up("lg")]: {
      fontSize: "1.7rem",
    },
  }),
  cover: {
    width: 151,
    margin: theme.spacing(1),
  },
  controls: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  icon: ({ textColor }) => ({
    color: textColor,
    height: 38,
    width: 38,
  }),
}));

export const Cell = ({
  height,
  width,
  value,
  opened,
  owner,
  type,
  options = {},
}) => {
  const background = getCellBackground({ owner, type });
  const textColor = getTextColor({ owner, type });
  const classes = useStyles({ background, textColor, height, width });

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
        <CardContent
          classes={{ root: classes.contentRoot }}
          className={classes.content}
        >
          <div className={classes.value}>{value}</div>
          {!opened && controls && (
            <div className={classes.controls}>
              {controls.map(({ renderControl }) =>
                renderControl({ classes: { icon: classes.icon } })
              )}
            </div>
          )}
        </CardContent>
      </div>
    </Card>
  );
};

export default Cell;
