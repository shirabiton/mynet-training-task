import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  "@global": {
    body: {
      direction: "rtl",
      margin: 0,
      padding: 0,
      fontFamily: "system-ui",
      fontSize: "1rem",
    },
    h1: {
      fontSize: "1rem",
      fontWeight: "normal",
      margin: 0,
      padding: 0,
      "@media (min-width: 1024px)": {
        fontSize: "1.3rem",
      },
    },
    p: {
      fontSize: "0.65rem",
      "@media (min-width: 1024px)": {
        fontSize: "0.8rem",
      },
    },
    "::-webkit-scrollbar": {
      width: "10px",
    },
    "::-webkit-scrollbar-thumb": {
      backgroundColor: "white",
      border: "1px black solid",
      borderRadius: "10px",
    },
    "::-webkit-scrollbar-track": {
      backgroundColor: "black",
    },
  },
});

export default useStyles;
