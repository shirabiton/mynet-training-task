import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    header: {
      backgroundColor: "black",
      color: "white",
      minHeight: "8vh",
      margin: "0 0 1vw 0",
      display: "flex",
      alignItems: "center",
      "& p": {
        fontSize: "0.8vw",
        textAlign: "center",
        "@media (max-width: 1000px)": {
          fontSize: "1.4vw",
        },
        "@media (max-width: 500px)": {
          fontSize: "2.5vw",
        },
      },
    },
  },
  headerContent: {
    width: "80%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "0 auto",
  },
  logo: {
    margin: 0,
    padding: "1.5vw 0",
    cursor: "pointer",
    fontWeight: "500",
    fontSize: "1.2vw",
    display: "inline-block",
    "@media (max-width: 1000px)": {
      fontSize: "2.2vw",
    },
    "@media (max-width: 500px)": {
      fontSize: "2.7vw",
    },
  },
  profilePlaceholder: {
    display: "flex",
    flexGrow: "0.7",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    width: "7vw",
    justifyContent: "space-between",
    "@media (max-width: 1000px)": {
      width: "12vw",
    },
    "@media (max-width: 500px)": {
      width: "20vw",
    },
  },
  profileIcon: {
    display: "flex",
    justifySelf: "center",
    width: "1.2vw",
    height: "auto",
    cursor: "pointer",
    "&:hover:not(:active)": {
      scale: "0.9",
    },
    "@media (max-width: 1000px)": {
      width: "2vw",
    },
    "@media (max-width: 500px)": {
      width: "2.5vw",
    },
  },
});

export default useStyles;
