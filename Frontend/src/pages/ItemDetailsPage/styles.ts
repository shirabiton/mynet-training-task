import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  singleItemContainer: {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      minWidth: "40vw",
      height: "70vh",
      objectFit: "cover",
    },
  },
  singleItem: {
    width: "85%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: "3vw",
  },
  metaData: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    "& p": {
      color: "#565B5E",
      fontSize: "0.8rem",
    },
    "@media (min-width: 1024px)": {
      width: "50%",
    },
  },
});

export default useStyles;
