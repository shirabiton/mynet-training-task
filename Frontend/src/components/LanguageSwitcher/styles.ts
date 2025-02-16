import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  toggleButton: {
    backgroundColor: "white",
    borderRadius: "15px",
    padding: "0.5vw 1vw",
    cursor: "pointer",
    fontWeight: "300",
    border: "1px solid black",
    minWidth: "5vw",
    "&:hover:not(:active)": {
      backgroundColor: "black",
      color: "white",
      border: "1px solid white",
    },
  },
});
export default useStyles;
