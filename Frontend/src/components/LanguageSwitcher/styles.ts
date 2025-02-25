import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  toggleButton: {
    backgroundColor: "white",
    color: "black",
    borderRadius: "15px",
    padding: "0.5vw 1vw",
    cursor: "pointer",
    fontWeight: "300",
    fontSize: "0.7vw",
    border: "1px solid black",
    minWidth: "5vw",
    "&:hover:not(:active)": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
    },
    "@media (max-width: 1000px)": {
      fontSize: "1.2vw",
    },
    "@media (max-width: 500px)": {
      fontSize: "2vw",
    },
  },
});
export default useStyles;
